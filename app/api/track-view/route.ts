import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { createHash } from "crypto"

export const runtime = "nodejs"

function hashIP(ip: string | null): string | null {
  if (!ip) return null
  // Hash IP for privacy
  return createHash("sha256").update(ip).digest("hex").substring(0, 16)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const { path } = body

    if (!path || typeof path !== "string") {
      return NextResponse.json({ error: "Invalid path" }, { status: 400 })
    }

    const userAgent = req.headers.get("user-agent") || null
    const forwardedFor = req.headers.get("x-forwarded-for") || ""
    const ipHeader = forwardedFor.split(",")[0]?.trim()
    const ip = ipHeader || req.headers.get("x-real-ip") || null
    const ipHash = hashIP(ip)

    // Check if this user (by user_agent) visited within the last 1 minute (for testing)
    let shouldCountAsView = true
    
    if (userAgent) {
      const oneMinuteAgo = new Date(Date.now() - 30 * 60 * 1000).toISOString()
      const recentVisit = db
        .prepare(
          `SELECT id, created_at FROM page_views 
           WHERE user_agent = ? AND created_at >= datetime(?) 
           ORDER BY created_at DESC
           LIMIT 1`
        )
        .get(userAgent, oneMinuteAgo) as { id: number; created_at: string } | undefined

      // If user visited within last 1 minute, don't count as new view
      if (recentVisit) {
        shouldCountAsView = false
      }
    }

    // Only insert if it's a new view (more than 30 minutes since last visit)
    if (shouldCountAsView) {
      const stmt = db.prepare(
        "INSERT INTO page_views (path, user_agent, ip_hash) VALUES (?, ?, ?)"
      )
      stmt.run(path, userAgent, ipHash)
    }

    return NextResponse.json({ 
      success: true, 
      counted: shouldCountAsView 
    })
  } catch (error) {
    console.error("Error tracking view:", error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      { error: `Failed to track view: ${errorMessage}` },
      { status: 500 }
    )
  }
}
