"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import type { Game } from "@/lib/casino-data"
import { HERO_SLIDES } from "@/lib/casino-data"
import Image from "next/image"
import { Badge } from "./badge"

interface HeroCarouselProps {
  onPlay?: (game: Game) => void
}

export function HeroCarousel({ onPlay }: HeroCarouselProps) {
  const [cur, setCur] = useState(0)
  const [trans, setTrans] = useState(false)
  const [glitch, setGlitch] = useState(false)
  const paused = useRef(false)

  const goTo = useCallback(
    (i: number) => {
      if (trans) return
      setTrans(true)
      setGlitch(true)
      setTimeout(() => {
        setCur(i)
        setGlitch(false)
      }, 350)
      setTimeout(() => setTrans(false), 700)
    },
    [trans]
  )

  useEffect(() => {
    const iv = setInterval(() => {
      if (!paused.current) goTo((cur + 1) % HERO_SLIDES.length)
    }, 8000)
    return () => clearInterval(iv)
  }, [cur, goTo])

  const sl = HERO_SLIDES[cur]

  return (
    <div
      className="hero"
      onMouseEnter={() => { paused.current = true }}
      onMouseLeave={() => { paused.current = false }}
    >
      {/* Gold hero frame */}
      <div className="hero-gold-frame" />
      <div className="hero-border-shimmer" />

      {glitch && <div className="hero-glitch" />}
      <div className={`hero-inner ${glitch ? "hero-out" : "hero-in"}`}>
        <div className="hero-left">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            {sl.badge && <Badge text={sl.badge} color={sl.badgeColor || "#fff"} />}
          </div>
          <h2 className="hero-title">{sl.name}</h2>
          <p className="hero-desc">{sl.desc}</p>
          <div className="hero-stat">
            <span className="hero-stat-dot" />
            <span>{sl.stat}</span>
          </div>
          <button className="hero-btn" onClick={() => onPlay?.(sl)}>
            {"JOGAR AGORA \u25B6"}
          </button>
          <div className="hero-dots">
            {HERO_SLIDES.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className={`hero-dot ${cur === i ? "active" : ""}`} />
            ))}
          </div>
        </div>
        <div className="hero-right">
          <div
            className="hero-glow"
            style={{
              background: `radial-gradient(circle,${sl.colors[0]}22 0%,${sl.colors[1]}0a 40%,transparent 70%)`,
            }}
          />
          <div className="hero-image-wrap">
            <Image
              src={sl.image}
              alt={sl.name}
              fill
              sizes="500px"
              className="hero-game-image"
              priority
            />
          </div>
        </div>
      </div>
      <div
        className="hero-line"
        style={{
          background: `linear-gradient(90deg,transparent,${sl.colors[0]}44,#00D4FF33,transparent)`,
        }}
      />
    </div>
  )
}
