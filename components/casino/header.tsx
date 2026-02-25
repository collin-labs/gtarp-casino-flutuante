"use client"

import { useState } from "react"

export function CasinoHeader() {
  const [jackpot] = useState(75823.94)

  return (
    <header className="relative z-30 w-full">
      <div className="relative flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Crown emblem */}
          <div className="relative flex h-8 w-8 items-center justify-center">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(200,164,78,0.2) 0%, transparent 70%)",
                border: "1px solid rgba(200,164,78,0.3)",
              }}
            />
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M2 17L5 7L9 12L12 4L15 12L19 7L22 17H2Z"
                fill="url(#crownGrad)"
                stroke="var(--gold)"
                strokeWidth="0.5"
              />
              <defs>
                <linearGradient id="crownGrad" x1="12" y1="4" x2="12" y2="17">
                  <stop offset="0%" stopColor="var(--gold-light)" />
                  <stop offset="100%" stopColor="var(--gold-dark)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-gold-shine font-serif text-sm font-bold leading-none tracking-widest md:text-base">
              BLACKOUT
            </span>
            <span className="text-[8px] font-semibold tracking-[0.35em] text-[var(--gold-dark)]">
              CASINO
            </span>
          </div>
        </div>

        {/* Jackpot - center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <span className="text-[8px] font-semibold tracking-[0.15em] text-[var(--gold-dark)]">
              GRANDE JACKPOT
            </span>
            <div
              className="mt-0.5 rounded-md border border-[var(--gold-dark)]/50 px-4 py-0.5"
              style={{
                background:
                  "linear-gradient(180deg, rgba(200,164,78,0.06) 0%, rgba(10,10,10,0.9) 100%)",
              }}
            >
              <span
                className="font-serif text-sm font-bold text-[var(--gold-light)]"
                style={{ animation: "jackpot-pulse 2s ease-in-out infinite" }}
              >
                R${jackpot.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        {/* Balance - right */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[8px] tracking-wider text-[var(--gold-dark)]">Saldo</span>
            <span className="font-serif text-sm font-bold text-[var(--gold-light)]">
              R$ 509,25
            </span>
          </div>
        </div>
      </div>

      {/* Gold separator line */}
      <div
        className="h-[1px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--gold-dark) 20%, var(--gold) 50%, var(--gold-dark) 80%, transparent 100%)",
        }}
      />
    </header>
  )
}
