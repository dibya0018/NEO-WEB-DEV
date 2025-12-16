"use client"

import { motion } from "framer-motion"
import { Stethoscope, UserCheck, Activity, HeartPulse, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: Stethoscope,
    title: "Arrive",
    description: "Walk-in or ambulance arrival at our emergency entrance",
    color: "#65349E",
  },
  {
    icon: UserCheck,
    title: "Triage",
    description: "Immediate assessment by emergency physician",
    color: "#F04A89",
  },
  {
    icon: Activity,
    title: "Diagnose",
    description: "Rapid diagnostics with advanced imaging and labs",
    color: "#65349E",
  },
  {
    icon: HeartPulse,
    title: "Treat",
    description: "Evidence-based treatment by specialist teams",
    color: "#F04A89",
  },
  {
    icon: CheckCircle2,
    title: "Stabilize",
    description: "Continuous monitoring until full stabilization",
    color: "#65349E",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-semibold gradient-text uppercase tracking-wider px-4 py-1 rounded-full bg-[#65349E]/10"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance"
          >
            How Our <span className="gradient-text">Emergency Care</span> Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg"
          >
            A streamlined process designed to minimize delays and maximize outcomes.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="bg-white border-2 border-border rounded-2xl p-6 h-full transition-all duration-300 hover:border-[#65349E]/30 hover:shadow-xl">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">{step.description}</p>

                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 right-0 w-6 h-0.5 bg-gradient-to-r from-[#65349E] to-transparent translate-x-full" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
