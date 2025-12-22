'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { EmergencyCTA } from '@/components/emergency-cta'
import { motion } from 'framer-motion'

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
  }
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Videos Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {youtubeVideos.map((video, index) => (
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
                    src={`https://www.youtube.com/embed/${video.id}`}
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