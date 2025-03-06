import { Code, Server, Database } from "lucide-react"

const webAppFeatures = [
  {
    icon: <Code className="h-6 w-6 text-blue-500" />,
    title: "Custom Development",
    description: "Build tailored web applications that meet your specific business needs and requirements.",
  },
  {
    icon: <Server className="h-6 w-6 text-blue-500" />,
    title: "Scalable Architecture",
    description: "Design applications that can grow with your business, handling increased loads and users.",
  },
  {
    icon: <Database className="h-6 w-6 text-blue-500" />,
    title: "Data Management",
    description: "Implement robust data storage and management solutions for your web applications.",
  },
]

export default function WebAppFeatures() {
  return (
    <div className="space-y-8">
      {webAppFeatures.map((feature, index) => (
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

