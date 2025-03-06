"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, Sparkles, Code, Users, Globe, Shield, Zap } from "lucide-react"

const products = [
  {
    icon: <Layers className="h-10 w-10 text-blue-500" />,
    title: "Drag & Drop Builder",
    description: "Create stunning websites with our intuitive drag-and-drop interface. No coding required.",
    features: ["Visual Editor", "Responsive Design", "Template Library"],
  },
  {
    icon: <Sparkles className="h-10 w-10 text-blue-500" />,
    title: "AI Design Assistant",
    description: "Let our AI suggest design improvements and generate content for your projects.",
    features: ["Smart Suggestions", "Content Generation", "Style Analysis"],
  },
  {
    icon: <Code className="h-10 w-10 text-blue-500" />,
    title: "Code Optimizer",
    description: "Automatically optimize your code for better performance and cleaner structure.",
    features: ["Performance Boost", "Code Cleanup", "Best Practices"],
  },
  {
    icon: <Users className="h-10 w-10 text-blue-500" />,
    title: "Collaboration Tools",
    description: "Work together seamlessly with real-time editing and commenting features.",
    features: ["Real-time Editing", "Version Control", "Team Management"],
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-500" />,
    title: "Deployment Platform",
    description: "Deploy your websites with a single click to our global, high-performance network.",
    features: ["One-click Deploy", "Global CDN", "SSL Certificates"],
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-500" />,
    title: "Security Suite",
    description: "Protect your websites with enterprise-grade security features and monitoring.",
    features: ["DDoS Protection", "Vulnerability Scanning", "24/7 Monitoring"],
  },
]

export default function ProductsSection() {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Innovative <span className="text-blue-500">Tools</span> & Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our suite of powerful tools designed to revolutionize your web development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 p-3 bg-blue-500/10 rounded-lg inline-block group-hover:bg-blue-500/20 transition-colors">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Zap className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

