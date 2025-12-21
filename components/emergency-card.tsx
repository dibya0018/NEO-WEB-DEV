"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CreditCard, Clock, Shield, Users, Building, ArrowRight } from "lucide-react"

const benefits = [
  { icon: Shield, text: "Priority treatment at all NeoTru hospitals" },
  { icon: Clock, text: "Pay later up to ₹2,000" },
  { icon: Building, text: "Linked to D.A.D service" },
  { icon: Users, text: "Family-wide coverage available" },
]

const forWhom = ["Families", "Apartments", "Corporates", "Institutions"]

export function EmergencyCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section id="emergency-card" className="py-12 sm:py-16 md:py-20 relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-50 hidden md:block" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-60 hidden md:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gray-50 to-transparent rounded-full blur-3xl opacity-30 hidden md:block" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <span className="text-xs sm:text-sm font-semibold gradient-text uppercase tracking-wider">
                Emergency Access Card
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-balance">
                Priority Care, <span className="gradient-text">Pay Later</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                The Neo TrueNorth Emergency Access Card ensures you and your family get priority emergency treatment
                without worrying about immediate payment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-white border-2 border-[#65349E]/20 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <benefit.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <span className="text-sm md:text-base font-medium leading-tight">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="text-sm font-semibold mb-3">Perfect for:</p>
              <div className="flex flex-wrap gap-2">
                {forWhom.map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 gap-2 h-11 sm:h-12 text-sm sm:text-base w-full sm:w-auto" asChild>
                <Link href="/emergency-card">
                  <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
                  Request Emergency Card
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 h-11 sm:h-12 bg-transparent text-sm sm:text-base w-full sm:w-auto" asChild>
                <Link href="/emergency-card">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-8 lg:mt-0"
          >
            <div
              className="relative cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                style={{
                  transformStyle: "preserve-3d",
                  position: "relative",
                }}
                className="w-full max-w-md mx-auto lg:max-w-none"
              >
                {/* Front of card */}
                <motion.div
                  style={{
                    backfaceVisibility: "hidden",
                    position: isFlipped ? "absolute" : "relative",
                    width: "100%",
                  }}
                  className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-gray-200/50"
                >
                  <img src="/front.png" alt="Emergency Access Card Front" className="w-full h-auto" />
                </motion.div>

                {/* Back of card */}
                <motion.div
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    position: isFlipped ? "relative" : "absolute",
                    top: 0,
                    width: "100%",
                  }}
                  className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-gray-200/50"
                >
                  <img src="/back.png" alt="Emergency Access Card Back" className="w-full h-auto" />
                </motion.div>
              </motion.div>

              <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 -z-10 w-full h-full rounded-2xl bg-gradient-to-br from-gray-200/30 to-gray-300/20 blur-3xl hidden md:block" />
            </div>

            <div className="flex justify-center mt-4 sm:mt-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#65349E] to-[#F04A89] text-white shadow-lg">
                <CreditCard className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">Click card to flip</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
