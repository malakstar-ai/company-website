"use client"

import { useEffect, useState } from "react"

export function FloatingOrbs() {
  const [orbs, setOrbs] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      color: string
      duration: number
      delay: number
    }>
  >([])

  useEffect(() => {
    const newOrbs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 200 + 100,
      color: Math.random() > 0.5 ? "gold" : "blue",
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }))
    setOrbs(newOrbs)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`absolute rounded-full blur-3xl opacity-10 animate-float-slow ${
            orb.color === "gold" ? "bg-gold" : "bg-blue-500"
          }`}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
