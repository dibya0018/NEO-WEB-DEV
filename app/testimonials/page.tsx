"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Testimonial = {
  id: number
  youtube_id: string
  url: string
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await fetch("/api/testimonials")
        if (!res.ok) return
        const data = await res.json()
        setTestimonials(data.testimonials ?? [])
      } catch {
        // ignore
      }
    }
    void loadTestimonials()
  }, [])
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Videos Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.length === 0 && (
              <p className="text-gray-500 col-span-full">
                No testimonials available yet.
              </p>
            )}
            {testimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full"
              >
                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtube_id}`}
                    title={`Testimonial Video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <EmergencyCTA />
    </main>
  )
}