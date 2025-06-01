"use client"

import { useEffect, useRef } from "react"

export function ClientLogoStrip() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroll = scrollRef.current
    const content = contentRef.current
    if (!scroll || !content) return

    // Clone the content for seamless scrolling
    scroll.appendChild(content.cloneNode(true))

    let animationId: number
    let scrollPos = 0

    const animate = () => {
      scrollPos += 0.5
      if (scrollPos >= content.offsetWidth) {
        scrollPos = 0
      }
      if (scroll) scroll.style.transform = `translateX(-${scrollPos}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  const logos = [
    { name: "Goldman Sachs", initial: "GS" },
    { name: "Morgan Stanley", initial: "MS" },
    { name: "BlackRock", initial: "BR" },
    { name: "McKinsey", initial: "MC" },
    { name: "Boston Consulting", initial: "BCG" },
    { name: "JP Morgan", initial: "JPM" },
    { name: "Deloitte", initial: "DL" },
  ]

  return (
    <section className="py-16 bg-black border-t border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-white/40 text-sm uppercase tracking-widest font-light mb-8">
          Trusted by industry leaders
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div ref={scrollRef} className="whitespace-nowrap">
          <div ref={contentRef} className="inline-flex gap-16 px-8">
            {logos.map((logo, index) => (
              <div key={index} className="inline-flex items-center">
                <div className="flex items-center justify-center h-12 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-gold font-medium">{logo.initial}</span>
                    </div>
                    <span className="text-white/70 font-light">{logo.name}</span>
                  </div>
                </div>
                <span className="mx-8 text-white/20">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 mt-8">
        <p className="text-center text-white/60 font-light italic">
          "Transforming how elite businesses operate through intelligent automation"
        </p>
      </div>
    </section>
  )
}
