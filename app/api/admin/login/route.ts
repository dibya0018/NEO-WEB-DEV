import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      )
    }

    // Check credentials from database
    const admin = db
      .prepare("SELECT id, email, password FROM admin_credentials WHERE email = ?")
      .get(email) as { id: number; email: string; password: string } | undefined

    if (admin && admin.password === password) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error("Error during login:", error)
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    )
  }
}

