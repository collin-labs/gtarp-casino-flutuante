"use client"

import { useState } from "react"
import { Layers, CircleDollarSign, Lock, CalendarDays, User } from "lucide-react"

const tabs =[
  { id: "cassino", label: "CASSINO", icon: Layers },
  { id: "pvp", label: "PVP", icon: CircleDollarSign },
  { id: "loja", label: "LOJA", icon: Lock },
  { id: "eventos", label: "EVENTOS", icon: CalendarDays },
  { id: "perfil", label: "PERFIL", icon: User },
]

export function BottomNav() {
  const [active, setActive] = useState("cassino")

  return (
    <div className="w-full flex flex-col relative z-40">
      
      {/* Linha Dourada Superior (Estilo do título JOGOS) */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b6f2e] to-transparent opacity-60" />

      <nav className="relative flex w-full items-center bg-[#070707]/90 backdrop-blur-sm">
        {/* Textura de fundo do menu */}
        <div className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.1]" style={{ backgroundImage: "url('/images/fundo-casino.png')" }} />

        {tabs.map((tab, index) => {
          const Icon = tab.icon
          const isActive = active === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              // ALTURA REDUZIDA: h-14 (normal) / h-16 (telas grandes). Fica mais Slim!
              className="group relative flex flex-1 items-center justify-center gap-2 xl:gap-3 h-14 xl:h-16 transition-all duration-300"
            >
              {/* === EFEITO LENS FLARE / LUZ CONCENTRADA (IMAGEM 5) === */}
              {isActive && (
                <>
                  {/* 1. Bloom difuso (a névoa verde que sobe) */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-10 opacity-50 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(0,230,118,0.3)_0%,_transparent_60%)]" />

                  {/* 2. Linha verde base (fina e esmaecendo nas pontas) */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00e676] to-transparent opacity-50" />
                  
                  {/* 3. Linha intermediária verde (Engrossa perto do centro) */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#00e676] to-transparent opacity-100" style={{ boxShadow: "0px 0px 8px rgba(0, 230, 118, 0.8)" }} />
                  
                  {/* 4. O NÚCLEO BRANCO E CURTO (Aqui está o traço pequeno e brilhante!) */}
                  <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-6 h-[3px] bg-white rounded-full" style={{ boxShadow: "0px 0px 14px 4px rgba(0, 230, 118, 1), 0px 0px 4px 1px rgba(255, 255, 255, 0.9)" }} />
                </>
              )}

              {/* Separador Vertical ( | ) */}
              {index !== tabs.length - 1 && (
                <div className="absolute right-0 top-[25%] bottom-[25%] w-[1px] bg-gradient-to-b from-transparent via-[#8b6f2e]/40 to-transparent z-10" />
              )}

              {/* ÍCONE */}
              <div className="relative z-10 flex items-center justify-center">
                <Icon
                  className={`h-5 w-5 xl:h-6 xl:w-6 transition-all duration-300 ${
                    isActive
                      ? "text-[#00e676] drop-shadow-[0_0_8px_rgba(0,230,118,0.8)] scale-110"
                      : "text-[#8b6f2e] group-hover:text-[#c8a44e]"
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>

              {/* LABEL */}
              <span
                className={`font-serif text-sm lg:text-base xl:text-lg font-bold tracking-[0.12em] uppercase transition-all duration-300 relative z-10 ${
                  isActive
                    ? "text-[#f5d77a] drop-shadow-[0_0_8px_rgba(245,215,122,0.8)] scale-105"
                    : "text-[#8b6f2e] group-hover:text-[#c8a44e]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Linha Dourada Inferior */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b6f2e] to-transparent opacity-60" />
    </div>
  )
}