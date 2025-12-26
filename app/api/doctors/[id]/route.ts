import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import path from "path"
import fs from "fs"

export const runtime = "nodejs"

type RouteParams = {
  params: {
    id: string
  }
}

export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  try {
    // In Next.js 16, params might be a Promise
    const resolvedParams = await Promise.resolve(params)
    const id = Number(resolvedParams.id)

    if (!id || Number.isNaN(id) || id <= 0) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 })
    }

    // Get doctor info before deleting
    const doctor = db
      .prepare("SELECT image_path FROM doctors WHERE id = ?")
      .get(id) as { image_path?: string } | undefined

    if (!doctor) {
      return NextResponse.json({ error: "Doctor not found" }, { status: 404 })
    }

    // Delete from database
    const stmt = db.prepare("DELETE FROM doctors WHERE id = ?")
    const info = stmt.run(id)

    if (info.changes === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }

    // Try to delete the image file
    if (doctor.image_path) {
      try {
        const imageFsPath = path.join(
          process.cwd(),
          "public",
          doctor.image_path.replace(/^\//, "")
        )
        if (fs.existsSync(imageFsPath)) {
          fs.unlinkSync(imageFsPath)
        }
      } catch (err) {
        console.warn("Failed to delete doctor image:", err)
        // Don't fail the request if image deletion fails
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting doctor:", error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      { error: `Failed to delete doctor: ${errorMessage}` },
      { status: 500 }
    )
  }
}


