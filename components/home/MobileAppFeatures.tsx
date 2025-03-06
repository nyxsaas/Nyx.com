import { Smartphone, Repeat, Zap } from "lucide-react"

const mobileAppFeatures = [
  {
    icon: <Smartphone className="h-6 w-6 text-blue-500" />,
    title: "Native & Cross-Platform",
    description: "Develop mobile apps for iOS and Android using native technologies or cross-platform frameworks.",
  },
  {
    icon: <Repeat className="h-6 w-6 text-blue-500" />,
    title: "Seamless Integration",
    description:
      "Integrate your mobile apps with existing systems and third-party services for enhanced functionality.",
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-500" />,
    title: "Performance Optimization",
    description: "Ensure your mobile apps are fast, responsive, and efficient across various devices and networks.",
  },
]

export default function MobileAppFeatures() {
  return (
    <div className="space-y-8">
      {mobileAppFeatures.map((feature, index) => (
        <div key={index} className="flex">
          <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-lg mr-4">{feature.icon}</div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

