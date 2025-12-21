import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neo TrueNorth | Emergency Healthcare When Every Second Counts",
  description: "Neo TrueNorth provides 24x7 emergency care with D.A.D (Dial A Doctor) service. Doctor in 60 seconds, treatment in 60 minutes.",
  generator: "Sid",
  icons: {
    icon: "/icon.png", // Direct path to your icon
    apple: "/icon.png" // Same icon for Apple devices
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://fyndbetter.com/chatbot/neotrue" strategy="afterInteractive" />
      </head>
      <body className={`font-sans antialiased h-screen w-full overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}