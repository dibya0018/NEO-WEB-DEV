"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Clock, UserCheck, Stethoscope, Shield, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "60 Second Connection",
    description: "Doctor connects within 60 seconds of your call",
  },
  {
    icon: UserCheck,
    title: "Doctor-Led Triage",
    description: "Real doctors, not call center agents",
  },
  {
    icon: Stethoscope,
    title: "Remote Consultation",
    description: "Medical guidance before you reach hospital",
  },
  {
    icon: Shield,
    title: "Hospital Coordination",
    description: "ER team prepared before your arrival",
  },
]

export function DADSection() {
  return (
    <section id="dad" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/doctor-on-phone-call-telemedicine-consultation.jpg"
                alt="D.A.D - Dial A Doctor Service"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-white/95 backdrop-blur rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, repeatDelay: 2 }}
                      className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center"
                    >
                      <Phone className="h-7 w-7 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call D.A.D Now</p>
                      <p className="text-2xl font-bold">99000 89601</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <span className="text-sm font-semibold gradient-text uppercase tracking-wider">
                Your First Call in Emergency
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
                Meet <span className="gradient-text">D.A.D</span> - Dial A Doctor
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When emergency strikes, D.A.D is your first call. Connect with an emergency doctor within 60 seconds who
                will guide you through immediate first aid, coordinate with the nearest hospital, and ensure the ER team
                is prepared before you arrive.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 gap-2 h-12" asChild>
                <a href="tel:9900089601">
                  <Phone className="h-5 w-5" />
                  Call D.A.D Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 h-12 bg-transparent" asChild>
                <Link href="/dad">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
