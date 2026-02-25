"use client"

import { useEffect, useRef } from "react"

export function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const particles: Particle[] = []
    const PARTICLE_COUNT = 60

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener("resize", resize)

    interface Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      opacitySpeed: number
      color: string
    }

    const goldColors = [
      "rgba(245, 215, 122,",
      "rgba(200, 164, 78,",
      "rgba(139, 111, 46,",
      "rgba(0, 230, 118,",
    ]

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * (canvas.width || 800),
        y: Math.random() * (canvas.height || 600),
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3 - 0.15,
        opacity: Math.random(),
        opacitySpeed: Math.random() * 0.015 + 0.005,
        color: goldColors[Math.random() > 0.15 ? Math.floor(Math.random() * 3) : 3],
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.speedX
        p.y += p.speedY
        p.opacity += p.opacitySpeed

        if (p.opacity >= 1 || p.opacity <= 0) {
          p.opacitySpeed *= -1
        }

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color} ${Math.max(0, Math.min(1, p.opacity))})`
        ctx.fill()

        // Glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
        gradient.addColorStop(0, `${p.color} ${Math.max(0, Math.min(1, p.opacity * 0.3))})`)
        gradient.addColorStop(1, `${p.color} 0)`)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  )
}
