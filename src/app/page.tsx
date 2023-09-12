"use client";

import React, { useEffect } from "react";
import { Wordle } from "@/components/wordle";
import useWordleStore from "@/store/useWordleStore";
import { getRandomWord } from "@/utils/wordle-utils";
import InfoModal from "@/components/modals/infoModal";
import StatsModal from "@/components/modals/statsModal";
import useInfoModal from "@/hooks/useInfoModal";

export default function Home() {
  const { word, setWord, firstLoad, setFirstLoad } = useWordleStore();
  const infoModal = useInfoModal();

  useEffect(() => {
    setWord(getRandomWord());

    if (firstLoad) {
      console.log("first load");
      infoModal.onOpen();
      setFirstLoad();
      setWord(getRandomWord());
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-white text-center dark:bg-darkBg ">
      <InfoModal />
      <StatsModal />
      {word && <Wordle guess={word} />}
    </main>
  );
}
