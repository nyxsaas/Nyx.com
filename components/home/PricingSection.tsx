"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for individuals and small projects",
    features: ["1 Project", "Basic Templates", "Standard Support", "1GB Storage", "Basic Analytics"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$49",
    description: "Ideal for growing businesses and teams",
    features: [
      "10 Projects",
      "Premium Templates",
      "Priority Support",
      "10GB Storage",
      "Advanced Analytics",
      "Team Collaboration",
      "Custom Domains",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited Projects",
      "All Templates",
      "24/7 Support",
      "100GB Storage",
      "Enterprise Analytics",
      "Advanced Security",
      "API Access",
      "Custom Integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-blue-500">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you and your team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-background/80 backdrop-blur-sm rounded-xl border ${
                plan.popular ? "border-blue-500 shadow-[0_0_15px_rgba(17,144,217,0.5)]" : "border-border"
              } overflow-hidden transition-all duration-300 hover:border-blue-500/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-1 text-xs font-medium">MOST POPULAR</div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Zap className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? "neon" : "outline"} className="w-full">
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Contact our sales team for a tailored package.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  )
}

