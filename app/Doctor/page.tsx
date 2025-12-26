"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"

type Doctor = {
  id: number
  name: string
  specialty: string
  image_path: string
}

export default function DoctorPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [doctors, setDoctors] = useState<Doctor[]>([])

  useEffect(() => {
    async function loadDoctors() {
      try {
        const res = await fetch("/api/doctors")
        if (!res.ok) return
        const data = await res.json()
        setDoctors(data.doctors ?? [])
      } catch {
        // ignore
      }
    }
    void loadDoctors()
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const container = containerRef.current
      const scrollAmount = 300
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 relative">
          <h1 className="text-3xl font-bold text-center mb-12">Our Team</h1>
          
          <div className="relative group">
            {/* Left Arrow */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform hover:scale-110"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div 
              ref={containerRef}
              className="flex overflow-x-auto pb-12 gap-8 scrollbar-hide snap-x snap-mandatory px-2"
              style={{
                scrollBehavior: 'smooth',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
              }}
            >
              {doctors.length === 0 && (
                <p className="text-gray-500">
                  No doctors added yet. Please add doctors from the admin
                  panel.
                </p>
              )}
              {doctors.map((doctor) => (
                <div 
                  key={doctor.id}
                  className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg overflow-hidden snap-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-blue-400"
                >
                  <div className="h-72 bg-gradient-to-br from-blue-50 to-blue-100 relative group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                    <Image
                      src={doctor.image_path}
                      alt={doctor.name}
                      layout="fill"
                      objectFit="cover"
                      className="opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <div className="p-6 text-center bg-white">
                    <h3 className="font-bold text-xl text-gray-800 mb-1">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform hover:scale-110"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Fade effects on sides */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}