"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mother of 2",
    content:
      "When my son had a severe asthma attack at midnight, D.A.D connected us to a doctor within seconds. The hospital team was ready when we arrived. They saved my son's life.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Corporate Professional",
    content:
      "The Emergency Access Card gave us peace of mind. When my father had chest pain, we didn't waste time worrying about payments. Priority treatment started immediately.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Apartment Association President",
    content:
      "We've enrolled our entire apartment community with NeoTrueNorth. Knowing that expert emergency care is just a call away has been invaluable for all 200 families.",
    rating: 5,
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

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold gradient-text uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
            Lives We've <span className="gradient-text">Touched</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from families who trusted us in their most critical moments.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white border-border hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4"
                  >
                    <Quote className="h-6 w-6 text-white" />
                  </motion.div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="h-4 w-4 fill-[#F04A89] text-[#F04A89]" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
