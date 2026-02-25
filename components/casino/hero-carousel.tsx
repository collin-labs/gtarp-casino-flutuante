"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    title: "JOGO DO BICHO",
    subtitle: "Acerte o seu animal favorito e ganhe prêmios incríveis!",
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
    subtitle: "Gire a roleta e tente a sorte nos números da fortuna!",
    image: "/images/games/roulette.png",
    cta: "JOGAR AGORA",
  },
  {
    id: 4,
    title: "BLACKJACK",
    subtitle: "Chegue ao 21 e derrote a banca com estratégia!",
    image: "/images/games/blackjack.png",
    cta: "JOGAR AGORA",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

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
    }, 6000)

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
    <div className="relative mx-auto w-full max-w-[90%] xl:max-w-[80%] pt-6">

      {/* Moldura elegante sem fundo */}
      <div className="relative rounded-2xl border border-[#D4AF37]/40 bg-transparent overflow-hidden">

        {/* Linha superior fina dourada */}
        <div className="absolute top-0 left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        {/* Linha inferior com glow verde */}
        <div className="absolute bottom-0 left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-transparent via-[#00E676]/80 to-transparent shadow-[0_0_12px_rgba(0,230,118,0.45)]" />

        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex">

            {heroSlides.map((slide) => (
              <div key={slide.id} className="min-w-0 flex-[0_0_100%]">
                <div className="flex aspect-[3.8/1] items-center justify-between px-14 py-10">

                <div className="max-w-[55%] flex flex-col items-start">

                  {/* Linha verde superior sutil */}
                  <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#00E676] to-transparent opacity-70 mb-4" />

                  {/* Título menor e elegante */}
                  <h2
                    className="text-4xl tracking-[0.35em] font-semibold bg-gradient-to-b from-[#F5E6B2] via-[#E6C76A] to-[#D4AF37] bg-clip-text text-transparent"
                    style={{
                      fontFamily: "Playfair Display, serif"
                    }}
                  >
                    {slide.title}
                  </h2>

                  {/* Linha verde inferior sutil */}
                  <div className="w-40 h-[2px] mt-4 bg-gradient-to-r from-transparent via-[#00E676] to-transparent opacity-70 mb-6" />

                  {/* Subtítulo refinado */}
                  <p className="text-sm italic text-[#C8A44E]/70 mb-8 tracking-wide leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Botão estilo premium */}
                  <button
                    className="relative px-14 py-3 font-serif tracking-widest text-sm text-[#F5E6B2] rounded-md transition-all duration-300"
                    style={{
                      background: "linear-gradient(180deg,#0e5b38 0%,#0c3f28 100%)",
                      border: "1px solid rgba(212,175,55,0.9)",
                      boxShadow: `
                        inset 0 0 12px rgba(212,175,55,0.25),
                        0 0 14px rgba(0,230,118,0.35)
                      `
                    }}
                  >
                    {slide.cta}
                  </button>

                </div>

                  {/* Imagem */}
                  <div className="relative h-64 w-64">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.35)]"
                    />
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === selectedIndex
                ? "w-8 bg-[#00E676] shadow-[0_0_10px_#00E676]"
                : "w-2 bg-[#D4AF37]/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}