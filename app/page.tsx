"use client"

import { CasinoHeader } from "@/components/casino/header"
import { HeroCarousel } from "@/components/casino/hero-carousel"
import { GamesCarousel } from "@/components/casino/games-carousel"
import { BottomNav } from "@/components/casino/bottom-nav"
import { GoldParticles } from "@/components/casino/gold-particles"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      {/* Background image */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/fundo-casino.png')" }}
        aria-hidden="true"
      />

      {/* Dark vignette overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center 30%, transparent 0%, rgba(10,10,10,0.7) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      <GoldParticles />
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-transparent p-4">

      {/* Main floating panel */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-[920px] flex-col px-3 py-3">
      <div className="relative z-20 mx-auto flex h-[min(900px,92vh)] w-full max-w-[920px] flex-col px-3 py-3">
        {/* Outer gold border */}
        <div
          className="relative flex flex-1 flex-col rounded-2xl p-[2px]"
          style={{
            background:
              "linear-gradient(180deg, #f5d77a 0%, #c8a44e 20%, #8b6f2e 50%, #c8a44e 80%, #f5d77a 100%)",
          }}
        >
          {/* Inner dark gap */}
          <div className="flex flex-1 flex-col rounded-[14px] bg-[#0c0a06] p-[3px]">
            {/* Inner gold border */}
            <div
              className="flex flex-1 flex-col rounded-xl p-[1.5px]"
              style={{
                background:
                  "linear-gradient(180deg, #c8a44e 0%, #8b6f2e 30%, #5a4620 50%, #8b6f2e 70%, #c8a44e 100%)",
              }}
            >
              {/* Green neon inner glow line */}
              <div
                className="flex flex-1 flex-col rounded-[10px] p-[1px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,230,118,0.4) 0%, rgba(0,230,118,0.1) 30%, transparent 50%, rgba(0,230,118,0.1) 70%, rgba(0,230,118,0.4) 100%)",
                  boxShadow:
@@ -108,37 +88,36 @@ export default function Home() {
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Bottom center diamond ornament */}
                  <div className="pointer-events-none absolute bottom-16 left-1/2 z-30 -translate-x-1/2">
                    <svg viewBox="0 0 16 10" className="h-2 w-4" fill="none">
                      <path d="M8 0 L16 5 L8 10 L0 5 Z" fill="url(#btmDiamond)" stroke="var(--gold)" strokeWidth="0.5" />
                      <defs>
                        <linearGradient id="btmDiamond" x1="8" y1="0" x2="8" y2="10">
                          <stop offset="0%" stopColor="var(--gold-light)" />
                          <stop offset="100%" stopColor="var(--gold-dark)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative z-20 flex flex-1 flex-col px-4 pb-20 pt-4 md:px-6">
                    <CasinoHeader />
                    <main className="flex-1">
                      <HeroCarousel />
                      <GamesCarousel />
                    </main>
                    <BottomNav />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}