"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Step {
  step: string
  title: string
  description: string
  icon?: LucideIcon
}

interface AnimatedFlowchartProps {
  steps: Step[]
  columns?: 4 | 5
}

export function AnimatedFlowchart({ steps, columns = 4 }: AnimatedFlowchartProps) {
  const gridCols = columns === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"

  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-0.5">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#65349E] to-[#F04A89] origin-left"
        />
      </div>

      <div className={`grid md:grid-cols-2 ${gridCols} gap-8 md:gap-10 items-stretch`}>
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="relative h-full"
          >
            <div className="relative bg-white rounded-xl border-2 border-[#65349E]/20 p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
              {/* Step number badge */}
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#65349E] to-[#F04A89] flex items-center justify-center shadow-md">
                <span className="text-lg font-bold text-white">{item.step}</span>
              </div>

              {/* Icon circle */}
              {item.icon && (
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#65349E]/10 to-[#F04A89]/10 flex items-center justify-center mb-4 mt-2">
                  <item.icon className="h-7 w-7 text-[#65349E]" />
                </div>
              )}

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
