"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Zap, Layers, Shield } from "lucide-react"

export function SocialProof() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("social-proof-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const credibilityPoints = [
    {
      icon: <Zap className="w-8 h-8 text-[#D4AF37]" />,
      title: "10x lead response time",
      description: "Our AI agents engage prospects instantly, 24/7/365",
    },
    {
      icon: <Layers className="w-8 h-8 text-[#D4AF37]" />,
      title: "Streamlined delivery ops using AI agents",
      description: "Automate workflows and reduce operational overhead",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#D4AF37]" />,
      title: "Custom integrations with your tools",
      description: "Seamlessly connect with your existing tech stack",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#D4AF37]" />,
      title: "Confidential, white-glove onboarding",
      description: "Premium implementation with dedicated specialists",
    },
  ]

  return (
    <section id="social-proof-section" className="relative py-32 bg-[#0B0B0F] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#3D9EFF]/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Headline */}
        <div className="text-center mb-20">
          <div
            className={`w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#3D9EFF] mx-auto mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Built for Ambitious, <span className="text-[#D4AF37]">High-Growth</span> B2B Companies
          </h2>
        </div>

        {/* Credibility Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credibilityPoints.map((point, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 delay-${
                index * 100 + 200
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#D4AF37]/0 to-[#3D9EFF]/0 group-hover:from-[#D4AF37]/10 group-hover:to-[#3D9EFF]/10 rounded-2xl transition-all duration-500" />

              {/* Icon */}
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>

              {/* Description */}
              <p className="text-white/60">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div
          className={`w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-24 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
      </div>
    </section>
  )
}
