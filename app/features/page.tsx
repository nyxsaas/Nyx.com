"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Users, Globe, Shield, Zap, Cpu, BarChart, Check } from "lucide-react"

export default function FeaturesPage() {
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
              Powerful <span className="gradient-text">Features</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Discover the technical benefits that set our platform apart from the competition
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-lg mr-4">
                    <Rocket className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Unparalleled Scalability</h3>
                    <p className="text-muted-foreground">
                      Our platform grows with your needs, handling projects of any size with ease. From small personal
                      websites to enterprise-level applications, our infrastructure scales automatically to meet demand.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time Collaboration</h3>
                    <p className="text-muted-foreground">
                      Work together with your team in real-time, with changes synced instantly across all devices. Our
                      conflict resolution system ensures that multiple editors can work simultaneously without
                      overwriting each other's changes.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-lg mr-4">
                    <Globe className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cross-Platform Compatibility</h3>
                    <p className="text-muted-foreground">
                      Build once, deploy everywhere with full support for all modern platforms. Our responsive design
                      tools ensure your websites look great on any device, from desktop to mobile.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
                    <p className="text-muted-foreground">
                      Your data is protected with the latest security protocols and encryption. We implement
                      industry-standard security measures to ensure your projects and client information remain secure.
                    </p>
                  </div>
                </div>
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
              <img src="/advanced-features.jpg" alt="NIX Advanced Features" className="w-full h-auto relative z-10" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent opacity-50 z-20"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { value: "99.9%", label: "Uptime", icon: <BarChart className="h-5 w-5" /> },
              { value: "500ms", label: "Average Load Time", icon: <Zap className="h-5 w-5" /> },
              { value: "10,000+", label: "Active Users", icon: <Users className="h-5 w-5" /> },
              { value: "24/7", label: "Support Available", icon: <Cpu className="h-5 w-5" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-secondary/30 backdrop-blur-sm rounded-xl border border-border p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
              <ul className="space-y-4">
                {[
                  "Built on modern web technologies (React, Next.js)",
                  "Global CDN with edge caching for lightning-fast load times",
                  "Automatic SSL certificate management",
                  "WebAssembly support for high-performance computing",
                  "GraphQL API for efficient data fetching",
                  "Serverless architecture for optimal scaling",
                  "Automated backups and disaster recovery",
                  "Advanced analytics and performance monitoring",
                ].map((spec, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-secondary/30 backdrop-blur-sm rounded-xl border border-border p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Integration Capabilities</h3>
              <ul className="space-y-4">
                {[
                  "RESTful API for seamless third-party integrations",
                  "Webhook support for event-driven architecture",
                  "OAuth 2.0 authentication for secure access",
                  "Native integrations with popular CMS platforms",
                  "E-commerce platform connectors (Shopify, WooCommerce)",
                  "Social media API integrations",
                  "Payment gateway support (Stripe, PayPal)",
                  "Email marketing platform connections",
                ].map((integration, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{integration}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-secondary/30 relative">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced <span className="text-blue-500">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the cutting-edge features that make our platform the choice of professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Optimization",
                description:
                  "Our machine learning algorithms analyze your website's performance and user behavior to suggest optimizations that improve engagement and conversion rates.",
                features: [
                  "Automated A/B testing",
                  "User behavior analysis",
                  "Performance optimization suggestions",
                  "Content effectiveness scoring",
                ],
              },
              {
                title: "Advanced Animation System",
                description:
                  "Create stunning animations and interactions without writing complex code. Our visual animation editor makes it easy to bring your websites to life.",
                features: [
                  "Visual timeline editor",
                  "Physics-based animations",
                  "Scroll-triggered effects",
                  "Performance-optimized rendering",
                ],
              },
              {
                title: "Headless CMS Integration",
                description:
                  "Connect to any headless CMS to manage your content while maintaining complete control over your frontend implementation.",
                features: [
                  "Content modeling tools",
                  "GraphQL content API",
                  "Real-time content updates",
                  "Multi-language support",
                ],
              },
              {
                title: "Progressive Web App Support",
                description:
                  "Build websites that work offline and can be installed on users' devices, providing a native app-like experience.",
                features: [
                  "Service worker management",
                  "Offline functionality",
                  "Push notifications",
                  "App manifest generation",
                ],
              },
              {
                title: "Advanced SEO Tools",
                description:
                  "Optimize your website for search engines with our comprehensive SEO toolkit, designed to help you rank higher in search results.",
                features: [
                  "Keyword analysis",
                  "On-page SEO recommendations",
                  "Structured data implementation",
                  "Performance optimization for Core Web Vitals",
                ],
              },
              {
                title: "Accessibility Compliance",
                description:
                  "Ensure your websites are accessible to all users with our built-in accessibility tools and automated compliance checking.",
                features: [
                  "WCAG compliance checking",
                  "Contrast analysis",
                  "Screen reader compatibility",
                  "Keyboard navigation testing",
                ],
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
              Experience the <span className="text-blue-500">Future</span> of Web Development
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join thousands of developers and businesses who are already building with NIX Tools.
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button variant="neon" size="lg" className="animate-pulse-glow">
                View Documentation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

