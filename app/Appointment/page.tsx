"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

export default function AppointmentPage() {
  const searchParams = useSearchParams()

  // Build iframe src with UTM parameters
  const iframeSrc = useMemo(() => {
    // List only UTMs you care about
    const utmKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'utm_id',
      'utm_source'
    ]

    // Build query string for iframe
    const iframeParams = new URLSearchParams()
    utmKeys.forEach(key => {
      const value = searchParams.get(key)
      if (value) {
        iframeParams.set(key, value)
      }
    })

    // Base iframe URL
    const iframeBaseUrl = 'https://app.fyndbetter.com/neotrue_apt'

    // Final iframe src
    return iframeParams.toString().length > 0
      ? `${iframeBaseUrl}?${iframeParams.toString()}`
      : iframeBaseUrl
  }, [searchParams])

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <div className="flex-grow relative" style={{ height: 'calc(100vh - 4rem)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <iframe 
            src="/appointment-embed"
            width="100%"
            height="100%"
            className="border-0"
            style={{ 
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              overflow: 'hidden'
            }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}