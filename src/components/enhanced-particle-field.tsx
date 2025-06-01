"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

export function EnhancedParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const connectionRef = useRef<THREE.LineSegments>(null!)

  const { positions, connections } = useMemo(() => {
    const particleCount = 1500
    const positions = new Float32Array(particleCount * 3)
    const connectionPositions: number[] = []

    const particles: { x: number; y: number; z: number }[] = []

    // Generate particles
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 25
      const y = (Math.random() - 0.5) * 25
      const z = (Math.random() - 0.5) * 25

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      particles.push({ x, y, z })
    }

    // Generate connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const distance = Math.sqrt(
          Math.pow(particles[i].x - particles[j].x, 2) +
            Math.pow(particles[i].y - particles[j].y, 2) +
            Math.pow(particles[i].z - particles[j].z, 2),
        )

        if (distance < 3 && Math.random() > 0.95) {
          connectionPositions.push(
            particles[i].x,
            particles[i].y,
            particles[i].z,
            particles[j].x,
            particles[j].y,
            particles[j].z,
          )
        }
      }
    }

    return {
      positions,
      connections: new Float32Array(connectionPositions),
    }
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      ref.current.rotation.y = state.clock.elapsedTime * 0.05
      ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.1) * 0.05
    }

    if (connectionRef.current) {
      connectionRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.05
      connectionRef.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <>
      {/* Main particles */}
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3D9EFF"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>

      {/* Connection lines */}
      <lineSegments ref={connectionRef}>
        <bufferGeometry>
          <bufferAttribute
            args={[connections, 3]}
            attach="attributes-position"
            array={connections}
            count={connections.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#D4AF37" transparent opacity={0.1} />
      </lineSegments>

      {/* Ambient light */}
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#D4AF37" />
      <pointLight position={[-10, -10, -10]} intensity={0.2} color="#3D9EFF" />
    </>
  )
}
