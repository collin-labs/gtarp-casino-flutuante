"use client"

import { CasinoHeader } from "@/components/casino/header"
import { HeroCarousel } from "@/components/casino/hero-carousel"
import { GamesCarousel } from "@/components/casino/games-carousel"
import { BottomNav } from "@/components/casino/bottom-nav"
import { GoldParticles } from "@/components/casino/gold-particles"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-transparent p-4">
      {/* Container gigante 85% do monitor */}
      <div className="relative z-20 flex w-[90vw] xl:w-[85vw] 2xl:w-[75vw] flex-col items-center">
        {/* Borda Externa + Altura Fixa */}
        <div
          className="relative flex w-full flex-col rounded-2xl p-[2px] shadow-[0_0_80px_rgba(0,0,0,0.8)]"
          style={{ height: "85vh" }}
        >
          <div className="flex flex-1 flex-col overflow-hidden rounded-[14px] bg-[#0c0a06] p-[3px]">
            <div
              className="flex flex-1 flex-col overflow-hidden rounded-xl p-[1.5px]"
              style={{ background: "linear-gradient(180deg, #c8a44e 0%, #8b6f2e 30%, #5a4620 50%, #8b6f2e 70%, #c8a44e 100%)" }}
            >
              <div
                className="flex flex-1 flex-col overflow-hidden rounded-[10px] p-[1px]"
                style={{
                  background: "linear-gradient(180deg, rgba(0,230,118,0.4) 0%, rgba(0,230,118,0.1) 30%, transparent 50%, rgba(0,230,118,0.1) 70%, rgba(0,230,118,0.4) 100%)",
                  boxShadow: "inset 0 0 15px rgba(0,230,118,0.08)",
                }}
              >
                <div
                  className="relative flex flex-1 flex-col overflow-hidden rounded-[9px]"
                  style={{ background: "linear-gradient(180deg, #0d0b07 0%, #0a0a0a 30%, #0d0b07 100%)" }}
                >
                  <div className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('/images/fundo-casino.png')" }} aria-hidden="true" />
                  <div className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center 30%, transparent 0%, rgba(10,10,10,0.7) 100%)" }} aria-hidden="true" />

                  <GoldParticles />

                  {/* Corner ornaments */}
                  <div className="pointer-events-none absolute left-3 top-3 z-30 h-6 w-6"><div className="h-full w-full rounded-tl-lg border-l-2 border-t-2 border-[var(--gold)]" /><div className="absolute left-0 top-0 h-2 w-2 rounded-full bg-[var(--emerald)] shadow-[0_0_8px_rgba(0,230,118,0.8)]" /></div>
                  <div className="pointer-events-none absolute right-3 top-3 z-30 h-6 w-6"><div className="h-full w-full rounded-tr-lg border-r-2 border-t-2 border-[var(--gold)]" /><div className="absolute right-0 top-0 h-2 w-2 rounded-full bg-[var(--emerald)] shadow-[0_0_8px_rgba(0,230,118,0.8)]" /></div>
                  <div className="pointer-events-none absolute bottom-3 left-3 z-30 h-6 w-6"><div className="h-full w-full rounded-bl-lg border-b-2 border-l-2 border-[var(--gold)]" /><div className="absolute bottom-0 left-0 h-2 w-2 rounded-full bg-[var(--emerald)] shadow-[0_0_8px_rgba(0,230,118,0.8)]" /></div>
                  <div className="pointer-events-none absolute bottom-3 right-3 z-30 h-6 w-6"><div className="h-full w-full rounded-br-lg border-b-2 border-r-2 border-[var(--gold)]" /><div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-[var(--emerald)] shadow-[0_0_8px_rgba(0,230,118,0.8)]" /></div>

                  <div className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2">
                    <svg viewBox="0 0 40 16" className="h-4 w-12 xl:h-5 xl:w-16" fill="none">
                      <path d="M0 16 L8 4 L15 10 L20 0 L25 10 L32 4 L40 16 Z" fill="url(#topCrown)" stroke="var(--gold)" strokeWidth="0.5" />
                      <defs>
                        <linearGradient id="topCrown" x1="20" y1="0" x2="20" y2="16"><stop offset="0%" stopColor="var(--gold-light)" /><stop offset="100%" stopColor="var(--gold-dark)" /></linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Coroa SVG do Topo (Mantenha do seu arquivo) */}
                  <div className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2">
                    <svg viewBox="0 0 40 16" className="h-4 w-12 xl:h-5 xl:w-16" fill="none">
                      <path d="M0 16 L8 4 L15 10 L20 0 L25 10 L32 4 L40 16 Z" fill="url(#topCrown)" stroke="var(--gold)" strokeWidth="0.5" />
                      <defs>
                        <linearGradient id="topCrown" x1="20" y1="0" x2="20" y2="16"><stop offset="0%" stopColor="var(--gold-light)" /><stop offset="100%" stopColor="var(--gold-dark)" /></linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Conteúdo rolável - Usa flex-1 para empurrar a navbar pra baixo */}
                  <div className="relative z-20 flex flex-1 flex-col overflow-y-auto overflow-x-hidden px-8 pb-6 pt-6 xl:px-12 xl:pt-8 custom-scrollbar">
                    <CasinoHeader />
                    <main className="flex-1 flex flex-col justify-center gap-6 xl:gap-10 mt-4">
                      <HeroCarousel />
                      <GamesCarousel />
                    </main>
                  </div>

                  {/* A MÁGICA AQUI: O Menu agora fica DENTRO do painel gigante na parte inferior */}
                  <div className="relative z-30 w-full shrink-0 px-6 pb-8 pt-4 xl:px-12 xl:pb-10">
                    <BottomNav />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}