"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HeroSection({ heroRef }: { heroRef: React.RefObject<HTMLDivElement> }) {
  return (
    <section
      ref={heroRef}
      className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden animated-gradient"
      style={
        {
          "--mouse-x": "0.5",
          "--mouse-y": "0.5",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 grid-pattern opacity-20 hero-mask"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(
            circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), 
            rgba(17, 144, 217, 0.4), 
            transparent 40%
          )`,
        }}
      ></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 h-[55vh]">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 mt-16" variants={fadeInUp}>
            <span className="gradient-text">Build the Future</span> of the Web
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" variants={fadeInUp}>
            Cutting-edge tools and solutions for developers and businesses to create stunning, high-performance websites
            with unparalleled ease.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4 mb-12" variants={fadeInUp}>
            <Button variant="neon" size="lg" className="animate-pulse-glow">
              <span>View Demo</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            className="relative mx-auto max-w-5xl rounded-xl overflow-hidden border border-blue-500/30 shadow-2xl"
            variants={fadeInUp}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/10 z-0"></div>
            {/* <img src="/hero-interface.jpg" alt="NIX Platform Interface" className="w-full h-auto relative z-10" /> */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-20"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20"></div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

