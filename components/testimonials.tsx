"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const youtubeVideos = [
  {
    id: 'n6oNUdF3_GA',
    url: 'https://youtube.com/shorts/n6oNUdF3_GA?si=1UNBL5tpwga8ZwEO'
  },
  {
    id: 'XTL5kKnKJ3Y',
    url: 'https://youtube.com/shorts/XTL5kKnKJ3Y?si=WPEBLCvqxumVw8sn'
  },
  {
    id: 'GRR3VlU_WZ8',
    url: 'https://youtube.com/shorts/GRR3VlU_WZ8?si=vrLhBqDZYahR16CC'
  }
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
          {youtubeVideos.map((video, index) => (
            <motion.div key={video.id} variants={itemVariants}>
              <Card className="bg-white border-border hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-[9/16] max-h-[500px] mx-auto">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={`Testimonial Video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-[#65349E] hover:text-[#F04A89] font-semibold transition-colors group"
          >
            <span>View More</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
