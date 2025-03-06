"use client"

import { motion } from "framer-motion"
import { Rocket, Users, Globe, Shield, BarChart, Zap, Cpu } from "lucide-react"
import Image from 'next/image';


const features = [
  {
    icon: <Rocket className="h-6 w-6 text-blue-500" />,
    title: "Scalability",
    description: "Our platform grows with your needs, handling projects of any size with ease.",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time, with changes synced instantly.",
  },
  {
    icon: <Globe className="h-6 w-6 text-blue-500" />,
    title: "Cross-Platform Compatibility",
    description: "Build once, deploy everywhere with full support for all modern platforms.",
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-500" />,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with the latest security protocols and encryption.",
  },
]

const stats = [
  { value: "99.9%", label: "Uptime", icon: <BarChart className="h-5 w-5" /> },
  { value: "500ms", label: "Average Load Time", icon: <Zap className="h-5 w-5" /> },
  { value: "10,000+", label: "Active Users", icon: <Users className="h-5 w-5" /> },
  { value: "24/7", label: "Support Available", icon: <Cpu className="h-5 w-5" /> },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-blue-500">Benefits</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful features that set our platform apart from the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-lg mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-xl overflow-hidden border border-blue-500/30 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 z-0"></div>
              <Image 
                src="./tb.png" 
                alt="Web Application Showcase" 
                layout="responsive"  // Ensures responsiveness
                width={800}         // Set the width (adjust as needed)
                height={800}         // Set the height (adjust as needed)
                className="relative z-10" 
              />            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent opacity-50 z-20"></div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-1 gradient-text">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

