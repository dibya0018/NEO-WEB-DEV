"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AppointmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
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