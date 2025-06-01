"use client"

import { useEffect, useState } from "react"

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Layer 1 - Slowest */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(61, 158, 255, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Layer 2 - Medium */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          backgroundImage: `radial-gradient(circle at 60% 40%, rgba(212, 175, 55, 0.05) 0%, transparent 40%)`,
        }}
      />

      {/* Layer 3 - Fastest */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.02) 50%, transparent 70%)`,
        }}
      />
    </div>
  )
}
