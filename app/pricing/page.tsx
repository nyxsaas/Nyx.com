"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, HelpCircle, Zap } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic",
    price: "Rs. 20,000.00",
    description: "Perfect for personal projects or small businesses needing a simple online presence.",
    features: [
      "Custom Static Website (Up to 3 pages)",
      "Responsive Design (Mobile & Desktop)",
      "Basic UI/UX Design",
      "1-Year Free Hosting",
      "Contact Form Integration",
      "Delivery in 5-7 Days"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Standard",
    price: "Rs. 55,000.00",
    description: "Ideal for growing businesses that want a professional, engaging website.",
    features: [
      "Custom Static Website (Up to 6 pages)",
      "Premium UI/UX Design",
      "Mobile-First Responsive Layout",
      "Image Optimization & SEO Basics",
      "1-Year Hosting (Premium Tier)",
      "1-Year Domain Registration (.com / .net / .org)",
      "Contact & Inquiry Forms",
      "Delivery in 7-10 Days"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Premium",
    price: "Rs. 100,000.00",
    description: "For brands seeking a polished, conversion-focused web presence.",
    features: [
      "Custom Static Website (Up to 10 pages)",
      "Advanced UI/UX Design + Wireframes",
      "Mobile-First & Retina-Ready",
      "On-Page SEO Optimization",
      "1-Year Premium Hosting + CDN",
      "1-Year Domain Registration (with DNS setup)",
      "Contact, Inquiry & Chatbots",
      "Performance Optimization (Speed, Caching)",
      "Delivery in 10-14 Days"
    ],
    cta: "Contact Sales",
    popular: false
  }
]

export default function PricingPage() {
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
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Choose the plan that works best for you and your team
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 bg-secondary/30 relative">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-background rounded-xl border ${
                  plan.popular ? "border-blue-500" : "border-border"
                } overflow-hidden relative`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <Button
                    variant={plan.popular ? "neon" : "outline"}
                    className="w-full mb-6"
                  >
                    {plan.cta}
                  </Button>
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-background rounded-xl border border-border p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Need a custom solution?</h3>
                <p className="text-muted-foreground">
                  Contact our sales team for a tailored package that meets your specific requirements.
                </p>
              </div>
              <Button variant="neon">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="text-blue-500">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What's included in the website hosting?",
                answer: "Our hosting includes SSL certificates, CDN integration, regular backups, and 99.9% uptime guarantee. We handle all the technical aspects so you can focus on your content."
              },
              {
                question: "Do you offer ongoing maintenance?",
                answer: "Yes, we offer maintenance packages that include regular updates, security patches, content updates, and technical support. These can be added to any of our plans."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Absolutely! You can upgrade your plan at any time. We'll simply charge the difference and extend your services accordingly."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept credit/debit cards, bank transfers, and digital payment methods like PayPal. For larger projects, we can also arrange installment plans."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a satisfaction guarantee. If you're not happy with our services, we'll work with you to address your concerns and ensure you're satisfied with the final product."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-secondary/30 backdrop-blur-sm rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

