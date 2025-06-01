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
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-widest font-light mb-8">
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
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-800 font-medium">{logo.initial}</span>
                    </div>
                    <span className="text-gray-800 font-light">{logo.name}</span>
                  </div>
                </div>
                <span className="mx-8 text-gray-300">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 mt-8">
        <p className="text-center text-gray-800 font-light italic">
          "Transforming how elite businesses operate through intelligent automation"
        </p>
      </div>
    </section>
  )
}
