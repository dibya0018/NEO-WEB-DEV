import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import path from "path"
import fs from "fs"

export const runtime = "nodejs"

export async function GET() {
  try {
    const doctors = db
      .prepare(
        "SELECT id, name, specialty, image_path, created_at FROM doctors ORDER BY created_at DESC"
      )
      .all()

    return NextResponse.json({ doctors })
  } catch (error) {
    console.error("Error fetching doctors:", error)
    return NextResponse.json(
      { error: "Failed to load doctors" },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const name = formData.get("name")
    const specialty = formData.get("specialty")
    const image = formData.get("image")

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    if (!specialty || typeof specialty !== "string") {
      return NextResponse.json(
        { error: "Specialty is required" },
        { status: 400 }
      )
    }

    if (!image || !(image instanceof File)) {
      return NextResponse.json(
        { error: "Image file is required" },
        { status: 400 }
      )
    }

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadsDir = path.join(process.cwd(), "public", "doctors")
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
    }

    const safeName = image.name.replace(/[^a-zA-Z0-9.\-_]/g, "_")
    const fileName = `${Date.now()}-${safeName}`
    const filePath = path.join(uploadsDir, fileName)

    await fs.promises.writeFile(filePath, buffer)

    const publicPath = `/doctors/${fileName}`

    const stmt = db.prepare(
      "INSERT INTO doctors (name, specialty, image_path) VALUES (?, ?, ?)"
    )
    const info = stmt.run(name, specialty, publicPath)

    return NextResponse.json(
      {
        id: info.lastInsertRowid,
        name,
        specialty,
        image_path: publicPath,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error creating doctor:", error)
    return NextResponse.json(
      { error: "Failed to create doctor" },
      { status: 500 }
    )
  }
}


