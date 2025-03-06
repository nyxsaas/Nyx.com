"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, Sparkles, Code, Users, Check } from "lucide-react"

export default function ProductsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 animated-gradient relative">
        <div className="absolute inset-0 grid-pattern opacity-20 hero-mask"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Our <span className="gradient-text">Products</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Discover our suite of innovative tools designed to revolutionize your web development workflow
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {/* Product 1 */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-lg mb-4">
                  <Layers className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Drag & Drop Website Builder</h2>
                <p className="text-muted-foreground mb-6">
                  Create stunning websites with our intuitive drag-and-drop interface. No coding required. Perfect for
                  beginners and professionals alike who want to build beautiful websites quickly.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Visual editor with real-time preview",
                    "Responsive design tools for all devices",
                    "Extensive template library with customization options",
                    "Built-in SEO optimization tools",
                    "One-click publishing to our global CDN",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="neon">
                    Try Builder
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">View Templates</Button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-xl overflow-hidden border border-blue-500/30 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 z-0"></div>
                  <img
                    src="/drag-drop-builder.jpg"
                    alt="Drag & Drop Builder Interface"
                    className="w-full h-auto relative z-10"
                  />
                </div>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="order-2">
                <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-lg mb-4">
                  <Sparkles className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">AI Design Assistant</h2>
                <p className="text-muted-foreground mb-6">
                  Let our AI suggest design improvements and generate content for your projects. Our intelligent
                  assistant analyzes your design and provides recommendations to enhance user experience and visual
                  appeal.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Smart design suggestions based on current trends",
                    "AI-powered content generation for placeholders",
                    "Style analysis and color palette recommendations",
                    "Accessibility improvement suggestions",
                    "Performance optimization recommendations",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="neon">
                    Try AI Assistant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">See Examples</Button>
                </div>
              </div>
              <div className="order-1">
                <div className="relative rounded-xl overflow-hidden border border-blue-500/30 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 z-0"></div>
                  <img
                    src="/ai-design-assistant.jpg"
                    alt="AI Design Assistant Interface"
                    className="w-full h-auto relative z-10"
                  />
                </div>
              </div>
            </motion.div>

            {/* Product 3 */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-lg mb-4">
                  <Code className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Code Optimizer</h2>
                <p className="text-muted-foreground mb-6">
                  Automatically optimize your code for better performance and cleaner structure. Our intelligent code
                  analyzer identifies bottlenecks and suggests improvements to enhance your website's speed and
                  efficiency.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Automatic code minification and compression",
                    "Performance bottleneck identification",
                    "Best practices implementation suggestions",
                    "Cross-browser compatibility checks",
                    "Unused code detection and removal",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="neon">
                    Try Code Optimizer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">View Documentation</Button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-xl overflow-hidden border border-blue-500/30 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 z-0"></div>
                  <img
                    src="/code-optimizer.jpg"
                    alt="Code Optimizer Interface"
                    className="w-full h-auto relative z-10"
                  />
                </div>
              </div>
            </motion.div>

            {/* Product 4 */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="order-2">
                <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-lg mb-4">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Collaboration Tools</h2>
                <p className="text-muted-foreground mb-6">
                  Work together seamlessly with real-time editing and commenting features. Our collaboration tools make
                  it easy for teams to work on projects simultaneously, with changes synced instantly across all
                  devices.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Real-time collaborative editing",
                    "Version control with history tracking",
                    "Team management with role-based permissions",
                    "In-context commenting and feedback",
                    "Project sharing and export options",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="neon">
                    Try Collaboration Tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Team Plans</Button>
                </div>
              </div>
              <div className="order-1">
                <div className="relative rounded-xl overflow-hidden border border-blue-500/30 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 z-0"></div>
                  <img
                    src="/collaboration-tools.jpg"
                    alt="Collaboration Tools Interface"
                    className="w-full h-auto relative z-10"
                  />
                </div>
              </div>
            </motion.div>
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
              Ready to <span className="text-blue-500">Elevate</span> Your Web Development?
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Try our complete suite of tools with a 14-day free trial. No credit card required.
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
    </div>
  )
}

