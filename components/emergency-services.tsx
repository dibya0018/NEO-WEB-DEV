"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { HeartPulse,
  Stethoscope,
  Droplets,
  Flame,
  Brain,
  PawPrint } from "lucide-react"
import { HoverCard3D } from "./hover-card-3d"
import { useRef } from "react"

const services = [
  {
    icon: HeartPulse,
    title: "Chest pain",
    description:
      "A physical discomfort or pressure felt anywhere from the neck to the upper abdomen that requires immediate medical evaluation to rule out serious underlying conditions.",
    color: "#F04A89",
  },
  {
    icon: Stethoscope,
    title: "Abdominal pain",
    description:
      "Any discomfort or distress felt between the chest and the groin, often ranging from mild indigestion to a sign of a serious underlying medical condition.",
    color: "#65349E",
  },
  {
    icon: Droplets,
    title: "Bleeding",
    description:
      "Also known as hemorrhage, the loss of blood from the circulatory system through damaged blood vessels, either internally or externally through the skin.",
    color: "#F8B739",
  },
  {
    icon: Flame,
    title: "Burns",
    description:
      "A type of injury to the skin caused by heat, radiation, electricity, friction, or chemical contact.",
    color: "#65349E",
  },
  {
    icon: Brain,
    title: "Headache",
    description:
      "A sensation of pain or discomfort in the head or upper neck region, often caused by tension, migraines, or underlying medical issues.",
    color: "#F04A89",
  },
  {
    icon: PawPrint,
    title: "Dog bite",
    description:
      "A wound or puncture caused by a dog's teeth that requires immediate cleaning and medical evaluation to prevent infection or complications.",
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
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-muted/30 relative overflow-hidden" ref={sectionRef}>
      <motion.div className="absolute inset-0 opacity-30" style={{ y: backgroundY }}>
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#65349E]/20 blur-3xl hidden md:block" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#F04A89]/20 blur-3xl hidden md:block" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold gradient-text uppercase tracking-wider px-4 py-1 rounded-full bg-[#65349E]/10 mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance"
          >
            Our <span className="gradient-text">Emergency Services</span>
          </motion.h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            From cardiac emergencies to trauma care, our specialized teams are ready 24x7 to provide life-saving
            treatment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <HoverCard3D className="h-full">
                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-white h-full flex flex-col">
                  <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                      }}
                    >
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-[#65349E] transition-colors flex-shrink-0">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-1">{service.description}</p>
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
