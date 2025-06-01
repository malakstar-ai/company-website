"use client"

import { useEffect, useState } from "react"
import { Check, Zap, Users, Shield, Rocket } from "lucide-react"
import { Button } from "@/src/components/ui/button"

export function WhyChooseUsSection() {
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

    const element = document.getElementById("why-choose-us")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const benefits = [
    {
      text: "Built 100% custom on your tools (Not no-code hacks)",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      text: "Fast-moving, founder-led agency — no fluff",
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      text: "Proven framework, full white-glove support",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      text: "Flexible retainers or full builds",
      icon: <Users className="w-5 h-5" />,
    },
  ]

  return (
    <section id="why-choose-us" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl animate-pulse-slower" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-medium text-white/80">Why Choose Us</span>
          </div>

          {/* Main Headline */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We Don't Just Automate. <span className="text-gold">We Engineer AI Leverage.</span>
          </h2>

          {/* Description */}
          <p
            className={`text-xl text-white/70 mb-16 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Most "AI tools" are surface-level. We go deeper — designing agents that integrate with your real workflows,
            team, and stack.{" "}
            <span className="text-white">
              This isn't SaaS. It's a high-touch partnership to unlock margin, scale, and speed through AI.
            </span>
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-gold/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 p-3 rounded-xl bg-gold/10 border border-gold/20 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <div className="text-gold">{benefit.icon}</div>
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-white font-medium leading-relaxed">{benefit.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="group px-8 py-6 text-sm font-medium bg-gold hover:bg-gold/90 text-black rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 hover:scale-105"
            >
              Let's engineer your AI advantage
              <Zap className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-2 h-2 bg-gold/40 rounded-full animate-float-slow" />
      <div className="absolute top-3/4 right-12 w-1 h-1 bg-gold/60 rounded-full animate-float-medium" />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-gold/30 rounded-full animate-float-fast" />
    </section>
  )
}
