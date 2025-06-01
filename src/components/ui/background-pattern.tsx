"use client"

import { useEffect, useRef } from "react"

interface BackgroundPatternProps {
  variant: "light" | "dark"
}

export function BackgroundPattern({ variant }: BackgroundPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isDark = variant === "dark"
    const dotColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"
    const lineColor = isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)"
    const accentColor = isDark ? "rgba(212, 175, 55, 0.15)" : "rgba(212, 175, 55, 0.1)"

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Create dots
    const dotCount = Math.floor(width * height * 0.00005) // Adjust density
    const dots: { x: number; y: number; size: number }[] = []

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1 + 0.5,
      })
    }

    // Create accent dots (gold)
    const accentDotCount = Math.floor(dotCount * 0.1)
    const accentDots: { x: number; y: number; size: number }[] = []

    for (let i = 0; i < accentDotCount; i++) {
      accentDots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw connecting lines
      ctx.beginPath()
      ctx.strokeStyle = lineColor

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.globalAlpha = 1 - distance / 150
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw dots
      ctx.globalAlpha = 0.8
      ctx.fillStyle = dotColor

      for (const dot of dots) {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw accent dots
      ctx.fillStyle = accentColor

      for (const dot of accentDots) {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    draw()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      draw()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [variant])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
}
