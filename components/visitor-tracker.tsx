"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function VisitorTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return

    // Don't track admin page visits
    if (pathname === "/admin" || pathname.startsWith("/admin/")) {
      return
    }

    // Fire and forget – errors are safe to ignore for analytics
    fetch("/api/track-view", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path: pathname }),
      keepalive: true,
    }).catch(() => {
      // Ignore tracking errors
    })
  }, [pathname])

  return null
}


