"use client"

import { useState, useEffect } from "react"
import { Button } from "@/src/components/ui/button"
import { ArrowRight, Sparkles, Play } from "lucide-react"

export function EnhancedHeroContent() {
  const [isVisible, setIsVisible] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const rotatingTexts = ["Revolutionize", "Transform", "Accelerate", "Optimize"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative z-30 flex items-center justify-center min-h-screen px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Badge */}
        <div
          className={`inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-1000 hover:scale-105 hover:bg-white/15 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-[#D4AF37] animate-pulse" />
            <div className="absolute inset-0 animate-ping">
              <Sparkles className="w-5 h-5 text-[#D4AF37] opacity-30" />
            </div>
          </div>
          <span className="text-sm font-medium text-white/90 tracking-wide">Elite AI Solutions</span>
          <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
        </div>

        {/* Enhanced Main Headline */}
        <h1
          className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Custom AI Agents That{" "}
          <span className="relative inline-block">
            <span
              key={textIndex}
              className="bg-gradient-to-r from-[#D4AF37] via-[#3D9EFF] to-[#10B981] bg-clip-text text-transparent animate-gradient-x bg-300% animate-text-shimmer"
            >
              {rotatingTexts[textIndex]}
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#3D9EFF] rounded-lg blur opacity-20 animate-pulse" />
          </span>{" "}
          Your Business
        </h1>

        {/* Enhanced Subheadline */}
        <p
          className={`text-xl md:text-2xl lg:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          For elite businesses ready to scale <span className="text-[#D4AF37] font-semibold">sales</span>,{" "}
          <span className="text-[#3D9EFF] font-semibold">operations</span>, and{" "}
          <span className="text-[#10B981] font-semibold">delivery</span> with intelligence.
        </p>

        {/* Enhanced CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="group relative px-10 py-5 text-lg font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-black rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#D4AF37]/30 transform-gpu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <span className="relative z-10">Book a Discovery Call</span>
            <ArrowRight className="relative z-10 ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group px-8 py-5 text-lg font-medium border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-2xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-[#3D9EFF]/50"
          >
            <Play className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
            Watch Demo
          </Button>
        </div>

        {/* Enhanced Preview Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {[
            {
              title: "Sales Automation",
              desc: "AI agents that qualify, nurture, and close deals",
              color: "from-[#D4AF37] to-[#B8941F]",
              icon: "💼",
            },
            {
              title: "Operations Intelligence",
              desc: "Streamline workflows with autonomous systems",
              color: "from-[#3D9EFF] to-[#2B7ACC]",
              icon: "⚡",
            },
            {
              title: "Delivery Excellence",
              desc: "Scale customer success with AI precision",
              color: "from-[#10B981] to-[#059669]",
              icon: "🎯",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500`}
              />
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
