"use client"

import { motion } from "framer-motion"

interface FloatingParticlesProps {
  count?: number
  color?: string
}

export function FloatingParticles({ count = 20, color = "rgba(101, 52, 158, 0.3)" }: FloatingParticlesProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 4 + 2
        const duration = Math.random() * 10 + 10
        const delay = Math.random() * 5
        const x = Math.random() * 100

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              left: `${x}%`,
              bottom: 0,
            }}
            animate={{
              y: [-20, -window.innerHeight - 50],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration,
              repeat: Number.POSITIVE_INFINITY,
              delay,
              ease: "easeOut",
            }}
          />
        )
      })}
    </div>
  )
}
