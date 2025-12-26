"use client"

import { motion } from "framer-motion"
import { Clock, Bed, Scissors, FileCheck, CreditCard } from "lucide-react"
import { HoverCard3D } from "./hover-card-3d"
import { ScrollAnimatedSection } from "./scroll-animated-section"
import { useState, useEffect } from "react" 
const reasons = [
  {
    icon: Clock,
    title: "24x7 Emergency Doctors",
    description: "Round-the-clock availability of specialist emergency physicians",
  },
  {
    icon: Bed,
    title: "Dedicated Emergency ICU",
    description: "State-of-the-art ICU exclusively for emergency cases",
  },
  {
    icon: Scissors,
    title: "Emergency OTs",
    description: "Operating theaters ready 24x7 for emergency surgeries",
  },
  {
    icon: FileCheck,
    title: "Protocol-Driven Care",
    description: "Standardized protocols ensuring consistent, high-quality care",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden costs, clear pricing before treatment begins",
  },
]

export function WhyChooseUs() {
  const [dots, setDots] = useState<Array<{left: number, top: number}>>([])
  useEffect(() => {
    // This will only run on the client side
    setDots(Array(10).fill(0).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100
    })))
  }, [])
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#65349E]/20"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="text-base md:text-lg font-bold gradient-text uppercase tracking-wider">Why Neo TrueNorth Hospitals</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
            Built for <span className="gradient-text">Emergency Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every aspect of Neo TrueNorth is designed with one goal - saving lives faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <HoverCard3D className="text-center p-6 rounded-2xl bg-white border border-border transition-all duration-300 group h-full">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </HoverCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
