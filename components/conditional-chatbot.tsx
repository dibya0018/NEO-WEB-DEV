"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"

export function ConditionalChatbot() {
  const pathname = usePathname()
  
  // Don't load chatbot on Appointment page (iframe already has one) or admin page
  if (pathname === "/Appointment" || pathname === "/appointment-embed" || pathname === "/admin") {
    return null
  }

  return (
    <Script src="https://fyndbetter.com/chatbot/neotrue" strategy="afterInteractive" />
  )
}

