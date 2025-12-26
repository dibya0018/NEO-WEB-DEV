import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

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

    const stmt = db.prepare("DELETE FROM testimonials WHERE id = ?")
    const info = stmt.run(id)

    if (info.changes === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting testimonial:", error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      { error: `Failed to delete testimonial: ${errorMessage}` },
      { status: 500 }
    )
  }
}


