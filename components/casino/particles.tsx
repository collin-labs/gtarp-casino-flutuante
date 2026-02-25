"use client"

import { useState, useEffect } from "react"

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

function generateParticles() {
  return Array.from({ length: 28 }, (_, i) => ({
    id: i,
    left: seededRandom(i * 7 + 1) * 100,
    delay: seededRandom(i * 7 + 2) * 25,
    dur: 12 + seededRandom(i * 7 + 3) * 22,
    size: 1 + seededRandom(i * 7 + 4) * 2.5,
    op: 0.06 + seededRandom(i * 7 + 5) * 0.18,
    color: ["#FFD700", "#D4A017", "#00E676", "#00D4FF", "#fff"][
      Math.floor(seededRandom(i * 7 + 6) * 5)
    ],
    drift: -20 + seededRandom(i * 7 + 7) * 40,
  }))
}

const particles = generateParticles()

export function Particles() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="p-container" />

  return (
    <div className="p-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="p-dot"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            opacity: p.op,
            background: p.color,
            "--drift": `${p.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
