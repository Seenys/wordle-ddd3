// Zustand
import { stat } from "fs";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface WordleStore {
  word: string;
  win: number;
  loss: number;
  turn: number;
  isTimeComplete: boolean;
  playState: "win" | "loss" | null;
  firstLoad: boolean;
  setTurn: () => void;
  setFirstLoad: () => void;
  setTimeComplete: () => void;
  setWin: () => void;
  setLoss: () => void;
  setPlayState: (state: any) => void;
  setWord: (guess: string) => void;
  resetStores: () => void;
}

const useWordleStore = create<WordleStore>()(
  devtools(
    persist(
      (set) => ({
        word: "",
        playState: null,
        isTimeComplete: false,
        win: 0,
        loss: 0,
        firstLoad: true,
        turn: 0,
        setTurn: () => set((state) => ({ turn: state.turn + 1 })),
        setFirstLoad: () => set({ firstLoad: false }),
        setPlayState: (state: any) => set({ playState: state }),
        setTimeComplete: () => set({ isTimeComplete: true }),
        setLoss: () => set((state) => ({ loss: state.loss + 1 })),
        setWin: () => set((state) => ({ win: state.win + 1 })),
        setWord: (guess: string) => set({ word: guess }),
        resetStores: () =>
          set({
            word: "",
            playState: null,
            isTimeComplete: false,
            turn: 0,
          }),
      }),
      {
        name: "wordle-storage",
        getStorage: () => localStorage,
      }
    )
  )
);

export default useWordleStore;
