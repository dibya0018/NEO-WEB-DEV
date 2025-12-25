import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { EmergencyServices } from "@/components/emergency-services"
import { DADSection } from "@/components/dad-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowItWorks } from "@/components/how-it-works"
import { EmergencyCard } from "@/components/emergency-card"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <Header />
      <Hero />
      <EmergencyServices />
       <HowItWorks />
       <WhyChooseUs />
      <DADSection />
      <EmergencyCard />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
