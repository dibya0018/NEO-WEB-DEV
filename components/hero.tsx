"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Shield, Heart } from "lucide-react"

export function Hero() {
  return (
 <section className="relative overflow-hidden bg-white min-h-screen flex items-center justify-center -mt-20 pt-20 pb-12 md:pb-20">
    <div className="absolute inset-0 z-0">
    {/* Image for mobile */}
    <img
      src="/location.png"
      alt="Neo TrueNorth Hospital"
      className="w-full h-full object-cover md:hidden"
    />
    
    {/* Video for desktop */}
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="hidden md:block w-full h-full object-cover"
      ref={(el) => {
        if (el) el.playbackRate = 0.8;
      }}
    >
      <source src="/New_Hospistal.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        {/* Lighter overlay for better image visibility on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/60 md:from-white/70 md:via-white/60 md:to-white/70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-6 sm:py-8 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance px-2"
            >
              <motion.span
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="bg-gradient-to-r from-[#65349E] via-[#F04A89] to-[#65349E] bg-clip-text text-transparent inline-block mt-8 sm:mt-12 md:mt-20 lg:mt-24 xl:mt-0"
>
  When Every Second...
</motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-[#F04A89] via-[#65349E] to-[#F04A89] bg-clip-text text-transparent inline-block"
              >
                Counts, We Respond
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed px-4"
            >
              <span className="font-semibold">Care in 60 Seconds. Treatment in 60 Minutes.</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Smart Emergency Care Hospitals designed for speed, precision, and life-saving outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center pt-3 sm:pt-4 md:pt-6 px-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{
                  scale: 0.92,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                className="relative w-full sm:w-auto"
              >
               {/* Remove or modify this glowing div */}
               {/* <motion.div
                className="absolute inset-0 rounded-lg gradient-bg opacity-50 blur-xl"
                animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                }}
                /> */}
                     <Button
                     size="lg"
                     className="relative gap-2 sm:gap-3 h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-12 bg-gradient-to-r from-[#65349E]/90 via-[#F04A89]/90 to-[#65349E]/90 text-white hover:opacity-90 text-base sm:text-lg md:text-xl font-bold shadow-lg hover:shadow-[0_20px_50px_rgba(240,74,137,0.4)] transition-all duration-300 rounded-full w-full sm:w-auto"
                     asChild
                    >
                     <a
                     href="/Appointment"
                     >
                     <Calendar className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                     <span className="whitespace-nowrap">Book Appointment</span>
                     </a>
                     </Button>                       
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 pt-2 sm:pt-3 md:pt-4 px-4"
            >
              {[
                { icon: Clock, text: "60 Sec Response", color: "#F04A89" },
                { icon: Shield, text: "Protocol-Driven", color: "#F04A89" },
                { icon: Heart, text: "Life-Saving Care", color: "#F04A89" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="flex items-center gap-1.5 sm:gap-2 bg-white backdrop-blur-sm px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border border-border"
                >
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: item.color }} />
                  <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
