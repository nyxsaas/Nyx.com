"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-900/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/20 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500/20 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-blue-500">Transform</span> Your Web Development?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of developers and businesses who are already building the future with NIX Tools.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button variant="neon" size="lg" className="animate-pulse-glow">
              Schedule Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

