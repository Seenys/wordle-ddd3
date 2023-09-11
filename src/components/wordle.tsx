// React Imports
import { FC, useEffect, useState } from "react";
// store
import useWordleStore from "@/store/useWordleStore";
// Hooks
import useWordle from "@/hooks/useWordle";
import useStatsModal from "@/hooks/useStatsModal";
// components
import { Grid } from "@/components/grid/grid";
import { Keyboard } from "@/components/keyboard/keyboard";
import { Header } from "@/components/header/header";
import Countdown from "./shared/countDown";

interface WordleProps {
  guess: string;
}

export const Wordle: FC<WordleProps> = ({ guess }) => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : prefersDarkMode
  );

  const {
    currentGuess,
    handleKeyUp,
    guesses,
    turn,
    isCorrect,
    usedKeys,
    handleMouseKey,
  } = useWordle(guess);

  const wordleStore = useWordleStore();
  const statsModal = useStatsModal();

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, guess]);

  useEffect(() => {
    if (turn === 5) {
      wordleStore.setPlayState("loss");
    }

    if (isCorrect) {
      wordleStore.setPlayState("win");
      wordleStore.setWin();
    } else {
      wordleStore.setLoss();
    }
  }, [turn, isCorrect]);

  useEffect(() => {
    if (wordleStore.playState === "win" || wordleStore.playState === "loss") {
      statsModal.onOpen();
    }
  }, [wordleStore.playState]);

  const handleClick = (e: string) => {
    handleMouseKey(e);
  };

  const handleDarkMode = (isDark: boolean) => {
    console.log(isDark);
    setIsDarkMode(isDark);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    // toggle dark mode
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <Header handleDarkMode={handleDarkMode} title="wordle" />
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keyboard usedKeys={usedKeys} onClick={handleClick} />
    </>
  );
};
