"use client"

import { useState, useEffect } from "react"
import { Button } from "@/src/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative z-30 flex items-center justify-center min-h-screen px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-sm font-medium text-white/80">Elite AI Solutions</span>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Custom AI Agents That{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#3D9EFF] bg-clip-text text-transparent">
            Revolutionize
          </span>{" "}
          Your Business
        </h1>

        {/* Subheadline */}
        <p
          className={`text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          For elite businesses ready to scale sales, operations, and delivery with intelligence.
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="group relative px-8 py-4 text-lg font-semibold bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
          >
            Book a Discovery Call
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Glassmorphism Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {[
            { title: "Sales Automation", desc: "AI agents that qualify, nurture, and close deals" },
            { title: "Operations Intelligence", desc: "Streamline workflows with autonomous systems" },
            { title: "Delivery Excellence", desc: "Scale customer success with AI precision" },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
