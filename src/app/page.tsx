"use client";

import React, { useEffect } from "react";
import { Wordle } from "@/components/wordle";
import useWordleStore from "@/store/useWordleStore";
import { getRandomWord } from "@/utils/wordle-utils";
import InfoModal from "@/components/modals/infoModal";
import StatsModal from "@/components/modals/statsModal";
import Countdown from "react-countdown";

export default function Home() {
  const { word, setWord } = useWordleStore();

  useEffect(() => {
    setWord(getRandomWord());
  }, []);
  const count = (
    <Countdown
      date={Date.now() + 10000}
      onComplete={() => handleIsComplete()}
    />
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-white text-center bg-darkBg ">
      <InfoModal />
      <StatsModal />
      {word && <Wordle guess={word} />}
    </main>
  );
}
