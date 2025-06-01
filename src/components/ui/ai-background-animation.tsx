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

  // Enhanced canvas animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Data stream particles with enhanced properties
    const streams: Array<{
      x: number
      y: number
      speed: number
      opacity: number
      char: string
      size: number
      drift: number
    }> = []

    // Enhanced neural network nodes
    const nodes: Array<{
      x: number
      y: number
      connections: number[]
      pulse: number
      pulseDirection: number
      energy: number
      radius: number
    }> = []

    // Floating particles for ambient effect
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      opacity: number
      size: number
      color: string
      life: number
      maxLife: number
    }> = []

    // Initialize enhanced data streams
    const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]();=><"
    for (let i = 0; i < 60; i++) {
      streams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        char: characters[Math.floor(Math.random() * characters.length)],
        size: Math.random() * 8 + 10,
        drift: Math.random() * 0.5 - 0.25,
      })
    }

    // Initialize enhanced neural nodes
    for (let i = 0; i < 20; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
        pulseDirection: 1,
        energy: Math.random() * 0.8 + 0.2,
        radius: Math.random() * 3 + 2,
      })
    }

    // Initialize floating particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.7 ? "212,175,55" : "61,158,255", // Gold or Blue
        life: 0,
        maxLife: Math.random() * 1000 + 500,
      })
    }

    // Create dynamic connections between nodes
    const updateConnections = () => {
      nodes.forEach((node, i) => {
        node.connections = []
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
            if (distance < 250 && Math.random() > 0.6) {
              node.connections.push(j)
            }
          }
        })
      })
    }

    updateConnections()

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw enhanced data streams
      streams.forEach((stream) => {
        ctx.font = `${stream.size}px monospace`
        const pulseOpacity = stream.opacity * (0.8 + 0.2 * Math.sin(time * 2 + stream.x * 0.01))
        ctx.fillStyle = `rgba(212, 175, 55, ${pulseOpacity})`
        ctx.fillText(stream.char, stream.x, stream.y)

        // Enhanced movement with drift
        stream.y += stream.speed
        stream.x += stream.drift
        
        if (stream.y > canvas.height + 50) {
          stream.y = -50
          stream.x = Math.random() * canvas.width
          stream.char = characters[Math.floor(Math.random() * characters.length)]
          stream.size = Math.random() * 8 + 10
        }

        // Keep streams within bounds
        if (stream.x < -50 || stream.x > canvas.width + 50) {
          stream.x = Math.random() * canvas.width
        }

        // Enhanced fade effect
        stream.opacity = Math.sin(stream.y * 0.008) * 0.3 + 0.15
      })

      // Draw floating particles
      particles.forEach((particle) => {
        particle.life += 1
        const lifeRatio = particle.life / particle.maxLife
        const fadeOpacity = particle.opacity * Math.sin(lifeRatio * Math.PI)
        
        ctx.fillStyle = `rgba(${particle.color}, ${fadeOpacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Move particles
        particle.x += particle.vx
        particle.y += particle.vy

        // Reset particles when they fade out
        if (particle.life >= particle.maxLife) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = 0
          particle.maxLife = Math.random() * 1000 + 500
          particle.color = Math.random() > 0.7 ? "212,175,55" : "61,158,255"
        }

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      // Draw enhanced neural network
      nodes.forEach((node, i) => {
        // Update node energy and movement
        node.energy = 0.5 + 0.3 * Math.sin(time + i * 0.5)
        
        // Subtle node movement
        node.x += Math.sin(time * 0.3 + i * 0.1) * 0.1
        node.y += Math.cos(time * 0.4 + i * 0.15) * 0.1

        // Draw connections with energy flow
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex]
          if (connectedNode) {
            const avgEnergy = (node.energy + connectedNode.energy) / 2
            const pulseIntensity = (Math.sin(node.pulse) + 1) / 2
            const connectionOpacity = avgEnergy * pulseIntensity * 0.4
            
            // Create gradient for connections
            const gradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y)
            gradient.addColorStop(0, `rgba(61, 158, 255, ${connectionOpacity})`)
            gradient.addColorStop(0.5, `rgba(212, 175, 55, ${connectionOpacity * 0.8})`)
            gradient.addColorStop(1, `rgba(61, 158, 255, ${connectionOpacity})`)
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1 + avgEnergy
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(connectedNode.x, connectedNode.y)
            ctx.stroke()
          }
        })

        // Draw enhanced nodes with glow effect
        const pulseIntensity = (Math.sin(node.pulse) + 1) / 2
        const nodeOpacity = node.energy * pulseIntensity * 0.8 + 0.2
        
        // Outer glow
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3)
        glowGradient.addColorStop(0, `rgba(61, 158, 255, ${nodeOpacity * 0.3})`)
        glowGradient.addColorStop(1, `rgba(61, 158, 255, 0)`)
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2)
        ctx.fill()

        // Inner node
        ctx.fillStyle = `rgba(61, 158, 255, ${nodeOpacity})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius + pulseIntensity * 2, 0, Math.PI * 2)
        ctx.fill()

        // Core
        ctx.fillStyle = `rgba(255, 255, 255, ${nodeOpacity * 0.8})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 0.5, 0, Math.PI * 2)
        ctx.fill()

        // Update pulse
        node.pulse += 0.03 * node.pulseDirection
        if (node.pulse > Math.PI * 2) node.pulse = 0
      })

      // Periodically update connections for dynamic network
      if (Math.floor(time * 10) % 500 === 0) {
        updateConnections()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Redistribute particles on resize
      particles.forEach(particle => {
        if (particle.x > canvas.width) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = canvas.height
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Enhanced task cards animation
  useEffect(() => {
    const tasks = [
      "Processing customer data", 
      "Analyzing sales patterns", 
      "Optimizing workflows", 
      "Learning user behavior", 
      "Automating responses",
      "Generating insights",
      "Training models",
      "Monitoring performance"
    ]

    const interval = setInterval(() => {
      // More dynamic zone placement
      const zones = [
        { x: 30, y: 80, width: 220, height: 120 }, // Top left
        { x: window.innerWidth - 270, y: 80, width: 220, height: 120 }, // Top right
        { x: 30, y: window.innerHeight - 220, width: 220, height: 120 }, // Bottom left
        { x: window.innerWidth - 270, y: window.innerHeight - 220, width: 220, height: 120 }, // Bottom right
        // Add middle zones for larger screens
        ...(window.innerWidth > 1200 ? [
          { x: window.innerWidth / 2 - 110, y: 60, width: 220, height: 100 }, // Top center
          { x: window.innerWidth / 2 - 110, y: window.innerHeight - 180, width: 220, height: 100 }, // Bottom center
        ] : [])
      ]

      const zone = zones[Math.floor(Math.random() * zones.length)]

      const newTask = {
        id: Date.now() + Math.random(),
        x: zone.x + Math.random() * (zone.width - 180),
        y: zone.y + Math.random() * (zone.height - 60),
        task: tasks[Math.floor(Math.random() * tasks.length)],
        progress: 0,
        completed: false,
        opacity: 0,
      }

      setTaskCards((prev) => [...prev.slice(-2), newTask]) // Limit to 3 cards max

      // Animate task progress with more realistic timing
      let progress = 0
      const progressInterval = setInterval(() => {
        progress += Math.random() * 15 + 8
        if (progress >= 100) {
          progress = 100
          setTaskCards((prev) =>
            prev.map((card) => (card.id === newTask.id ? { ...card, progress: 100, completed: true } : card)),
          )
          clearInterval(progressInterval)

          // Remove task after completion
          setTimeout(() => {
            setTaskCards((prev) => prev.filter((card) => card.id !== newTask.id))
          }, 2000)
        } else {
          setTaskCards((prev) =>
            prev.map((card) =>
              card.id === newTask.id ? { ...card, progress, opacity: Math.min((progress / 100) * 0.5, 0.5) } : card,
            ),
          )
        }
      }, 200)
    }, 5000) // Slightly more frequent

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Enhanced canvas with better blending */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-70" 
        style={{ mixBlendMode: "screen" }} 
      />

      {/* Floating task cards with enhanced styling */}
      {taskCards.map((card) => (
        <div
          key={card.id}
          className="absolute transition-all duration-1000 ease-out z-10"
          style={{
            left: card.x,
            top: card.y,
            opacity: card.opacity,
            transform: `translateY(${card.completed ? -15 : 0}px) scale(${card.completed ? 0.9 : 1})`,
          }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 min-w-[180px] shadow-lg">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${card.completed ? 'bg-green-400/80 animate-pulse' : 'bg-gold/60'}`} />
              <span className="text-white/60 text-xs font-medium">{card.task}</span>
              {card.completed && (
                <div className="w-2 h-2 bg-green-400/80 rounded-full ml-auto animate-pulse" />
              )}
            </div>

            {!card.completed && (
              <div className="w-full bg-white/10 rounded-full h-1 mt-3">
                <div
                  className="bg-gradient-to-r from-gold/60 to-gold/80 h-1 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${card.progress}%` }}
                />
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Enhanced processing indicators */}
      <div className="absolute top-24 right-24 z-10">
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 shadow-lg">
          <div className="w-2 h-2 bg-gold/60 rounded-full animate-pulse" />
          <span className="text-white/50 text-xs font-medium">Neural processing</span>
        </div>
      </div>

      <div className="absolute bottom-24 left-24 z-10">
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 shadow-lg">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-blue-400/60 rounded animate-pulse" style={{ animationDelay: "0ms" }} />
            <div className="w-1 h-4 bg-blue-400/60 rounded animate-pulse" style={{ animationDelay: "300ms" }} />
            <div className="w-1 h-4 bg-blue-400/60 rounded animate-pulse" style={{ animationDelay: "600ms" }} />
          </div>
          <span className="text-white/50 text-xs font-medium">Data analysis</span>
        </div>
      </div>

      {/* Subtle animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "pulse 8s ease-in-out infinite",
        }}
      />

      {/* Ambient glow gradients */}
      <div 
        className="absolute inset-0 opacity-10 z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(61, 158, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 60% 40%, rgba(212, 175, 55, 0.05) 0%, transparent 60%)
          `
        }}
      />
    </div>
  )
}
