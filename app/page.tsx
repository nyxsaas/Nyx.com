"use client"

import { useEffect, useRef } from "react"
import HeroSection from "@/components/home/HeroSection"
import ProductsSection from "@/components/home/ProductsSection"
import FeaturesSection from "@/components/home/FeaturesSection"
import WebDesignSection from "@/components/home/WebDesignSection"
import WebAppSection from "@/components/home/WebAppSection"
import MobileAppSection from "@/components/home/MobileAppSection"
import AboutSection from "@/components/home/AboutSection"
import PricingSection from "@/components/home/PricingSection"
import ContactSection from "@/components/home/ContactSection"
import CTASection from "@/components/home/CTASection"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      heroRef.current.style.setProperty("--mouse-x", `${x}`)
      heroRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection heroRef={heroRef} />
      <ProductsSection />
      <FeaturesSection />
      <WebDesignSection />
      <WebAppSection />
      <MobileAppSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <CTASection />
    </div>
  )
}

