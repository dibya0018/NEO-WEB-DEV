"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Wind, Activity, Skull, AlertTriangle } from "lucide-react"
import { HoverCard3D } from "./hover-card-3d"
import { useRef } from "react"

const services = [
  {
    icon: Heart,
    title: "Cardiac Emergency",
    description: "Rapid response for heart attacks, chest pain, and cardiac arrests with dedicated cardiac ICU.",
    color: "#F04A89",
  },
  {
    icon: Brain,
    title: "Stroke Care",
    description: "Time-critical stroke treatment with advanced imaging and neurological expertise.",
    color: "#65349E",
  },
  {
    icon: Skull,
    title: "Trauma Care",
    description: "Comprehensive trauma services for accidents, injuries, and multi-system emergencies.",
    color: "#F8B739",
  },
  {
    icon: Wind,
    title: "Respiratory Emergency",
    description: "Immediate care for breathing difficulties, asthma attacks, and respiratory failures.",
    color: "#65349E",
  },
  {
    icon: Activity,
    title: "Sepsis Treatment",
    description: "Rapid identification and treatment of life-threatening infections and sepsis.",
    color: "#F04A89",
  },
  {
    icon: AlertTriangle,
    title: "Poisoning & Toxicology",
    description: "Expert management of poisoning, drug overdose, and toxic exposures.",
    color: "#F8B739",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function EmergencyServices() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section id="services" className="py-20 bg-muted/30 relative overflow-hidden" ref={sectionRef}>
      <motion.div className="absolute inset-0 opacity-30" style={{ y: backgroundY }}>
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#65349E]/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#F04A89]/20 blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold gradient-text uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
            Emergency Services We <span className="gradient-text">Specialize In</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From cardiac emergencies to trauma care, our specialized teams are ready 24x7 to provide life-saving
            treatment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <HoverCard3D>
                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-white h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                      }}
                    >
                      <service.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#65349E] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </HoverCard3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
