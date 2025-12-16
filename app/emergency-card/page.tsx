"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { AnimatedFlowchart } from "@/components/animated-flowchart"
import { AnimatedCard } from "@/components/animated-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card360Viewer } from "@/components/card-360-viewer"
import {
  CreditCard,
  Shield,
  Clock,
  Users,
  Phone,
  CheckCircle,
  Home,
  Briefcase,
  GraduationCap,
  Building,
  Heart,
} from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Priority Treatment",
    description: "Skip the queue and get immediate attention at any NeoTru hospital",
  },
  {
    icon: Clock,
    title: "Pay Later - Up to Rs.2,000",
    description: "Focus on care first, settle payments later without any hassle",
  },
  {
    icon: Phone,
    title: "Linked to D.A.D",
    description: "Your card is connected to D.A.D for seamless emergency coordination",
  },
  {
    icon: Users,
    title: "Family Coverage",
    description: "One card can cover your entire family for emergency situations",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Apply Online",
    description: "Fill the simple form with your details in under 2 minutes",
    icon: CreditCard,
  },
  {
    step: "02",
    title: "Receive Card",
    description: "Get your physical card delivered to your doorstep within 3 days",
    icon: Home,
  },
  {
    step: "03",
    title: "Activate Card",
    description: "Register and activate your card via SMS, call, or our app",
    icon: Phone,
  },
  {
    step: "04",
    title: "Access Care",
    description: "Show your card at any NeoTru hospital for instant priority treatment",
    icon: Heart,
  },
]

const targetAudience = [
  { icon: Home, title: "Families", description: "Protect your loved ones with priority emergency access" },
  { icon: Building, title: "Apartments", description: "Community-wide coverage for all residents" },
  { icon: Briefcase, title: "Corporates", description: "Employee wellness with emergency care benefits" },
  { icon: GraduationCap, title: "Institutions", description: "Schools, colleges, and organizations" },
]

export default function EmergencyCardPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "family",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! We will contact you shortly to process your Emergency Access Card.")
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#65349E]/10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#F04A89]/10 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
              >
                <CreditCard className="h-4 w-4" />
                Emergency Access Card
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="gradient-text block"
                >
                  Priority Care
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-foreground block"
                >
                  Pay Later
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                The Neo TrueNorth Emergency Access Card ensures you and your family receive{" "}
                <span className="font-semibold text-foreground">priority emergency treatment</span> without worrying
                about immediate payment. Care first, paperwork later.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {["Priority Treatment", "Pay Later Rs.2,000", "Family Coverage"].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Card360Viewer />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold gradient-text uppercase tracking-wider px-4 py-1 rounded-full bg-[#65349E]/10"
            >
              Card Benefits
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Why Get the <span className="gradient-text">Emergency Access Card</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Using AnimatedFlowchart */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold gradient-text uppercase tracking-wider px-4 py-1 rounded-full bg-[#65349E]/10"
            >
              Simple Process
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              How to Get <span className="gradient-text">Your Card</span>
            </h2>
            <p className="text-muted-foreground">
              Get your Emergency Access Card in 4 simple steps and enjoy priority care
            </p>
          </motion.div>

          <AnimatedFlowchart steps={howItWorks} columns={4} />
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold gradient-text uppercase tracking-wider px-4 py-1 rounded-full bg-[#65349E]/10"
            >
              Perfect For
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Who Is This <span className="gradient-text">Card For</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((item, index) => (
              <AnimatedCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Request Card Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-semibold gradient-text uppercase tracking-wider px-4 py-1 rounded-full bg-[#65349E]/10"
              >
                Get Your Card
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Request Your <span className="gradient-text">Emergency Access Card</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill in your details and we'll get your Emergency Access Card delivered within 3 working days. Be
                prepared for any emergency.
              </p>

              <div className="space-y-4 pt-4">
                {["No annual fees", "Lifetime validity", "Instant activation"].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </motion.div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="bg-white border-border shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="space-y-2"
                    >
                      <Label>Card Type</Label>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: "family", label: "Family", icon: Home },
                          { value: "corporate", label: "Corporate", icon: Briefcase },
                        ].map((type) => (
                          <motion.button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, type: type.value })}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                              formData.type === type.value
                                ? "border-[#65349E] bg-[#65349E]/5"
                                : "border-border hover:border-[#65349E]/50"
                            }`}
                          >
                            <type.icon
                              className={`h-6 w-6 ${formData.type === type.value ? "text-[#65349E]" : "text-muted-foreground"}`}
                            />
                            <span
                              className={`text-sm font-medium ${formData.type === type.value ? "text-[#65349E]" : ""}`}
                            >
                              {type.label}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button type="submit" size="lg" className="w-full gradient-bg text-white hover:opacity-90 h-12">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Request Emergency Card
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -300],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: 0,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Heart className="h-16 w-16 text-white/80 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Be Prepared for Any Emergency</h2>
            <p className="text-white/80 text-lg mb-8">
              Don't let paperwork delay life-saving care. Get your Emergency Access Card today.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 h-12 px-8 bg-white text-[#65349E] hover:bg-white/90"
                asChild
              >
                <a href="tel:9900089601">
                  <Phone className="h-5 w-5" />
                  Call Us - 99000 89601
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <EmergencyCTA />
    </main>
  )
}
