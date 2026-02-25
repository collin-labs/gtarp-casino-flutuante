"use client"

import { useState } from "react"
import type { Game } from "@/lib/casino-data"
import Image from "next/image"
import { Badge } from "./badge"

interface GameCardProps {
  game: Game
  size?: "normal" | "large" | "huge"
  index?: number
  onPlay?: (game: Game) => void
}

export function GameCard({ game, size = "normal", index = 0, onPlay }: GameCardProps) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const isFeatured = game.featured

  return (
    <div
      className={`g-card ${size} ${isFeatured ? "featured" : ""} ${pressed ? "pressed" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => { setPressed(false); onPlay?.(game) }}
      style={{
        "--c1": game.colors[0],
        "--c2": game.colors[1],
        animationDelay: `${index * 70}ms`,
        transform: hovered ? `translateY(-${isFeatured ? 6 : 4}px) scale(1.03)` : "translateY(0) scale(1)",
      } as React.CSSProperties}
    >
      {/* Gold metallic border frame */}
      <div className="card-gold-frame" />
      {/* Animated shimmer sweep on the border */}
      <div className="card-border-shimmer" />

      {isFeatured && <div className="card-shimmer" />}

      {game.badge && (
        <div className="card-badge-pos">
          <Badge text={game.badge} color={game.badgeColor || "#fff"} />
        </div>
      )}

      {/* Image area - dominates the card */}
      <div className="card-image-wrap">
        <div
          className="card-img-glow"
          style={{
            background: `radial-gradient(circle,${game.colors[0]}25 0%,${game.colors[1]}10 50%,transparent 70%)`,
            transform: hovered ? "scale(1.3)" : "scale(1)",
            opacity: hovered ? 1 : 0.5,
          }}
        />
        <div
          className="card-img-container"
          style={{
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        >
          <Image
            src={game.image}
            alt={game.name}
            fill
            sizes={size === "huge" ? "400px" : size === "large" ? "300px" : "200px"}
            className="card-game-image"
            priority={index < 6}
          />
        </div>
      </div>

      {/* Game name + subtitle at bottom with gradient overlay */}
      <div className="card-text-overlay">
        <div className="card-name-big">{game.name}</div>
        {size !== "normal" && <div className="card-sub-text">{game.sub}</div>}
        {game.players && (
          <div className={`card-players ${hovered ? "show" : ""}`}>
            <span className="live-d" />
            {game.players.toLocaleString()} jogando
          </div>
        )}
      </div>

      {/* Bottom glow line - neon accent */}
      <div
        className="card-btm-glow"
        style={{
          background: `linear-gradient(90deg,transparent,${game.colors[0]}${hovered ? "cc" : "55"},transparent)`,
          boxShadow: hovered ? `0 2px 30px ${game.colors[0]}66` : "none",
        }}
      />
      {hovered && <div className="card-sweep" style={{ "--sw": game.colors[0] } as React.CSSProperties} />}
    </div>
  )
}
