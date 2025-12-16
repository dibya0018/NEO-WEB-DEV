"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Navigation, Bed, Scissors, Activity, CheckCircle } from "lucide-react"

const locations = [
  {
    name: "Neo TrueNorth Hospital",
    address: "Sy. No. 110/4, Rebus Realm 1, Neeladri Rd, Doddathoguru, Bengaluru, Karnataka 560100",
    phone: "99000 89601",
    coordinates: { lat: 12.8456, lng: 77.6603 },
    features: {
      icuBeds: 20,
      emergencyOTs: 4,
      ambulances: 3,
    },
    services: ["Cardiac Emergency", "Trauma Care", "Stroke Unit", "Pediatric Emergency"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/neo-look.avif" alt="Neo TrueNorth Hospital" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Our Location
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Find Emergency Care</span>
              <br />
              <span className="gradient-text">In Electronic City</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Neo TrueNorth Hospital is strategically located in Electronic City, Bengaluru to ensure emergency care is
              always within reach.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mt-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">Electronic City, Bengaluru</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">24x7 Emergency Care</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">Fully Equipped ICU</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location Detail */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold gradient-text uppercase tracking-wider">Bengaluru</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Our <span className="gradient-text">Hospital Location</span>
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {locations.map((location, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white border-border overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2">
                      {/* Location Details */}
                      <div className="p-8 space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                            <span>{location.address}</span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-3 rounded-xl bg-muted/50">
                            <Bed className="h-6 w-6 mx-auto mb-1 text-[#65349E]" />
                            <p className="text-xl font-bold">{location.features.icuBeds}</p>
                            <p className="text-xs text-muted-foreground">ICU Beds</p>
                          </div>
                          <div className="text-center p-3 rounded-xl bg-muted/50">
                            <Scissors className="h-6 w-6 mx-auto mb-1 text-[#F04A89]" />
                            <p className="text-xl font-bold">{location.features.emergencyOTs}</p>
                            <p className="text-xs text-muted-foreground">Emergency OTs</p>
                          </div>
                          <div className="text-center p-3 rounded-xl bg-muted/50">
                            <Activity className="h-6 w-6 mx-auto mb-1 text-[#65349E]" />
                            <p className="text-xl font-bold">{location.features.ambulances}</p>
                            <p className="text-xs text-muted-foreground">Ambulances</p>
                          </div>
                        </div>

                        {/* Services */}
                        <div>
                          <p className="text-sm font-semibold mb-2">Emergency Services:</p>
                          <div className="flex flex-wrap gap-2">
                            {location.services.map((service, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3 pt-4">
                          <Button className="gradient-bg text-white hover:opacity-90 gap-2" asChild>
                            <a href={`tel:${location.phone.replace(/\s/g, "")}`}>
                              <Phone className="h-4 w-4" />
                              {location.phone}
                            </a>
                          </Button>
                          <Button variant="outline" className="gap-2 bg-transparent" asChild>
                            <a
                              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Navigation className="h-4 w-4" />
                              Get Directions
                            </a>
                          </Button>
                        </div>

                        {/* 24x7 Badge */}
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">Open 24 hours - Emergency Services Always Available</span>
                        </div>
                      </div>

                      <div className="bg-muted min-h-[400px] lg:min-h-full relative">
                        <iframe
                          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(location.address)}&zoom=15`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="absolute inset-0"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Emergency Care Now?</h2>
            <p className="text-white/80 text-lg mb-8">
              Don't waste time searching. Call us now and we'll guide you to our Electronic City hospital while alerting
              the ER team.
            </p>

            <Button
              size="lg"
              variant="secondary"
              className="gap-2 h-14 px-8 bg-white text-[#65349E] hover:bg-white/90 text-lg"
              asChild
            >
              <a href="tel:9900089601">
                <Phone className="h-6 w-6" />
                Call Now - 99000 89601
              </a>
            </Button>

            <p className="text-white/60 text-sm mt-6">Available 24x7 at Electronic City, Bengaluru</p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <EmergencyCTA />
    </main>
  )
}
