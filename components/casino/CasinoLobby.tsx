
"use client";
import { useState } from "react";
import HeaderLED from "./HeaderLED";
import HeroRotator from "./HeroRotator";
import GameRow from "./GameRow";
import GameCarousel from "./GameCarousel";
import Dock from "./Dock";
import { heroGames, mediumGames, carouselGames } from "@/data/casinoMock";

export default function CasinoLobby() {
  const [tab, setTab] = useState("CASINO");

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="casino-panel gold-frame w-[88vw] h-[88vh] p-4 flex flex-col gap-4">
        <HeaderLED />
        <div className="flex-1 overflow-hidden flex flex-col gap-4">
          <HeroRotator games={heroGames} />
          <GameRow title="DESTAQUES" games={mediumGames} />
          <GameCarousel title="MAIS JOGOS" games={carouselGames} />
        </div>
        <Dock value={tab} onChange={setTab} />
      </div>
    </div>
  );
}
