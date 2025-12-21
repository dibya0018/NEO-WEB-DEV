"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { MousePointerClick } from "lucide-react"
import Image from "next/image"

export function Card360Viewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const mouseX = useMotionValue(0.5)
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 30 })

  const rotationY = useTransform(smoothMouseX, [0, 1], [-180, 180])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isDragging) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    mouseX.set(x)
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5)
  }

  const handleDrag = (_: any, info: any) => {
    const current = rotationY.get()
    const delta = info.delta.x * 0.5
    const newRotation = current + delta

    const normalizedRotation = ((newRotation + 180) % 360) / 360
    mouseX.set(normalizedRotation)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08),0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(101,52,158,0.02),transparent_70%)] rounded-3xl pointer-events-none" />

      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#65349E]/5 to-transparent rounded-full blur-xl" />
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-[#F04A89]/5 to-transparent rounded-full blur-xl" />

      <motion.div
        ref={containerRef}
        className="relative aspect-[1.586/1] cursor-grab active:cursor-grabbing select-none z-10"
        style={{
          perspective: 2000,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onDrag={handleDrag}
          style={{
            rotateY: rotationY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.1)] ring-1 ring-gray-200/50"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Image
              src="/front.png"
              alt="Emergency Access Card Front"
              fill
              className="object-contain rounded-2xl"
              priority
              draggable={false}
            />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              rotateY: 180,
            }}
          >
            <Image
              src="/back.png"
              alt="Emergency Access Card Back"
              fill
              className="object-contain rounded-2xl"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[#65349E]/10 to-[#F8B739]/10 blur-2xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-6 flex items-center justify-center gap-2"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#65349E] to-[#F04A89] text-white shadow-lg">
          <motion.div
            animate={{ x: [-10, 10] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
          >
            <MousePointerClick className="h-5 w-5" />
          </motion.div>
          <span className="text-sm font-medium">Move cursor or drag to rotate the card 360°</span>
        </div>
      </motion.div>
    </div>
  )
}
