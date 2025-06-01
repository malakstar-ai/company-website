"use client"

import { useEffect, useState } from "react"
import { Search, Cpu, Settings, ArrowRight } from "lucide-react"

export function HowItWorks() {
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

    const element = document.getElementById("how-it-works-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const steps = [
    {
      number: "01",
      icon: <Search className="w-10 h-10" />,
      title: "Discovery + Mapping",
      description: "We audit your workflows & pain points",
      details: "Deep-dive analysis of your current processes, identifying automation opportunities and bottlenecks.",
    },
    {
      number: "02",
      icon: <Cpu className="w-10 h-10" />,
      title: "Agent Architecture",
      description: "We design & build bespoke agents for your needs",
      details: "Custom AI agents tailored to your specific business requirements and integrated workflows.",
    },
    {
      number: "03",
      icon: <Settings className="w-10 h-10" />,
      title: "Integration + Optimization",
      description: "We deploy, integrate & fine-tune inside your business",
      details: "Seamless deployment with ongoing optimization to ensure maximum performance and ROI.",
    },
  ]

  return (
    <section id="how-it-works-section" className="relative py-32 bg-[#1F1F23] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/3 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#3D9EFF]/3 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 backdrop-blur-sm transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-sm font-medium text-[#D4AF37]">Our Process</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            How It <span className="text-[#D4AF37]">Works</span>
          </h2>

          <p
            className={`text-xl text-white/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            A proven methodology that transforms your business operations with intelligent automation
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div
                  className={`group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-700 delay-${
                    index * 200 + 300
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#D4AF37]/0 to-[#3D9EFF]/0 group-hover:from-[#D4AF37]/10 group-hover:to-[#3D9EFF]/5 rounded-3xl transition-all duration-500" />

                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-bold text-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 p-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 w-fit group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#D4AF37]">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[#D4AF37] font-medium mb-4">{step.description}</p>
                  <p className="text-white/60 leading-relaxed">{step.details}</p>
                </div>

                {/* Arrow - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div
                      className={`p-2 rounded-full bg-[#D4AF37] transition-all duration-1000 delay-${
                        index * 200 + 600
                      } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                    >
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </div>
                )}

                {/* Vertical Arrow - Mobile Only */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div
                      className={`p-2 rounded-full bg-[#D4AF37] rotate-90 transition-all duration-1000 delay-${
                        index * 200 + 600
                      } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                    >
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#3D9EFF]/20 bg-[#3D9EFF]/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#3D9EFF] animate-pulse" />
            <span className="text-[#3D9EFF] font-medium">Ready to transform your business?</span>
          </div>
        </div>
      </div>
    </section>
  )
}
