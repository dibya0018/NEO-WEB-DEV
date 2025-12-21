'use client'

import { Header } from '@/components/header'
import { motion } from 'framer-motion'

export default function TestimonialsPage() {
  return (
    <main className="relative">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* HERO VIDEO SECTION - Add pt-16 to account for fixed header */}
      <section className="relative h-screen pt-16 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          >
            <source src="/885b85bf-89f0-485a-8f81-9e4fb348eca0.MP4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          {/* Add your hero content here */}
        </div>
      </section>

      {/* TESTIMONIALS SECTION (BELOW VIDEO) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
         <motion.h1
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#65349E] via-[#F04A89] to-[#65349E] drop-shadow-[0_0_8px_rgba(240,74,137,0.8)]"
>
  Testimonials
</motion.h1>
    <motion.p 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
>
  At NeoTrueNorth Hospitals, patient care is more than treatment — it is compassion, trust, and commitment.
  <br /><br />
  Here’s what our patients and their families have to say about their experience with us.
</motion.p>
        </div>
      </section>
    </main>
  )
}