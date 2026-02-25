"use client"

import { useRef, useState } from "react"
import Image from "next/image"

interface GameCardProps {
  name: string
  image: string
  index: number
}

export function GameCard({ name, image, index }: GameCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePos({ x, y })
  }

  const rotateX = isHovered ? (mousePos.y - 0.5) * -25 : 0
  const rotateY = isHovered ? (mousePos.x - 0.5) * 25 : 0
  const glowX = mousePos.x * 100
  const glowY = mousePos.y * 100

  return (
    <div
      className="group"
      style={{
        perspective: "1000px",
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setMousePos({ x: 0.5, y: 0.5 })
        }}
        className="relative cursor-pointer overflow-hidden rounded-xl"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? "scale(1.08) translateY(-8px)" : "scale(1)"}`,
          transformStyle: "preserve-3d",
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        {/* Outer border gradient */}
        <div
          className="rounded-xl p-[1.5px]"
          style={{
            background: isHovered
              ? "linear-gradient(135deg, var(--gold-light), var(--emerald), var(--gold-light), var(--emerald))"
              : "linear-gradient(180deg, var(--gold-dark), rgba(42,32,20,0.6))",
            boxShadow: isHovered
              ? "0 0 25px rgba(0,230,118,0.25), 0 8px 32px rgba(0,0,0,0.5)"
              : "0 2px 10px rgba(0,0,0,0.3)",
            transition: "box-shadow 0.5s ease, background 0.5s ease",
          }}
        >
          {/* Dark gap for double border */}
          <div className="rounded-[10px] bg-[#0c0a06] p-[1px]">
            {/* Inner border */}
            <div
              className="rounded-[9px] p-[1px]"
              style={{
                background: isHovered
                  ? "linear-gradient(135deg, var(--emerald), var(--gold), var(--emerald))"
                  : "linear-gradient(180deg, rgba(139,111,46,0.4), rgba(42,32,20,0.3))",
                transition: "background 0.5s ease",
              }}
            >
              <div
                className="relative overflow-hidden rounded-lg"
                style={{
                  background:
                    "linear-gradient(180deg, #151010 0%, #0c0a06 100%)",
                }}
              >
                {/* Mouse follow glow */}
                {isHovered && (
                  <div
                    className="pointer-events-none absolute inset-0 z-10 opacity-70 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0,230,118,0.3) 0%, transparent 50%)`,
                    }}
                  />
                )}

                {/* Image area */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      isHovered
                        ? "scale-115 brightness-125 saturate-110"
                        : "scale-100 brightness-85"
                    }`}
                  />

                  {/* Bottom gradient */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-3/5"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 50%, transparent 100%)",
                    }}
                  />

                  {/* Green bottom glow */}
                  <div
                    className={`absolute inset-x-0 -bottom-2 h-20 transition-all duration-500 ${
                      isHovered ? "opacity-90" : "opacity-25"
                    }`}
                    style={{
                      background:
                        "radial-gradient(ellipse at center bottom, rgba(0,230,118,0.35) 0%, transparent 70%)",
                    }}
                  />

                  {/* Shine sweep */}
                  <div
                    className={`pointer-events-none absolute inset-0 transition-all duration-700 ${
                      isHovered ? "translate-x-[200%]" : "-translate-x-[100%]"
                    }`}
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Label - bigger and more stylized */}
                <div className="relative px-2 pb-3 pt-2">
                  <h3
                    className={`text-balance text-center font-serif text-sm font-bold tracking-[0.15em] transition-all duration-500 md:text-base ${
                      isHovered ? "" : "text-gold-gradient"
                    }`}
                    style={
                      isHovered
                        ? {
                            background:
                              "linear-gradient(90deg, #8b6f2e 0%, #f5d77a 25%, #c8a44e 50%, #f5d77a 75%, #8b6f2e 100%)",
                            backgroundSize: "200% auto",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            animation: "gold-shimmer 1.5s linear infinite",
                            textShadow: "none",
                          }
                        : undefined
                    }
                  >
                    {name}
                  </h3>
                  {/* Subtle decorative line under name */}
                  <div
                    className={`mx-auto mt-1 h-[1px] transition-all duration-500 ${
                      isHovered ? "w-4/5 opacity-100" : "w-1/3 opacity-40"
                    }`}
                    style={{
                      background: isHovered
                        ? "linear-gradient(90deg, transparent, var(--emerald), transparent)"
                        : "linear-gradient(90deg, transparent, var(--gold-dark), transparent)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outer hover glow */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-2 -z-10 rounded-xl"
            style={{
              background:
                "radial-gradient(ellipse, rgba(0,230,118,0.15) 0%, transparent 70%)",
              filter: "blur(12px)",
            }}
          />
        )}
      </div>
    </div>
  )
}
