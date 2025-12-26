"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

type Testimonial = {
  id: number
  youtube_id: string
  url: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(1)
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 1)
    }

    updateItemsPerPage()
    window.addEventListener("resize", updateItemsPerPage)

    return () => window.removeEventListener("resize", updateItemsPerPage)
  }, [])

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await fetch("/api/testimonials")
        if (!res.ok) return
        const data = await res.json()
        setTestimonials(data.testimonials ?? [])
        setCurrentIndex(0)
      } catch {
        // ignore
      }
    }
    void loadTestimonials()
  }, [])

  const next = () => {
    if (currentIndex < testimonials.length - itemsPerPage) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const visibleVideos = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  )

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#F9F5FF] to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block text-sm font-semibold mb-4 bg-gradient-to-r from-[#65349E] to-[#F04A89] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            PATIENT TESTIMONIALS
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Real Stories from Our Patients
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hear from people who have experienced our emergency care services firsthand.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-6 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory">
            <div className="flex gap-4 px-4">
              {testimonials.map((video, index) => {
                const videoId = video.youtube_id
                return (
                  <motion.div
                    key={`${videoId}-${index}`}
                    variants={itemVariants}
                    className="flex-[0_0_90%] sm:flex-[0_0_85%] min-w-0 snap-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=1`}
                        title={`Testimonial Video ${index + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full rounded-2xl"
                        loading="lazy"
                        frameBorder="0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Desktop: Card View with Navigation */}
          <div className="hidden md:block relative overflow-hidden">
            <div className="flex gap-6">
              {visibleVideos.map((video, index) => {
                const videoId = video.youtube_id
                return (
                  <motion.div
                    key={`${videoId}-${index}-${currentIndex}`}
                    variants={itemVariants}
                    className="flex-[0_0_calc(33.333%-1rem)] min-w-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-0 h-full">
                        <div className="relative w-full aspect-[9/16]">
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=1`}
                            title={`Testimonial Video ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full rounded-lg"
                            loading="lazy"
                            frameBorder="0"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <button 
              onClick={prev}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={next}
              disabled={currentIndex >= testimonials.length - itemsPerPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}