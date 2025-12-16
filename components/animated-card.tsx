"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface AnimatedCardProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
  stepNumber?: string
}

export function AnimatedCard({ icon: Icon, title, description, index = 0, stepNumber }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card className="h-full bg-white border-border hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
        {/* Background gradient on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-[#65349E]/5 to-[#F04A89]/5"
        />

        {stepNumber && <div className="absolute top-2 right-4 text-6xl font-bold text-muted/10">{stepNumber}</div>}

        <CardContent className="p-6 relative z-10">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4 shadow-lg"
          >
            <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Icon className="h-7 w-7 text-white" />
            </motion.div>
          </motion.div>

          <motion.h3 className="text-xl font-semibold mb-2 group-hover:text-[#65349E] transition-colors">
            {title}
          </motion.h3>
          <p className="text-muted-foreground">{description}</p>

          {/* Animated underline on hover */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            className="h-0.5 gradient-bg mt-4 origin-left"
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}
