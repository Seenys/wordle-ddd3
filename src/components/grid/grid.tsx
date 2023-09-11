"use client";
import { FC } from "react";

import { Row } from "@/components/grid/row";
import { Char } from "@/models/wordle";

interface GridProps {
  guesses: Char[][];
  currentGuess: string;
  turn: number;
}

export const Grid: FC<GridProps> = ({ guesses, turn, currentGuess }) => {
  return (
    <>
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guess={guess} />;
      })}
    </>
  );
};
