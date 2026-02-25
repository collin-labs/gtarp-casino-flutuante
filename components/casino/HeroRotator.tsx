
"use client";
import { useEffect, useState } from "react";

export default function HeroRotator({ games }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % games.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [games.length]);

  const game = games[index];

  return (
    <div className="gold-frame casino-panel p-6 relative overflow-hidden min-h-[320px]">
      <div className="absolute inset-0 particle-bg pointer-events-none" />
      <div className="relative grid grid-cols-2 gap-6 items-center">
        <div>
          <div className="gold-title text-4xl">{game.name}</div>
          <p className="text-white/70 mt-3">{game.subtitle}</p>
          <button className="neon-btn px-6 py-3 mt-6 text-white font-semibold">
            JOGAR AGORA
          </button>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <img src={game.image} className="w-full h-[280px] object-cover" />
        </div>
      </div>
    </div>
  );
}
