"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Zap, Layers, Shield } from "lucide-react"

export function EnhancedSocialProof() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ leads: 0, efficiency: 0, clients: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          const duration = 2000
          const steps = 60
          const increment = duration / steps

          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            setCounters({
              leads: Math.floor(progress * 10),
              efficiency: Math.floor(progress * 94),
              clients: Math.floor(progress * 100),
            })

            if (step >= steps) clearInterval(timer)
          }, increment)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("enhanced-social-proof-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const credibilityPoints = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "10x lead response time",
      description: "Our AI agents engage prospects instantly, 24/7/365",
      color: "#D4AF37",
      metric: `${counters.leads}x`,
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Streamlined delivery ops",
      description: "Automate workflows and reduce operational overhead",
      color: "#3D9EFF",
      metric: `${counters.efficiency}%`,
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Custom integrations",
      description: "Seamlessly connect with your existing tech stack",
      color: "#10B981",
      metric: `${counters.clients}%`,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "White-glove onboarding",
      description: "Premium implementation with dedicated specialists",
      color: "#8B5CF6",
      metric: "24/7",
    },
  ]

  return (
    <div id="enhanced-social-proof-section" className="container mx-auto px-6 relative z-10">
      {/* Section Headline */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gray-100">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          <span className="text-xs font-medium text-gray-600">For Elite Businesses</span>
        </div>

        <h2 className="text-4xl font-light text-gray-900 mb-6">
          Built for Ambitious, <span className="text-[#D4AF37]">High-Growth</span> B2B Companies
        </h2>
      </div>

      {/* Credibility Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {credibilityPoints.map((point, index) => (
          <div
            key={index}
            className={`transition-all duration-700 delay-${index * 100 + 300} ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="p-6 rounded-xl bg-white shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow duration-300">
              {/* Icon */}
              <div className="mb-6">
                <div
                  className="p-3 rounded-full w-12 h-12 flex items-center justify-center"
                  style={{
                    backgroundColor: `${point.color}10`,
                  }}
                >
                  <div style={{ color: point.color }}>{point.icon}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{point.description}</p>

              {/* Metric */}
              <div className="flex items-center gap-2">
                <span className="text-2xl font-light" style={{ color: point.color }}>
                  {point.metric}
                </span>
                <span className="text-xs text-gray-400 uppercase">Improvement</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
