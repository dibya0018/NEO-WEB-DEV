"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Phone, ArrowRight, Heart, Clock, Shield, Linkedin, Twitter } from "lucide-react"

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#65349E]/10 blur-3xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#F04A89]/10 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              Founder's Message
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">A Vision for</span>
              <br />
              <span className="gradient-text">Better Emergency Care</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Founder Profile & Letter */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12">
            {/* Founder's Letter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-4xl mx-auto"
            >
              <div className="prose prose-lg max-w-none">
                {/* Founder Profile Card - Redesigned */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <Card className="bg-white border-border shadow-xl overflow-hidden w-full max-w-md mx-auto">
                    <div className="h-2 gradient-bg" />
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative">
                          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full gradient-bg p-1.5 shadow-lg">
                            <img
                              src="/owner.png"
                              alt="Dr. Ramesh Karmegam"
                              className="w-full h-full rounded-full object-cover bg-white"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full gradient-bg flex items-center justify-center shadow-md">
                            <Heart className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <h3 className="text-2xl sm:text-3xl font-bold">Dr. Ramesh Karmegam</h3>
                          <p className="text-base sm:text-lg text-muted-foreground font-medium">Founder & CEO</p>
                          <p className="text-sm sm:text-base text-muted-foreground">Neo TrueNorth Healthcare</p>
                        </div>

                        <div className="flex justify-center gap-4 pt-2">
                          <a 
                            href="https://www.linkedin.com/in/rameshkarmegam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                            className="text-muted-foreground hover:text-[#65349E] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                          <a 
                            href="#" 
                            className="text-muted-foreground hover:text-[#65349E] transition-colors"
                            aria-label="Twitter"
                          >
                            <Twitter className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-8">
                  <Quote className="h-8 w-8 text-white" />
                </div>

               <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
               I began my career like most doctors with long duty hours, a stethoscope, and a desire to serve.
               But early on, I saw a painful truth:
               <span className="font-semibold text-foreground">
               {" "}emergencies don’t fail because of doctors, they fail because of broken systems.
               </span>
               </p>

              <p>
               No triage. No standardisation. No helpline. No coordination.
               <br />
               <span className="font-semibold text-foreground">Lives were being lost in the gaps.</span>
               </p>

              <p>
               This reality led me to found <span className="font-semibold text-foreground">WhiteCross Clinic</span>,
               where we pioneered Smart Emergency Care Clinics. But even the best clinic could only solve part of
               the problem India lacked a true Emergency Care ecosystem.
               </p>

              <p>
               Becoming a father changed everything. Every emergency became personal. I realised that families
               needed more than treatment
               <span className="font-semibold text-foreground"> they needed speed, clarity, and hope.</span>
               </p>

              <p>
               This purpose shaped <span className="font-semibold text-foreground">NeoTru Hospitals</span> a chain
               of Smart Emergency Care Hospitals designed to be fast, accurate, outcome-driven, ethical, and
               friendly.
               </p>

              <p className="font-semibold text-foreground">
               Our mission: 100 Smart Emergency Care Hospitals by 2035.
               </p>

              <p>
               We created <span className="font-semibold text-foreground">D.A.D (Dial A Doctor)</span>a 24x7 triage
               helpline connecting patients to a doctor within 60 seconds and initiating treatment within
               60 minutes.
               </p>

              <p>
               NeoTru is more than an organisation it is a promise to every family that deserves a fighting
               chance.
              </p>

              <p className="text-foreground font-semibold">
               As a Doctor, I Serve.
               <br />
               As a Father, I Empathize.
               <br />
               As an Entrepreneur, I Build Teams that Care.
              </p>

              <p>
               Let’s build India’s Smart Community-Based Emergency Care Ecosystem together.
              </p>
            </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Speed",
                description:
                  "Time is the most critical factor in emergencies. Every second we save translates to better outcomes.",
              },
              {
                icon: Shield,
                title: "Protocol",
                description:
                  "Evidence-based, standardized care protocols ensure consistent, high-quality treatment for every patient.",
              },
              {
                icon: Heart,
                title: "Compassion",
                description:
                  "Behind every medical emergency is a human story. We treat patients and families with dignity and empathy.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6"
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-white/80 text-lg mb-8">
              Be part of the emergency healthcare revolution. Whether as a patient, partner, or advocate - together we
              can save more lives.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 h-12 px-6 bg-white text-[#65349E] hover:bg-white/90"
                asChild
              >
                <a href="tel:9900089601">
                  <Phone className="h-5 w-5" />
                  Call D.A.D - 99000 89601
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 h-12 px-6 border-white text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <EmergencyCTA />
    </main>
  )
}
