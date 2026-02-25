"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { GameCard } from "./game-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const games = [
  { name: "CRASH", image: "/images/games/crash.png" },
  { name: "SLOTS", image: "/images/games/slots.png" },
  { name: "MINES", image: "/images/games/mines.png" },
  { name: "BLACKJACK", image: "/images/games/blackjack.png" },
  { name: "ROLETA", image: "/images/games/roulette.png" },
  { name: "POKER", image: "/images/games/poker.png" },
  { name: "DADOS", image: "/images/games/dice.png" },
  { name: "PLINKO", image: "/images/games/plinko.png" },
  { name: "JOGO DO BICHO", image: "/images/games/anima-game.png" },
  { name: "ROLETA BR", image: "/images/games/brazilian-roulette.png" },
]

export function GamesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative mx-auto w-full max-w-[900px] px-4 py-6">
      {/* Section title */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--gold-dark)] to-transparent" />
        <h2 className="text-gold-gradient font-serif text-xl font-bold tracking-widest">
          JOGOS
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--gold-dark)] to-transparent" />
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Prev Button */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute -left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--gold-dark)] bg-[var(--background)]/90 text-[var(--gold)] transition-all duration-300 hover:border-[var(--emerald)] hover:text-[var(--emerald)] hover:shadow-[0_0_15px_rgba(0,230,118,0.3)] disabled:opacity-30"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute -right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--gold-dark)] bg-[var(--background)]/90 text-[var(--gold)] transition-all duration-300 hover:border-[var(--emerald)] hover:text-[var(--emerald)] hover:shadow-[0_0_15px_rgba(0,230,118,0.3)] disabled:opacity-30"
          aria-label="Proximo"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[var(--background)] to-transparent" />

        <div className="overflow-hidden px-2" ref={emblaRef}>
          <div className="-ml-3 flex">
            {games.map((game, index) => (
              <div key={game.name} className="min-w-0 flex-[0_0_33.33%] pl-3 md:flex-[0_0_20%]">
                <GameCard name={game.name} image={game.image} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
