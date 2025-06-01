"use client"

import { useState, useEffect } from "react"
import { Button } from "@/src/components/ui/button"
import { ArrowRight } from "lucide-react"

export function RefinedHero() {
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
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtle Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span className="text-xs font-medium text-white/80 tracking-wide">Elite AI Solutions</span>
        </div>

        {/* Refined Main Headline */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Custom AI Agents That <span className="font-medium text-[#D4AF37]">{rotatingTexts[textIndex]}</span> Your
          Business
        </h1>

        {/* Refined Subheadline */}
        <p
          className={`text-base md:text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          For elite businesses ready to scale sales, operations, and delivery with intelligence.
        </p>

        {/* Refined CTA Button */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="group px-8 py-6 text-sm font-medium bg-white hover:bg-white text-black rounded-full transition-all duration-300 hover:shadow-lg"
          >
            Book a Discovery Call
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
