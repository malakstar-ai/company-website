"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Zap, Layers, Shield } from "lucide-react"

export function SocialProofSection() {
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

    const element = document.getElementById("social-proof")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const credibilityPoints = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "10x your calls booked",
      description: "Our AI agents find leads and book calls for you, 24/7/365",
      metric: `${counters.leads}x`,
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Streamlined delivery ops",
      description: "Automate workflows and reduce operational overhead",
      metric: `${counters.efficiency}%`,
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Custom integrations",
      description: "Seamlessly connect with your existing tech stack",
      metric: `${counters.clients}%`,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "White-glove onboarding",
      description: "Premium implementation with dedicated specialists",
      metric: "24/7",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-24 relative z-10">
      {/* Section Headline */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-xs font-medium text-white/80">For Future-Proof Businesses</span>
        </div>

        <h2 className="text-4xl font-light text-white mb-6">
          Built for Ambitious, <span className="text-gold">High-Growth</span> B2B Companies
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
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300">
              {/* Icon */}
              <div className="mb-6">
                <div className="p-3 rounded-full w-12 h-12 flex items-center justify-center bg-gold/10">
                  <div className="text-gold">{point.icon}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-white mb-2">{point.title}</h3>
              <p className="text-white/60 text-sm mb-4">{point.description}</p>

              {/* Metric */}
              <div className="flex items-center gap-2">
                <span className="text-2xl font-light text-gold">{point.metric}</span>
                <span className="text-xs text-white/40 uppercase">Improvement</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
