"use client"

import { useEffect, useState } from "react"
import { Sparkles, Zap, Brain, Target, Code, TrendingUp } from "lucide-react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const elements = [
    { icon: <Sparkles className="w-6 h-6" />, color: "#D4AF37", delay: 0 },
    { icon: <Zap className="w-5 h-5" />, color: "#3D9EFF", delay: 1000 },
    { icon: <Brain className="w-7 h-7" />, color: "#10B981", delay: 2000 },
    { icon: <Target className="w-5 h-5" />, color: "#8B5CF6", delay: 3000 },
    { icon: <Code className="w-6 h-6" />, color: "#F59E0B", delay: 4000 },
    { icon: <TrendingUp className="w-5 h-5" />, color: "#EF4444", delay: 5000 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {elements.map((element, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + (index % 3) * 30}%`,
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: `${element.delay}ms`,
            animationDuration: `${3000 + index * 500}ms`,
          }}
        >
          <div
            className="p-3 rounded-full backdrop-blur-sm border opacity-20 hover:opacity-60 transition-all duration-500"
            style={{
              backgroundColor: `${element.color}10`,
              borderColor: `${element.color}30`,
              color: element.color,
            }}
          >
            {element.icon}
          </div>
        </div>
      ))}
    </div>
  )
}
