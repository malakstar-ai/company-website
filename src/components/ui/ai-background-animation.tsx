"use client"

import { useEffect, useRef, useState } from "react"

export function AIBackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [taskCards, setTaskCards] = useState<
    Array<{
      id: number
      x: number
      y: number
      task: string
      progress: number
      completed: boolean
      opacity: number
    }>
  >([])

  // Data streams
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Data stream particles
    const streams: Array<{
      x: number
      y: number
      speed: number
      opacity: number
      char: string
    }> = []

    // Neural network nodes
    const nodes: Array<{
      x: number
      y: number
      connections: number[]
      pulse: number
      pulseDirection: number
    }> = []

    // Initialize data streams
    const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]();=><"
    for (let i = 0; i < 50; i++) {
      streams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        char: characters[Math.floor(Math.random() * characters.length)],
      })
    }

    // Initialize neural nodes
    for (let i = 0; i < 15; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
        pulseDirection: 1,
      })
    }

    // Create connections between nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
          if (distance < 200 && Math.random() > 0.7) {
            node.connections.push(j)
          }
        }
      })
    })

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw data streams
      ctx.font = "12px monospace"
      streams.forEach((stream) => {
        ctx.fillStyle = `rgba(212, 175, 55, ${stream.opacity})`
        ctx.fillText(stream.char, stream.x, stream.y)

        // Move stream
        stream.y += stream.speed
        if (stream.y > canvas.height) {
          stream.y = -20
          stream.x = Math.random() * canvas.width
          stream.char = characters[Math.floor(Math.random() * characters.length)]
        }

        // Fade effect
        stream.opacity = Math.sin(stream.y * 0.01) * 0.3 + 0.1
      })

      // Draw neural network connections
      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex]
          if (connectedNode) {
            const pulseIntensity = (Math.sin(node.pulse) + 1) / 2
            ctx.strokeStyle = `rgba(61, 158, 255, ${pulseIntensity * 0.3})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(connectedNode.x, connectedNode.y)
            ctx.stroke()
          }
        })

        // Draw node
        const pulseIntensity = (Math.sin(node.pulse) + 1) / 2
        ctx.fillStyle = `rgba(61, 158, 255, ${pulseIntensity * 0.6 + 0.2})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3 + pulseIntensity * 2, 0, Math.PI * 2)
        ctx.fill()

        // Update pulse
        node.pulse += 0.05 * node.pulseDirection
        if (node.pulse > Math.PI * 2) node.pulse = 0
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Task cards animation - More contained and professional
  useEffect(() => {
    const tasks = ["Processing leads", "Analyzing data", "Optimizing workflow", "Learning patterns", "Automating tasks"]

    const interval = setInterval(() => {
      // Define safe zones (edges only, avoid center)
      const zones = [
        { x: 50, y: 100, width: 200, height: 150 }, // Top left
        { x: window.innerWidth - 250, y: 100, width: 200, height: 150 }, // Top right
        { x: 50, y: window.innerHeight - 250, width: 200, height: 150 }, // Bottom left
        { x: window.innerWidth - 250, y: window.innerHeight - 250, width: 200, height: 150 }, // Bottom right
      ]

      const zone = zones[Math.floor(Math.random() * zones.length)]

      const newTask = {
        id: Date.now(),
        x: zone.x + Math.random() * (zone.width - 180),
        y: zone.y + Math.random() * (zone.height - 60),
        task: tasks[Math.floor(Math.random() * tasks.length)],
        progress: 0,
        completed: false,
        opacity: 0,
      }

      setTaskCards((prev) => [...prev, newTask])

      // Animate task progress
      let progress = 0
      const progressInterval = setInterval(() => {
        progress += Math.random() * 20 + 10
        if (progress >= 100) {
          progress = 100
          setTaskCards((prev) =>
            prev.map((card) => (card.id === newTask.id ? { ...card, progress: 100, completed: true } : card)),
          )
          clearInterval(progressInterval)

          // Remove task after completion
          setTimeout(() => {
            setTaskCards((prev) => prev.filter((card) => card.id !== newTask.id))
          }, 1500)
        } else {
          setTaskCards((prev) =>
            prev.map((card) =>
              card.id === newTask.id ? { ...card, progress, opacity: Math.min((progress / 100) * 0.4, 0.4) } : card,
            ),
          )
        }
      }, 300)
    }, 6000) // Less frequent

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Canvas for data streams and neural network */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" style={{ mixBlendMode: "screen" }} />

      {/* Floating task cards - More professional and contained */}
      {taskCards.map((card) => (
        <div
          key={card.id}
          className="absolute transition-all duration-700 ease-out z-0"
          style={{
            left: card.x,
            top: card.y,
            opacity: card.opacity,
            transform: `translateY(${card.completed ? -10 : 0}px) scale(${card.completed ? 0.95 : 1})`,
          }}
        >
          <div className="bg-white/3 backdrop-blur-sm border border-white/5 rounded-md px-3 py-2 min-w-[160px]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gold/60 rounded-full" />
              <span className="text-white/50 text-xs font-light">{card.task}</span>
              {card.completed && <div className="w-1.5 h-1.5 bg-green-400/60 rounded-full ml-auto" />}
            </div>

            {!card.completed && (
              <div className="w-full bg-white/5 rounded-full h-0.5 mt-2">
                <div
                  className="bg-gold/40 h-0.5 rounded-full transition-all duration-300"
                  style={{ width: `${card.progress}%` }}
                />
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Processing indicators - More subtle */}
      <div className="absolute top-20 right-20 z-0">
        <div className="flex items-center gap-2 bg-white/2 backdrop-blur-sm border border-white/5 rounded-md px-3 py-2">
          <div className="w-1 h-1 bg-gold/40 rounded-full animate-pulse" />
          <span className="text-white/40 text-xs font-light">Processing</span>
        </div>
      </div>

      <div className="absolute bottom-20 left-20 z-0">
        <div className="flex items-center gap-2 bg-white/2 backdrop-blur-sm border border-white/5 rounded-md px-3 py-2">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-gold/30 rounded animate-pulse" style={{ animationDelay: "0ms" }} />
            <div className="w-0.5 h-3 bg-gold/30 rounded animate-pulse" style={{ animationDelay: "200ms" }} />
            <div className="w-0.5 h-3 bg-gold/30 rounded animate-pulse" style={{ animationDelay: "400ms" }} />
          </div>
          <span className="text-white/40 text-xs font-light">Analyzing</span>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}
