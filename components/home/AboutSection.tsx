"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from 'next/image';


export default function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-500">Mission</span>
          </h2>
          <p className="text-muted-foreground">
            We're on a mission to empower the next generation of web creators with tools that make development faster,
            easier, and more enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold mb-4">Pioneering the Future of Web Development</h3>
            <p className="text-muted-foreground mb-6">
              Founded in 2020, NIX Tools has quickly established itself as a leader in innovative web development
              solutions. Our team of passionate engineers and designers is dedicated to creating tools that push the
              boundaries of what's possible on the web.
            </p>
            <p className="text-muted-foreground mb-6">
              We believe that great websites should be accessible to everyone, regardless of technical skill. That's why
              we've built a platform that combines powerful capabilities with an intuitive interface, making it easy for
              anyone to create professional-quality websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="neon">Meet Our Team</Button>
              <Button variant="outline">Our Story</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-xl blur-xl opacity-70"></div>
              <div className="relative rounded-xl overflow-hidden border border-blue-500/30">
                <Image 
                    src="./ourmiss.jpg" 
                    alt="Web Application Showcase" 
                    layout="responsive"  // Ensures responsiveness
                    width={800}         // Set the width (adjust as needed)
                    height={800}         // Set the height (adjust as needed)
                    className="relative z-10" 
                  />                            
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

