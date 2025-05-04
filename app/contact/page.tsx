"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 animated-gradient relative">
        <div className="absolute inset-0 grid-pattern opacity-20 hero-mask"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in <span className="gradient-text">Touch</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Have questions or need assistance? We're here to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a <span className="text-blue-500">Message</span></h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                
                <Button variant="neon" className="w-full sm:w-auto">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary/30 rounded-xl p-8 border border-border h-full">
                <h3 className="text-2xl font-bold mb-6">Contact <span className="text-blue-500">Information</span></h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-muted-foreground">info@nixtools.com</p>
                      <p className="text-muted-foreground">support@nixtools.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 765-4321</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Office</h4>
                      <p className="text-muted-foreground">
                        123 Tech Plaza, Suite 400<br />
                        San Francisco, CA 94107<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-medium mb-4">Business Hours</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Find Us <span className="text-blue-500">Here</span>
            </h2>
            <p className="text-muted-foreground">
              Visit our office or schedule a meeting with our team
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden border border-border h-[400px] relative">
            <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
              <p className="text-muted-foreground">Map loading...</p>
              {/* Replace with actual map component or iframe */}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-900/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to <span className="text-blue-500">Get Started?</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Schedule a demo with our team to see how NIX Tools can transform your web development workflow.
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
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}