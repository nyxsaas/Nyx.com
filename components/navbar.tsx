"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Code } from "lucide-react"
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-36 h-20">
                <Image 
                  src="n10c.png" 
                  alt="Your Image" 
                  layout="fill" 
                  objectFit="contain" 
                  className="absolute inset-0"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Products
            </Link>
            <Link href="/features" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/90 backdrop-blur-md border-b border-border/50">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500/20 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500/20 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/features"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500/20 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500/20 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500/20 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500/20 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar


