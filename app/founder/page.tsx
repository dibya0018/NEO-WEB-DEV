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
    <main className="min-h-screen bg-white">
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
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Founder Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <Card className="bg-white border-border shadow-xl overflow-hidden">
                  <div className="h-3 gradient-bg" />
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full gradient-bg p-1">
                        <img
                          src="/professional-indian-male-doctor-portrait.jpg"
                          alt="Dr. Founder"
                          className="w-full h-full rounded-full object-cover bg-white"
                        />
                      </div>
                    </div>

                    <div className="text-center space-y-2 mb-6">
                      <h3 className="text-2xl font-bold">Dr. Rajiv Menon</h3>
                      <p className="text-muted-foreground">Founder & CEO</p>
                      <p className="text-sm text-muted-foreground">Neo TrueNorth Healthcare</p>
                    </div>

                    <div className="border-t border-border pt-6 space-y-4">
                      <div className="text-sm">
                        <p className="font-semibold mb-1">Education</p>
                        <p className="text-muted-foreground">MBBS, MD Emergency Medicine</p>
                        <p className="text-muted-foreground">IIM Bangalore - Healthcare Management</p>
                      </div>

                      <div className="text-sm">
                        <p className="font-semibold mb-1">Experience</p>
                        <p className="text-muted-foreground">15+ years in Emergency Medicine</p>
                        <p className="text-muted-foreground">Former Head of ER, Apollo Hospitals</p>
                      </div>
                    </div>

                    <div className="flex justify-center gap-4 pt-6 border-t border-border mt-6">
                      <a href="#" className="text-muted-foreground hover:text-[#65349E] transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-[#65349E] transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 p-4 rounded-xl bg-muted/50"
                    >
                      <p className="text-sm italic text-center text-muted-foreground">
                        "Every second saved in an emergency is a life given a second chance."
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Founder's Letter */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="prose prose-lg max-w-none">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-8">
                  <Quote className="h-8 w-8 text-white" />
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-xl text-foreground font-medium">Dear Friends,</p>

                  <p>
                    In my 15 years as an emergency medicine physician, I've witnessed both the incredible potential of
                    timely care and the devastating consequences of delays. I've seen families torn apart not because
                    medicine failed, but because{" "}
                    <span className="font-semibold text-foreground">the system wasn't designed for speed</span>.
                  </p>

                  <p>
                    Every day in India, lives are lost not due to lack of treatment options, but because of the critical
                    minutes wasted in confusion, transportation, and hospital readiness. A heart attack victim loses
                    precious cardiac muscle with every passing minute. A stroke patient's brain cells die by the
                    millions. These aren't just statistics - they're mothers, fathers, children, and friends.
                  </p>

                  <p>
                    This reality haunted me. It kept me awake at night and eventually led me to ask a fundamental
                    question:{" "}
                    <span className="font-semibold text-foreground">
                      What if we built a healthcare system from scratch, designed specifically for emergencies?
                    </span>
                  </p>

                  <p>
                    Neo TrueNorth is my answer to that question. We're not trying to be another multi-specialty
                    hospital. We're building India's first dedicated emergency care network - hospitals that breathe
                    emergency medicine, doctors who think in seconds, and protocols that prioritize speed above all
                    else.
                  </p>

                  <p>
                    D.A.D - Dial A Doctor - is the cornerstone of this vision. When you call D.A.D, you don't get a call
                    center agent reading from a script. You get an emergency doctor - within 60 seconds - who
                    immediately begins your care journey. This doctor guides you through first aid, coordinates with the
                    nearest hospital, and ensures the ER team is ready before you arrive.
                  </p>

                  <p>
                    Our approach is built on three pillars:{" "}
                    <span className="font-semibold text-foreground">Speed, Protocol, and Compassion</span>.
                  </p>

                  <ul className="space-y-3 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#65349E] mt-1 shrink-0" />
                      <span>
                        <span className="font-semibold text-foreground">Speed</span> - Because in emergencies, time is
                        tissue. Every system, every process, every decision is optimized for speed.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-[#F04A89] mt-1 shrink-0" />
                      <span>
                        <span className="font-semibold text-foreground">Protocol</span> - Because consistency saves
                        lives. Our evidence-based protocols ensure every patient receives the same high standard of
                        care.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-[#65349E] mt-1 shrink-0" />
                      <span>
                        <span className="font-semibold text-foreground">Compassion</span> - Because behind every
                        emergency is a human being and a family in fear. We never lose sight of that.
                      </span>
                    </li>
                  </ul>

                  <p>
                    We're starting in Bengaluru, but our vision extends across India. Every city deserves access to
                    world-class emergency care. Every family deserves the peace of mind that comes from knowing help is
                    just a call away.
                  </p>

                  <p>
                    I invite you to join us on this journey. Whether you're a patient seeking care, a family looking for
                    protection, or a partner who shares our vision - Neo TrueNorth is here for you.
                  </p>

                  <p>Together, let's build a future where no emergency goes unanswered.</p>

                  <p className="text-foreground font-semibold">
                    With commitment and hope,
                    <br />
                    <span className="gradient-text text-xl">Dr. Rajiv Menon</span>
                    <br />
                    <span className="text-sm font-normal text-muted-foreground">Founder & CEO, Neo TrueNorth</span>
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
