"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Users, Award, Zap, ArrowRight } from "lucide-react"
import Image from 'next/image'

export default function AboutPage() {
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
              About <span className="gradient-text">NIX Tools</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Pioneering the future of web development with innovative tools and solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our <span className="text-blue-500">Story</span></h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2020, NIX Tools emerged from a simple vision: to make web development more accessible, 
                efficient, and enjoyable for everyone. What started as a small team of passionate engineers has 
                grown into a leading provider of innovative web development solutions.
              </p>
              <p className="text-muted-foreground mb-6">
                Our journey began when our founders, experienced developers themselves, recognized the challenges 
                and inefficiencies in the web development process. They set out to create tools that would 
                streamline workflows, reduce development time, and empower creators of all skill levels.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, NIX Tools serves thousands of developers, designers, and businesses worldwide, 
                continuously evolving our platform to meet the changing needs of the web development community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-xl blur-xl opacity-70"></div>
                <div className="relative rounded-xl overflow-hidden border border-blue-500/30">
                  <Image 
                    src="/about-story.jpg" 
                    alt="Our Story" 
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-blue-500">Mission & Values</span>
            </h2>
            <p className="text-muted-foreground">
              Guided by our core principles, we're committed to transforming the web development landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-blue-500" />,
                title: "Empowerment",
                description: "We believe in democratizing web development, making powerful tools accessible to creators of all skill levels."
              },
              {
                icon: <Award className="h-10 w-10 text-blue-500" />,
                title: "Excellence",
                description: "We're committed to delivering products of the highest quality, constantly refining and improving our offerings."
              },
              {
                icon: <Zap className="h-10 w-10 text-blue-500" />,
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible, embracing new technologies and approaches."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-blue-500/10 rounded-lg inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Meet Our <span className="text-blue-500">Team</span>
            </h2>
            <p className="text-muted-foreground">
              The talented individuals behind NIX Tools who make the magic happen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Founder & CEO",
                image: "/team-1.jpg"
              },
              {
                name: "Sam Taylor",
                role: "CTO",
                image: "/team-2.jpg"
              },
              {
                name: "Jamie Chen",
                role: "Lead Designer",
                image: "/team-3.jpg"
              },
              {
                name: "Riley Johnson",
                role: "Head of Product",
                image: "/team-4.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-secondary/30 rounded-xl overflow-hidden border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square relative">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
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
              Join Our <span className="text-blue-500">Journey</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We're always looking for talented individuals to join our team. Check out our open positions.
            </motion.p>
            <motion.div
              className="flex justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button variant="neon">
                View Careers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Contact Us</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}