"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, CreditCard, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance px-2">
            Don't Wait for an Emergency to Find Help
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get your Emergency Access Card today and ensure your family has priority access to life-saving care when
            every second counts.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4"
          >
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 h-11 sm:h-12 px-5 sm:px-6 bg-white text-[#65349E] hover:bg-white/90 text-sm sm:text-base w-full sm:w-auto whitespace-nowrap"
              asChild
            >
              <a href="tel:9900089601">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="whitespace-nowrap">Call D.A.D - 99000 89602</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-11 sm:h-12 px-5 sm:px-6 border-white text-white hover:bg-white/10 bg-transparent text-sm sm:text-base w-full sm:w-auto"
              asChild
            >
              <Link href="/emergency-card">
                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
                Get Emergency Card
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-xs sm:text-sm mt-6 sm:mt-8"
          >
            Available 24x7 - Bengaluru & Expanding
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
