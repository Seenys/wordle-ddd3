import { FC, useEffect, useState } from "react";
import useWordle from "@/hooks/useWordle";
import { Grid } from "@/components/grid/grid";
import { Keyboard } from "@/components/keyboard/keyboard";
import { Header } from "@/components/header/header";
import useStatsModal from "@/hooks/useStatsModal";
import useStatsStore from "@/hooks/useStatsStore";
import Countdown from "react-countdown";

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

  const statsModal = useStatsModal();
  const statsStore = useStatsStore();

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    console.log("useEffect", guess);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, guess]);

  useEffect(() => {
    statsStore.setLoss();
    if (turn === 5) {
      statsStore.setPlayState("loss");
    }

    if (isCorrect) {
      statsStore.setPlayState("win");
      statsStore.setWin();
    }
  }, [turn, isCorrect]);

  useEffect(() => {
    statsStore.setAnswer(guess);
    console.log(statsStore.answer, "here ege");
  }, []);
  const handleClick = (e: string) => {
    handleMouseKey(e);
  };

  const handleDarkMode = (isDark: boolean) => {
    console.log(isDark);
    setIsDarkMode(isDark);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  };

  return (
    <>
      <Header handleDarkMode={handleDarkMode} />
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keyboard usedKeys={usedKeys} onClick={handleClick} />
    </>
  );
};
