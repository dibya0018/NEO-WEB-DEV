import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export const runtime = "nodejs"

type TimeRange = "hour" | "day" | "week" | "month" | "year" | "all"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const range = (searchParams.get("range") || "all") as TimeRange

    // Calculate time filter based on range
    let timeFilter = ""
    const now = new Date()

    switch (range) {
      case "hour":
        const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000)
        timeFilter = `AND created_at >= datetime('${oneHourAgo.toISOString()}')`
        break
      case "day":
        const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)
        timeFilter = `AND created_at >= datetime('${oneDayAgo.toISOString()}')`
        break
      case "week":
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
        timeFilter = `AND created_at >= datetime('${oneWeekAgo.toISOString()}')`
        break
      case "month":
        const oneMonthAgo = new Date(
          now.getFullYear(),
          now.getMonth() - 1,
          now.getDate()
        )
        timeFilter = `AND created_at >= datetime('${oneMonthAgo.toISOString()}')`
        break
      case "year":
        const oneYearAgo = new Date(
          now.getFullYear() - 1,
          now.getMonth(),
          now.getDate()
        )
        timeFilter = `AND created_at >= datetime('${oneYearAgo.toISOString()}')`
        break
      case "all":
      default:
        timeFilter = ""
    }

    // Exclude admin page from all queries
    const excludeAdminFilter = `AND path != '/admin' AND path NOT LIKE '/admin/%'`

    // Get page view stats (excluding admin page)
    const pageStats = db
      .prepare(
        `
        SELECT 
          path,
          COUNT(*) as views,
          MIN(created_at) as first_view,
          MAX(created_at) as last_view
        FROM page_views
        WHERE 1=1 ${timeFilter} ${excludeAdminFilter}
        GROUP BY path
        ORDER BY views DESC, path ASC
      `
      )
      .all()

    // Get total views (excluding admin page)
    const totalResult = db
      .prepare(
        `SELECT COUNT(*) as total FROM page_views WHERE 1=1 ${timeFilter} ${excludeAdminFilter}`
      )
      .get() as { total: number }

    // Get unique visitors (by IP hash, excluding admin page)
    const uniqueResult = db
      .prepare(
        `SELECT COUNT(DISTINCT ip_hash) as unique_visitors FROM page_views WHERE ip_hash IS NOT NULL ${timeFilter} ${excludeAdminFilter}`
      )
      .get() as { unique_visitors: number }

    // Get views by hour (last 24 hours, excluding admin page)
    const hourlyViews = db
      .prepare(
        `
        SELECT 
          strftime('%Y-%m-%d %H:00:00', created_at) as hour,
          COUNT(*) as views
        FROM page_views
        WHERE created_at >= datetime('now', '-24 hours') ${excludeAdminFilter}
        GROUP BY hour
        ORDER BY hour DESC
        LIMIT 24
      `
      )
      .all()

    return NextResponse.json({
      stats: pageStats,
      summary: {
        total_views: totalResult.total,
        unique_visitors: uniqueResult.unique_visitors,
        range: range,
      },
      hourly: hourlyViews,
    })
  } catch (error) {
    console.error("Error fetching visitor stats:", error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      {
        error: `Failed to load visitor stats: ${errorMessage}`,
        stats: [],
        summary: { total_views: 0, unique_visitors: 0, range: "all" },
        hourly: [],
      },
      { status: 500 }
    )
  }
}
