"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { AnimatedFlowchart } from "@/components/animated-flowchart"
import { AnimatedCard } from "@/components/animated-card"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Clock,
  UserCheck,
  Stethoscope,
  Shield,
  Heart,
  Brain,
  Thermometer,
  Activity,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"

const howItWorks = [
  {
    step: "01",
    title: "Call D.A.D",
    description: "Dial 99000 89601 - our emergency helpline available 24x7",
    icon: Phone,
  },
  {
    step: "02",
    title: "Doctor Connects",
    description: "An emergency doctor connects within 60 seconds",
    icon: Clock,
  },
  {
    step: "03",
    title: "Triage & Guidance",
    description: "Doctor assesses situation and provides immediate guidance",
    icon: Stethoscope,
  },
  {
    step: "04",
    title: "Hospital Coordination",
    description: "ER team is alerted and prepared before you arrive",
    icon: Shield,
  },
]

const benefits = [
  {
    icon: UserCheck,
    title: "Doctor-Led, Not Call Center",
    description: "Real emergency doctors handle your calls, not customer service agents",
  },
  {
    icon: Clock,
    title: "60 Second Response",
    description: "Connect with a doctor within 60 seconds of your call",
  },
  {
    icon: Stethoscope,
    title: "Remote First Aid Guidance",
    description: "Get immediate medical guidance while help is on the way",
  },
  {
    icon: Shield,
    title: "Seamless Hospital Handoff",
    description: "ER team receives your case details before you arrive",
  },
  {
    icon: Heart,
    title: "Backed by Neo TrueNorth",
    description: "Connected to our network of emergency hospitals and ICUs",
  },
  {
    icon: Activity,
    title: "24x7 Availability",
    description: "Emergency support available round the clock, every day",
  },
]

const symptoms = [
  { icon: Heart, text: "Chest pain or pressure" },
  { icon: Brain, text: "Sudden confusion or speech difficulty" },
  { icon: Activity, text: "Severe breathing problems" },
  { icon: Thermometer, text: "High fever with rash" },
  { icon: AlertTriangle, text: "Severe allergic reaction" },
  { icon: Shield, text: "Uncontrolled bleeding" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
       type: "spring" as const,
      stiffness: 100,
    },
  },
}

export default function DADPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#65349E]/10 blur-3xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#F04A89]/10 blur-3xl"
          />

          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -50, 0],
                x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 1.5,
              }}
              className="absolute w-32 h-32 rounded-full gradient-bg opacity-20 blur-2xl"
              style={{
                top: `${20 + i * 25}%`,
                left: `${10 + i * 30}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
                Doctors Available 24x7
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="gradient-text block"
                >
                  D.A.D
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-foreground block"
                >
                  Dial A Doctor
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                Your First Call in Any Medical Emergency. Connect with an emergency doctor within{" "}
                <span className="font-semibold text-foreground">60 seconds</span> who will guide you, coordinate care,
                and ensure the hospital is ready for you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 gap-2 h-14 px-4 sm:px-8 text-base sm:text-lg whitespace-nowrap" asChild>
                  <a href="tel:9900089601">
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, repeatDelay: 2 }}
                    >
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                    </motion.div>
                    <span className="whitespace-nowrap">Call D.A.D</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-6 pt-4"
              >
                {["Doctor-led calls", "60 second response", "Hospital coordination"].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </motion.div>
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
             <motion.div 
              whileHover={{ scale: 1.02 }} 
              className="relative rounded-3xl overflow-hidden shadow-2xl w-[85%] mx-auto"  // Reduced from w-[90%]
            >
            <img
            src="/replace.jpeg"
            alt="D.A.D - Dial A Doctor"
            className="w-full h-auto object-cover"
             />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 left-4 right-4 sm:left-16 sm:right-16 rounded-2xl p-4 sm:p-6 shadow-xl overflow-hidden"
              >
                <motion.div 
                animate={{ y: [0, -5] }} 
                transition={{ 
                 duration: 3, 
                 repeat: Number.POSITIVE_INFINITY,
                 repeatType: "reverse"
                }}
                >
                  <div className="w-full">
                    <Button size="lg" className="w-full gradient-bg text-white hover:opacity-90 gap-2 h-16 text-lg rounded-t-none rounded-b-2xl" asChild>
                      <a href="tel:9900089602">
                        <motion.div
                          animate={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, repeatDelay: 2 }}
                        >
                          <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                        </motion.div>
                        <span className="whitespace-nowrap">Call D.A.D</span>
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How D.A.D Works - Using AnimatedFlowchart */}
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
              How It Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mt-4 mb-6"
            >
              How <span className="gradient-text">D.A.D</span> Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Four simple steps that could save a life.
            </motion.p>
          </motion.div>

          <AnimatedFlowchart steps={howItWorks} columns={4} />
        </div>
      </section>

      {/* Why D.A.D - Using AnimatedCard */}
      <section className="py-20 bg-white">
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
              Why Choose D.A.D
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              What Makes <span className="gradient-text">D.A.D</span> Different
            </h2>
            <p className="text-muted-foreground text-lg">
              Real doctors, real response, real coordination - not a generic helpline.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* When to Call - Enhanced animations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-semibold gradient-text uppercase tracking-wider px-4 py-1 rounded-full bg-[#65349E]/10"
              >
                When to Call
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Call D.A.D When You Experience <span className="gradient-text">These Symptoms</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Don't wait. In emergencies, every second matters. Call D.A.D immediately if you or someone near you
                experiences any of these warning signs.
              </p>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 gap-2 h-12" asChild>
                  <a href="tel:9900089601">
                    <Phone className="h-5 w-5" />
                    Call D.A.D Now
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border shadow-sm cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0"
                  >
                    <symptom.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <span className="font-medium">{symptom.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section - Enhanced */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -200],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Backed by Neo TrueNorth Emergency Hospitals
            </h2>
            <p className="text-white/80 text-lg mb-8">
              D.A.D is powered by Neo TrueNorth's network of dedicated emergency hospitals with 24x7 emergency doctors,
              ICUs, and operating theaters ready to receive you.
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { value: "60", label: "Second Response" },
                { value: "24x7", label: "Availability" },
                { value: "100%", label: "Doctor-Led" },
              ].map((stat, i) => (
                <motion.div key={i} variants={itemVariants} whileHover={{ scale: 1.1 }} className="text-center">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, type: "spring" }}
                    className="text-4xl font-bold text-white"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 h-12 px-4 sm:px-8 bg-white text-[#65349E] hover:bg-white/90 whitespace-nowrap"
                asChild
              >
                <a href="tel:9900089602">
                  <Phone className="h-5 w-5" />
                  <span className="whitespace-nowrap">Call D.A.D - 99000 89602</span>
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
