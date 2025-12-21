"use client"
import Link from "next/link"
import { Clock, Bed, AmbulanceIcon, SyringeIcon, Accessibility, Pill, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Calendar, Phone, Stethoscope } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Symptom Item Component
const SymptomItem = ({ symptom, index }: { symptom: { name: string; description: string }, index: number }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (isMobile) {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.03, duration: 0.4, type: "spring", stiffness: 200 }}
        className="w-full px-2 mb-3"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-3 text-sm font-medium text-left rounded-xl border transition-colors duration-200
            ${isOpen ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'} 
            border-white/20 flex justify-between items-center`}
        >
          <span>{symptom.name}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-2"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-1 p-4 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200">
                <p className="text-sm text-gray-800">{symptom.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // Desktop version
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="relative"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200 text-sm font-medium cursor-pointer">
              {symptom.name}
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs p-4 bg-white/90 backdrop-blur-sm text-black border border-gray-200">
            <p className="text-sm">{symptom.description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};

// Simple card component to replace HoverCard3D
interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ children, className = "", ...props }) => (
  <div 
    className={`text-center p-6 rounded-2xl bg-white border border-border transition-all duration-300 group h-full hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 flex flex-col ${className}`}
    {...props}
  >
    {children}
  </div>
)

const symptomData = [
  {
    name: "Road Traffic Accident",
    description: "Incidents involving vehicles, injury, or fatality, requiring immediate emergency response and investigation."
  },
  {
    name: "Chest pain",
    description: "A physical discomfort or pressure felt anywhere from the neck to the upper abdomen that requires immediate medical evaluation to rule out serious underlying conditions."
  },
  {
    name: "Abdominal Pain",
    description: "Any discomfort or distress felt between the chest and the groin, often ranging from mild indigestion to a sign of a serious underlying medical condition."
  },
  {
    name: "Burns",
    description: "A type of injury to the skin caused by heat, radiation, electricity, friction, or chemical contact."
  },
  {
    name: "Breathlessness",
    description: "Also known as dyspnea, an uncomfortable sensation of being unable to get enough air into the lungs, often described as chest tightness or air hunger which requires immediate emergency response."
  },
  {
    name: "Anxiety",
    description: "A feeling of unease, such as worry or fear, that can be mild or severe and is often accompanied by physical symptoms like a rapid heartbeat or tension."
  },
  {
    name: "Bleeding",
    description: "Also known as hemorrhage, the loss of blood from the circulatory system through damaged blood vessels, either internally or externally through the skin."
  },
  {
    name: "Headache",
    description: "A sensation of pain or discomfort in the head or upper neck region, often caused by tension, migraines, or underlying medical issues."
  },
  {
    name: "Back pain",
    description: "Discomfort or stiffness felt anywhere along the spine, from the neck to the lower back, often resulting from muscle strain, injury, or underlying conditions."
  },
  {
    name: "Dog bite",
    description: "A wound or puncture caused by a dog's teeth that requires immediate cleaning and medical evaluation to prevent infection or complications."
  },
   {
    name: "Fever",
    description: "Fever is a temporary increase in body temperature, usually above 38°C (100.4°F)  or more..that the body is fighting off an infection or illness..."
  },
  {
    name: "Poison",
    description: "Poisoning is a medical emergency caused by swallowing, breathing, or touching a harmful substance that interferes with normal body functions and can cause serious injury or death."
  }
]

const reasons = [
  {
    icon: Pill, 
    title: "General Physician 24×7",
    description: "Round-the-clock access to experienced doctors for prompt and reliable medical care.",
    color: "from-emerald-500 to-teal-700"
  },
  {
    icon: Clock,
    title: "Pharmacy 24×7",
    description: "Medicines available anytime, with pharmacist support always on hand.",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: SyringeIcon,
    title: "Diagnostics 24×7",
    description: "On-site lab services with fast, accurate test results using advanced equipment.",
    color: "from-purple-500 to-indigo-700"
  },
  {
    icon: AmbulanceIcon,
    title: "Ambulance 24×7",
    description: "Immediate emergency transport available anytime, day or night.",
    color: "from-rose-500 to-pink-700"
  },
]

function WhyChooseUs() {
  const [dots, setDots] = useState<Array<{left: number, top: number}>>([])
  
  useEffect(() => {
    setDots(Array(10).fill(0).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100
    })))
  }, [])

  return (
    <section id="services" className="py-10 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#65349E]/20"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">24/7 Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#65349E] to-[#F04A89] mx-auto"></div>
        </motion.div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto justify-items-center">
  {reasons.map((reason, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="w-full max-w-[280px]"
    >
      <ServiceCard>
  <div className="flex-grow">
    <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
      <reason.icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-125" />
    </div>
    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
      {reason.title}
    </h3>
    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-4">
      {reason.description}
    </p>
  </div>
 <Link 
  href={reason.title === "General Physician 24×7" ? "/Appointment" : "tel:9900089601"}
  className="mt-auto w-full"
>
  {reason.title === "General Physician 24×7" ? (
    <Button variant="outline" className="w-full">
      Book Appointment
    </Button>
  ) : (
    <Button variant="outline" className="w-full">
      <Phone className="mr-2 h-4 w-4" /> Call Now
    </Button>
  )}
</Link>
</ServiceCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <img
          src="/abstract-medical-pattern-background-subtle.jpg"
          alt="Medical Pattern Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10">
        <Header />
        <WhyChooseUs />
        
        {/* Book Appointment Button */}
        <div className="py-12 text-center">
          <Link
            href="/Appointment"
            className="relative inline-flex items-center justify-center gap-3 h-16 px-12 bg-gradient-to-r from-[#65349E] via-[#F04A89] to-[#65349E] text-white text-xl font-bold rounded-full
              shadow-lg hover:shadow-[0_20px_50px_rgba(240,74,137,0.4)] 
              transform hover:-translate-y-1 transition-all duration-300
              before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#7a4ab8] before:via-[#ff5c9d] before:to-[#7a4ab8]
              before:blur-md before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500
              overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Calendar className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
              <span className="transition-all duration-300">Book Appointment</span>
            </span>
          </Link>
        </div>
        
        {/* Symptoms Section */}
        <section className="py-20 bg-gradient-to-b from-white via-muted/20 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#65349E] to-[#F04A89] bg-clip-text text-transparent">
                Symptoms We Treat
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our 24/7 emergency care covers a wide range of symptoms and conditions
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              <div className="w-full max-w-5xl mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-3">
                  {symptomData.map((symptom, index) => (
                    <SymptomItem key={index} symptom={symptom} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  )
}