"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const youtubeVideos = [
  {
    id: 'n6oNUdF3_GA',
    url: 'https://youtube.com/shorts/n6oNUdF3_GA?si=1UNBL5tpwga8ZwEO'
  },
  {
    id: 'XTL5kKnKJ3Y',
    url: 'https://youtube.com/shorts/XTL5kKnKJ3Y?si=WPEBLCvqxumVw8sn'
  },
  {
    id: 'GRR3VlU_WZ8',
    url: 'https://youtube.com/shorts/GRR3VlU_WZ8?si=vrLhBqDZYahR16CC'
  },
  {
    id: 'S_hqWuuMFeg',
    url: 'https://youtube.com/shorts/S_hqWuuMFeg?si=cbU_ZWzympJE5i4_'
  },
  {
    id: 'S_hqWuuMFeg',
    url: 'https://youtube.com/shorts/S_hqWuuMFeg?si=xIYV7lUTUiR08OGl'
  }
]

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
  const itemsPerPage = 3

  const next = () => {
    if (currentIndex < youtubeVideos.length - itemsPerPage) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const visibleVideos = youtubeVideos.slice(currentIndex, currentIndex + itemsPerPage)

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
            className="inline-block text-sm font-semibold text-primary mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Patient Testimonials
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
          <div className="relative overflow-hidden">
            <div className="flex gap-6">
              {visibleVideos.map((video, index) => {
                // Extract video ID from URL for proper embedding
                const videoId = video.url.includes('youtube.com/shorts/') 
                  ? video.url.split('youtube.com/shorts/')[1].split('?')[0]
                  : video.url.split('v=')[1].split('&')[0];
                
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
              disabled={currentIndex >= youtubeVideos.length - itemsPerPage}
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