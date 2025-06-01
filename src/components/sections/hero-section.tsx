"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/src/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AIBackgroundAnimation } from "@/src/components/ui/ai-background-animation"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(-1)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)
  const measureRef = useRef<HTMLSpanElement>(null)
  
  // Pre-calculated widths for all texts
  const [textWidths, setTextWidths] = useState<number[]>([])
  const [dynamicWidth, setDynamicWidth] = useState("auto")

  const rotatingTexts = ["Increase Sales", "Boost Marketing", "Optimize Operations", "Scale Delivery"]

  // Pre-calculate all text widths on mount for smoother animations
  useEffect(() => {
    if (measureRef.current) {
      const widths: number[] = []
      const measureElement = measureRef.current
      
      rotatingTexts.forEach((text) => {
        measureElement.textContent = text
        widths.push(measureElement.offsetWidth)
      })
      
      setTextWidths(widths)
      setDynamicWidth(`${widths[0]}px`) // Set initial width
    }
  }, [])

  // Update width when active index changes
  useEffect(() => {
    if (textWidths.length > 0) {
      setDynamicWidth(`${textWidths[activeIndex]}px`)
    }
  }, [activeIndex, textWidths])

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setPreviousIndex(activeIndex)
      setIsAnimating(true)

      // After animation completes, update the active index
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % rotatingTexts.length)
        setIsAnimating(false)
      }, 700) // Animation duration
    }, 3000) // Total duration per word

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
      {/* AI Background Animation */}
      <AIBackgroundAnimation />

      {/* Hidden element for measuring text widths */}
      <span
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none text-4xl md:text-5xl lg:text-6xl font-medium"
        style={{ top: "-9999px" }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-medium text-white/80 tracking-wide">Malak Star AI</span>
        </div>

        {/* Enhanced Text Animation */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Custom AI Agents That{" "}
          <span
            ref={containerRef}
            className="inline-block relative align-top transition-all duration-500 ease-in-out"
            style={{
              width: dynamicWidth,
              minHeight: "1em", // ensures height is there for absolute elements
              display: "inline-block",
            }}
          >
            {rotatingTexts.map((text, index) => (
              <span
                key={index}
                className={`absolute left-0 font-medium text-gold transition-all duration-700 ease-in-out ${
                  index === activeIndex && !isAnimating
                    ? "top-0 opacity-100"
                    : index === previousIndex && isAnimating
                    ? "-top-full opacity-0"
                    : index === activeIndex && isAnimating
                    ? "top-0 opacity-100"
                    : "top-full opacity-0"
                }`}
                style={{ whiteSpace: "nowrap" }} // prevents text wrapping
              >
                {text}
              </span>
            ))}
          </span>{" "}
        For Your Business
        </h1>

        {/* Subheadline */}
        <p
          className={`text-base md:text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We design high-performance, fully integrated AI systems tailored to your operations — from sales to service delivery. Built exclusively for forward-thinking B2B teams.
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#contact">
            <Button
              size="lg"
              className="group px-8 py-6 text-sm font-medium bg-gold hover:bg-gold/90 text-black rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:scale-105"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
