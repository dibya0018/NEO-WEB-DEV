"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Clock,
  AlertTriangle,
  Users,
  Target,
  Eye,
  Heart,
  Shield,
  Zap,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Building,
} from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Delayed Response",
    description: "Critical time lost in reaching appropriate care during emergencies",
  },
  {
    icon: AlertTriangle,
    title: "Confusion",
    description: "Lack of guidance and coordination leads to poor decision-making",
  },
  {
    icon: Users,
    title: "Overcrowding",
    description: "General hospitals overwhelmed with emergency and non-emergency cases",
  },
]

const solutions = [
  {
    icon: Zap,
    title: "Smart Emergency Care",
    description: "Dedicated emergency hospitals with protocols designed for speed and precision",
  },
  {
    icon: Shield,
    title: "Protocol-Driven Model",
    description: "Standardized care pathways ensuring consistent, high-quality outcomes",
  },
  {
    icon: Phone,
    title: "D.A.D - Your First Call",
    description: "Doctor-led triage and hospital coordination from the first moment",
  },
]

const stats = [
  { value: "60", label: "Second Doctor Response", suffix: "sec" },
  { value: "24x7", label: "Emergency Availability", suffix: "" },
  { value: "100", label: "Protocol Adherence", suffix: "%" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AboutPage() {
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <Building className="h-4 w-4" />
              About Neo TrueNorth
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Redefining</span>
              <br />
              <span className="gradient-text">Emergency Healthcare</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Neo TrueNorth is building India's first network of{" "}
              <span className="font-semibold text-foreground">dedicated emergency hospitals</span> - designed from the
              ground up to save lives faster.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-sm font-semibold gradient-text uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Emergency-First <span className="gradient-text">Healthcare</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Neo TrueNorth isn't just another hospital. We are a dedicated emergency care system built on one
                principle: <span className="font-semibold text-foreground">when every second counts, we respond.</span>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike traditional hospitals that handle everything from routine checkups to emergencies, Neo TrueNorth
                focuses exclusively on emergency medicine. This singular focus allows us to maintain the highest
                standards of readiness, expertise, and speed.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="gradient-bg text-white hover:opacity-90 gap-2" asChild>
                  <a href="tel:9900089601">
                    <Phone className="h-5 w-5" />
                    Call D.A.D
                  </a>
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent" asChild>
                  <Link href="/locations">
                    <MapPin className="h-5 w-5" />
                    Find Us
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/location.png"
                  alt="Neo TrueNorth Hospital - Modern Emergency Care Facility"
                  className="w-full h-auto object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  {/* <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center">
                    <Heart className="h-7 w-7 text-white" />
                  </div> */}
                  <div>
                    <p className="text-2xl font-bold">1000+</p>
                    <p className="text-sm text-muted-foreground">Lives Impacted</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold gradient-text uppercase tracking-wider">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Why Emergency Care <span className="gradient-text">Needs Change</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Traditional healthcare systems weren't designed for emergencies. The result? Precious time lost when it
              matters most.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {problems.map((problem, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-white border-border hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-400">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                      <problem.icon className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold gradient-text uppercase tracking-wider">Our Solution</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              The Neo TrueNorth <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A completely reimagined emergency care system built for speed, precision, and life-saving outcomes.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {solutions.map((solution, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-white border-border hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4"
                    >
                      <solution.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* D.A.D Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <Card className="bg-gradient-to-br from-[#65349E] to-[#F04A89] text-white rounded-3xl overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold">D.A.D - Dial A Doctor</h3>

                  <p className="text-white/80 leading-relaxed">
                    D.A.D is the front door to Neo TrueNorth's emergency care system. A single call connects you to an
                    emergency doctor who provides immediate guidance and coordinates your care.
                  </p>

                  <ul className="space-y-3">
                    {["Doctor in 60 seconds", "Not a call center", "Hospital coordination", "24x7 availability"].map(
                      (item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-white/80" />
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>

                  <Button variant="secondary" className="bg-white text-[#65349E] hover:bg-white/90 gap-2" asChild>
                    <Link href="/dad">
                      Learn More About D.A.D
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <span className="text-sm font-semibold gradient-text uppercase tracking-wider">Our Innovation</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                D.A.D: Your <span className="gradient-text">Emergency Lifeline</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                D.A.D (Dial A Doctor) is not just a helpline - it's the cornerstone of our emergency care philosophy.
                It's the bridge between the moment emergency strikes and the moment expert care begins.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By connecting patients directly to emergency doctors within 60 seconds, D.A.D ensures that critical
                guidance starts immediately - not after reaching the hospital, but from the very first moment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="h-full bg-white border-border">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To make world-class emergency care accessible to every Indian, ensuring that no life is lost due to
                    delayed or inadequate emergency response.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full bg-white border-border">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To build a network of dedicated emergency hospitals and telemedicine services that deliver
                    protocol-driven, transparent, and compassionate emergency care - 24x7.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm font-semibold gradient-text uppercase tracking-wider">Our Coverage</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Starting in <span className="gradient-text">Bengaluru</span>, Expanding Across India
            </h2>
            <p className="text-muted-foreground text-lg">
              Neo TrueNorth is currently operational in Bengaluru with plans to expand to major cities across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl bg-muted/50 min-w-[200px]"
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Better Emergency Care?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join the thousands who trust Neo TrueNorth for their emergency healthcare needs.
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
                <Link href="/founder">
                  Founder's Message
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
