"use client"

import { useState } from "react"
import { Gamepad2, Swords, ShoppingBag, CalendarDays, User } from "lucide-react"

const tabs = [
  { id: "cassino", label: "CASSINO", icon: Gamepad2 },
  { id: "pvp", label: "PVP", icon: Swords },
  { id: "loja", label: "LOJA", icon: ShoppingBag },
  { id: "eventos", label: "EVENTOS", icon: CalendarDays },
  { id: "perfil", label: "PERFIL", icon: User },
]

export function BottomNav() {
  const [active, setActive] = useState("cassino")

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[920px] px-3">
      {/* Double border wrapper */}
      <div
        className="rounded-t-xl p-[2px]"
        style={{
          background:
            "linear-gradient(90deg, #8b6f2e 0%, #f5d77a 20%, #c8a44e 50%, #f5d77a 80%, #8b6f2e 100%)",
        }}
      >
        <div className="rounded-t-[10px] bg-[#0c0a06] p-[1.5px]">
          <div
            className="rounded-t-[9px] p-[1px]"
            style={{
              background:
                "linear-gradient(90deg, #5a4620 0%, #c8a44e 30%, #8b6f2e 50%, #c8a44e 70%, #5a4620 100%)",
            }}
          >
            <div
              className="flex items-center justify-around rounded-t-lg px-2 py-2.5"
              style={{
                background:
                  "linear-gradient(180deg, rgba(18,15,8,0.98) 0%, rgba(10,8,4,0.99) 100%)",
              }}
            >
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = active === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`group relative flex flex-col items-center gap-0.5 rounded-lg px-3 py-1 transition-all duration-500 ${
                      isActive ? "scale-105" : "opacity-50 hover:opacity-90"
                    }`}
                  >
                    {/* Active glow behind */}
                    {isActive && (
                      <div
                        className="pointer-events-none absolute -inset-1 -z-10 rounded-lg"
                        style={{
                          background:
                            "radial-gradient(ellipse, rgba(200,164,78,0.1) 0%, transparent 70%)",
                        }}
                      />
                    )}

                    {/* Active top indicator */}
                    {isActive && (
                      <div className="absolute -top-2.5 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[var(--emerald)] shadow-[0_0_8px_rgba(0,230,118,0.6)]" />
                    )}

                    <Icon
                      className={`h-4 w-4 transition-all duration-500 ${
                        isActive
                          ? "text-[var(--gold-light)] drop-shadow-[0_0_6px_rgba(200,164,78,0.5)]"
                          : "text-[var(--gold-dark)] group-hover:text-[var(--gold)]"
                      }`}
                    />
                    <span
                      className={`text-[9px] font-bold tracking-wider transition-all duration-500 ${
                        isActive
                          ? "text-[var(--gold-light)]"
                          : "text-[var(--gold-dark)] group-hover:text-[var(--gold)]"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
