import { Palette, Layout, Zap } from "lucide-react"

const webDesignFeatures = [
  {
    icon: <Palette className="h-6 w-6 text-blue-500" />,
    title: "Creative Design",
    description: "Our expert designers create visually stunning and unique websites tailored to your brand.",
  },
  {
    icon: <Layout className="h-6 w-6 text-blue-500" />,
    title: "Responsive Layouts",
    description: "Ensure your website looks great on all devices with our responsive design approach.",
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-500" />,
    title: "Fast Performance",
    description: "Optimize your website's speed and performance for better user experience and SEO.",
  },
]

export default function WebDesignFeatures() {
  return (
    <div className="space-y-8">
      {webDesignFeatures.map((feature, index) => (
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

