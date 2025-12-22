"use client"

import type React from "react"
import { useState, useEffect } from "react"
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const [particlePositions, setParticlePositions] = useState<number[]>([])

  // Generate random positions only on client side to avoid hydration mismatch
  useEffect(() => {
    setParticlePositions(Array.from({ length: 15 }, () => Math.random() * 100))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setSubmitMessage("")

    try {
      // Get UTM parameters from URL if present
      const urlParams = new URLSearchParams(window.location.search)
      const utmParams = {
        utmCampaign: urlParams.get("utm_campaign") || "",
        utmContent: urlParams.get("utm_content") || "",
        utmMedium: urlParams.get("utm_medium") || "",
        utmSource: urlParams.get("utm_source") || "",
        gclid: urlParams.get("gclid") || "",
      }

      // Clean phone number (remove spaces, dashes, etc.)
      const cleanPhone = formData.phone.replace(/\s+/g, "").replace(/-/g, "")

      // Prepare form data for Next.js API route
      const formDataToSend = new FormData()
      formDataToSend.append("orgId", "1750175112727x192042413945782270")
      formDataToSend.append("name", formData.name.trim())
      formDataToSend.append("phone", cleanPhone)
      formDataToSend.append("email", formData.email.trim() || "")
      formDataToSend.append("description", `Emergency Access Card Request - Type: ${formData.type}`)
      formDataToSend.append("sourceURL", window.location.href)
      
      // Add UTM parameters if present
      if (utmParams.utmCampaign) formDataToSend.append("utmCampaign", utmParams.utmCampaign)
      if (utmParams.utmContent) formDataToSend.append("utmContent", utmParams.utmContent)
      if (utmParams.utmMedium) formDataToSend.append("utmMedium", utmParams.utmMedium)
      if (utmParams.utmSource) formDataToSend.append("utmSource", utmParams.utmSource)
      if (utmParams.gclid) formDataToSend.append("gclid", utmParams.gclid)

      // Call Next.js API route (which will proxy to the external API)
      const response = await fetch("/api/create-lead", {
        method: "POST",
        body: formDataToSend,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.resp?.status === "SUCCESS") {
        setSubmitStatus("success")
        setSubmitMessage("Thank you! We will contact you shortly to process your Emergency Access Card.")
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          type: "family",
        })
      } else {
        throw new Error(data.resp?.message || "Failed to submit request")
      }
    } catch (error) {
      setSubmitStatus("error")
      if (error instanceof TypeError && error.message.includes("fetch")) {
        setSubmitMessage(
          "Network error. Please check your internet connection and try again, or call us at 99000 89601."
        )
      } else {
        setSubmitMessage(
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again or call us at 99000 89601."
        )
      }
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-x-hidden">
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
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="space-y-4 sm:space-y-6"
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

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
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
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
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

      {/* Benefits Section - Grid Layout */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block text-sm font-semibold gradient-text uppercase tracking-wider px-4 py-1 rounded-full bg-[#65349E]/10"
            >
              Card Benefits
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-6">
              Why Get the <span className="gradient-text">Emergency Access Card</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For - Grid Layout */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block text-sm font-semibold gradient-text uppercase tracking-wider px-4 py-1 rounded-full bg-[#65349E]/10"
            >
              Perfect For
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-6">
              Who Is This <span className="gradient-text">Card For</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {targetAudience.map((item, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Card Form */}
      <section className="py-12 sm:py-16 md:py-20 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start max-h-full">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Request Your <span className="gradient-text">Emergency Access Card</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
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

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <Card className="bg-white border-border shadow-xl">
                <CardContent className="p-4 sm:p-6 md:p-8">
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
                        placeholder="Enter your email (optional)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <p className="text-sm font-medium">{submitMessage}</p>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800"
                      >
                        <p className="text-sm font-medium">{submitMessage}</p>
                      </motion.div>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gradient-bg text-white hover:opacity-90 h-12"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <CreditCard className="h-5 w-5 mr-2" />
                            Request Emergency Card
                          </>
                        )}
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
      <section className="py-12 sm:py-16 md:py-20 relative overflow-x-hidden">
        <div className="absolute inset-0 gradient-bg" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((left, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -300],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + (i % 3) * 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${left}%`,
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
                className="gap-2 h-12 px-4 sm:px-8 bg-white text-[#65349E] hover:bg-white/90 whitespace-nowrap"
                asChild
              >
                <a href="tel:9900089602">
                  <Phone className="h-5 w-5" />
                  <span className="whitespace-nowrap">Call Us - 99000 89602</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
