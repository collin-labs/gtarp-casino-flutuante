"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    title: "JOGO DO BICHO",
    subtitle: "Acerte o seu animal favorito e ganhe premios incriveis!",
    image: "/images/games/anima-game.png",
    cta: "JOGAR AGORA",
  },
  {
    id: 2,
    title: "CRASH",
    subtitle: "Multiplique seus ganhos antes que o foguete exploda!",
    image: "/images/games/crash.png",
    cta: "JOGAR AGORA",
  },
  {
    id: 3,
    title: "ROLETA",
    subtitle: "Gire a roleta e tente a sorte nos numeros da fortuna!",
    image: "/images/games/roulette.png",
    cta: "JOGAR AGORA",
  },
  {
    id: 4,
    title: "BLACKJACK",
    subtitle: "Chegue ao 21 e derrote a banca com estrategia!",
    image: "/images/games/blackjack.png",
    cta: "JOGAR AGORA",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lang, setLang] = useState<"pt" | "en">("pt")

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => {
      emblaApi.off("select", onSelect)
      clearInterval(interval)
    }
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  return (
    <div className="relative mx-auto w-full max-w-[860px] px-2 pt-4">
      {/* Double border hero container */}
      <div
        className="relative rounded-xl p-[2px]"
        style={{
          background:
            "linear-gradient(135deg, #f5d77a 0%, #c8a44e 25%, #8b6f2e 50%, #c8a44e 75%, #f5d77a 100%)",
        }}
      >
        {/* Dark gap */}
        <div className="rounded-[10px] bg-[#0c0a06] p-[2px]">
          {/* Inner gold border */}
          <div
            className="rounded-lg p-[1px]"
            style={{
              background:
                "linear-gradient(135deg, #c8a44e 0%, #8b6f2e 30%, #5a4620 50%, #8b6f2e 70%, #c8a44e 100%)",
            }}
          >
            {/* Green neon subtle glow */}
            <div
              className="rounded-[7px] p-[1px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,230,118,0.3) 0%, transparent 30%, transparent 70%, rgba(0,230,118,0.3) 100%)",
              }}
            >
              {/* Carousel content */}
              <div className="overflow-hidden rounded-md" ref={emblaRef}>
                <div className="flex">
                  {heroSlides.map((slide) => (
                    <div key={slide.id} className="min-w-0 flex-[0_0_100%]">
                      <div
                        className="relative flex aspect-[2.8/1] items-center overflow-hidden"
                        style={{
                          background:
                            "linear-gradient(135deg, #0d0b07 0%, #1a1408 30%, #0d0b07 100%)",
                        }}
                      >
                        {/* Background inner texture */}
                        <div
                          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15"
                          style={{
                            backgroundImage: "url('/images/fundo-casino.png')",
                          }}
                        />

                        {/* Radial glows */}
                        <div
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background:
                              "radial-gradient(ellipse at 70% 50%, rgba(200,164,78,0.12) 0%, transparent 60%)",
                          }}
                        />
                        <div
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background:
                              "radial-gradient(ellipse at 30% 80%, rgba(0,230,118,0.06) 0%, transparent 50%)",
                          }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex w-full items-center justify-between px-8 py-4 md:px-14">
                          {/* Text side */}
                          <div className="flex max-w-[55%] flex-col gap-2">
                            {/* Crown */}
                            <div
                              style={{
                                animation: "crown-float 3s ease-in-out infinite",
                              }}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="none"
                              >
                                <path
                                  d="M2 17L5 7L9 12L12 4L15 12L19 7L22 17H2Z"
                                  fill="url(#crownGrad2)"
                                  stroke="var(--gold)"
                                  strokeWidth="0.5"
                                />
                                <defs>
                                  <linearGradient
                                    id="crownGrad2"
                                    x1="12"
                                    y1="4"
                                    x2="12"
                                    y2="17"
                                  >
                                    <stop
                                      offset="0%"
                                      stopColor="var(--gold-light)"
                                    />
                                    <stop
                                      offset="100%"
                                      stopColor="var(--gold-dark)"
                                    />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>

                            <h2 className="text-gold-gradient font-serif text-2xl font-bold tracking-wider md:text-3xl lg:text-4xl">
                              {slide.title}
                            </h2>

                            <p className="text-xs italic leading-relaxed text-[var(--gold-dark)] md:text-sm">
                              {slide.subtitle}
                            </p>

                            {/* CTA Button */}
                            <button
                              className="group relative mt-1 w-fit overflow-hidden rounded-lg border border-[var(--gold)] px-5 py-2 font-serif text-xs font-bold tracking-wider text-[var(--gold-light)] transition-all duration-500 hover:scale-105 hover:border-[var(--emerald)] hover:text-[var(--emerald)] hover:shadow-[0_0_30px_rgba(0,230,118,0.3)] md:px-6 md:py-2.5 md:text-sm"
                              style={{
                                background:
                                  "linear-gradient(180deg, rgba(0,161,82,0.9) 0%, rgba(0,100,50,0.95) 100%)",
                                boxShadow:
                                  "0 0 15px rgba(0,230,118,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                              }}
                            >
                              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                              <span className="relative z-10">{slide.cta}</span>
                            </button>
                          </div>

                          {/* Game Image */}
                          <div className="relative h-32 w-32 shrink-0 md:h-44 md:w-44 lg:h-52 lg:w-52">
                            <Image
                              src={slide.image}
                              alt={slide.title}
                              fill
                              className="object-contain drop-shadow-[0_0_30px_rgba(200,164,78,0.3)] transition-transform duration-700 hover:scale-110"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots - below the border */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === selectedIndex
                ? "w-6 bg-[var(--emerald)] shadow-[0_0_10px_rgba(0,230,118,0.5)]"
                : "w-1.5 bg-[var(--gold-dark)]/50 hover:bg-[var(--gold)]"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Language toggle - subtle, bottom right */}
      <div className="absolute bottom-0 right-4 flex items-center gap-1.5">
        <button
          onClick={() => setLang("pt")}
          className={`flex items-center gap-1 rounded px-1.5 py-0.5 text-[9px] font-medium tracking-wide transition-all duration-300 ${
            lang === "pt"
              ? "text-[var(--gold-light)]"
              : "text-[var(--gold-dark)]/40 hover:text-[var(--gold-dark)]"
          }`}
        >
          <span className="text-[10px]">BR</span>
        </button>
        <div className="h-2.5 w-[1px] bg-[var(--gold-dark)]/30" />
        <button
          onClick={() => setLang("en")}
          className={`flex items-center gap-1 rounded px-1.5 py-0.5 text-[9px] font-medium tracking-wide transition-all duration-300 ${
            lang === "en"
              ? "text-[var(--gold-light)]"
              : "text-[var(--gold-dark)]/40 hover:text-[var(--gold-dark)]"
          }`}
        >
          <span className="text-[10px]">EN</span>
        </button>
      </div>
    </div>
  )
}
