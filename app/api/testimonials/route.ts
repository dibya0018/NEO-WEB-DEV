import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export const runtime = "nodejs"

function extractYoutubeId(url: string): string | null {
  try {
    if (url.includes("youtube.com/shorts/")) {
      return url.split("youtube.com/shorts/")[1].split(/[?&]/)[0]
    }
    if (url.includes("youtube.com/watch")) {
      const u = new URL(url)
      return u.searchParams.get("v")
    }
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1].split(/[?&]/)[0]
    }
    return null
  } catch {
    return null
  }
}

export async function GET() {
  try {
    // Check which column exists and use the appropriate query
    const tableInfo = db.prepare("PRAGMA table_info(testimonials)").all() as Array<{ name: string }>
    const columnNames = tableInfo.map(col => col.name)
    const hasYoutubeId = columnNames.includes("youtube_id")
    const hasYoutubeUrl = columnNames.includes("youtube_url")
    
    let testimonials
    if (hasYoutubeId) {
      testimonials = db
        .prepare(
          "SELECT id, youtube_id, url, created_at FROM testimonials ORDER BY created_at DESC"
        )
        .all()
    } else if (hasYoutubeUrl) {
      // Map youtube_url to youtube_id in the response
      const rows = db
        .prepare(
          "SELECT id, youtube_url, url, created_at FROM testimonials ORDER BY created_at DESC"
        )
        .all() as Array<{ id: number; youtube_url: string; url: string; created_at: string }>
      testimonials = rows.map(row => ({
        id: row.id,
        youtube_id: row.youtube_url,
        url: row.url,
        created_at: row.created_at
      }))
    } else {
      throw new Error("Testimonials table missing required columns")
    }

    return NextResponse.json({ testimonials })
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return NextResponse.json(
      { error: "Failed to load testimonials" },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { url } = body

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    const youtubeId = extractYoutubeId(url)

    if (!youtubeId) {
      return NextResponse.json(
        { error: "Could not extract YouTube video ID from URL" },
        { status: 400 }
      )
    }

    try {
      // Check which column exists in the table and their NOT NULL constraints
      const tableInfo = db.prepare("PRAGMA table_info(testimonials)").all() as Array<{ name: string; notnull: number }>
      const columnNames = tableInfo.map(col => col.name)
      const columnMap = new Map(tableInfo.map(col => [col.name, col.notnull === 1]))
      
      const hasYoutubeId = columnNames.includes("youtube_id")
      const hasYoutubeUrl = columnNames.includes("youtube_url")
      const hasUrl = columnNames.includes("url")
      const youtubeIdRequired = columnMap.get("youtube_id") ?? false
      const youtubeUrlRequired = columnMap.get("youtube_url") ?? false
      const urlRequired = columnMap.get("url") ?? false
      
      console.log("Testimonials table columns detected:", columnNames)
      console.log("hasYoutubeId:", hasYoutubeId, "required:", youtubeIdRequired)
      console.log("hasYoutubeUrl:", hasYoutubeUrl, "required:", youtubeUrlRequired)
      console.log("hasUrl:", hasUrl, "required:", urlRequired)
      
      let info
      const columns: string[] = []
      const values: string[] = []
      
      // Determine which columns to insert into based on what exists
      if (hasYoutubeId) {
        columns.push("youtube_id")
        values.push(youtubeId)
      } else if (hasYoutubeUrl) {
        columns.push("youtube_url")
        values.push(youtubeId)
      } else {
        throw new Error(`Testimonials table missing youtube_id or youtube_url column. Found: ${columnNames.join(", ")}`)
      }
      
      // If both columns exist and youtube_url is required, provide it
      if (hasYoutubeId && hasYoutubeUrl && youtubeUrlRequired) {
        columns.push("youtube_url")
        values.push(youtubeId)
        console.log("Both columns exist and youtube_url is required, providing both")
      }
      
      // Add url if it exists
      if (hasUrl) {
        columns.push("url")
        values.push(url)
      }
      
      const placeholders = columns.map(() => "?").join(", ")
      const sql = `INSERT INTO testimonials (${columns.join(", ")}) VALUES (${placeholders})`
      console.log("Executing SQL:", sql, "with values:", values)
      
      const stmt = db.prepare(sql)
      info = stmt.run(...values)

      return NextResponse.json(
        { id: info.lastInsertRowid, youtube_id: youtubeId, url },
        { status: 201 }
      )
    } catch (dbError) {
      console.error("Database error creating testimonial:", dbError)
      const errorMessage = dbError instanceof Error ? dbError.message : String(dbError)
      return NextResponse.json(
        { error: `Database error: ${errorMessage}` },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Error creating testimonial:", error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      { error: `Failed to create testimonial: ${errorMessage}` },
      { status: 500 }
    )
  }
}


