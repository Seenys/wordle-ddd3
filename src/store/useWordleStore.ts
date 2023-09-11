// Zustand
import { create } from "zustand";

interface WordleStore {
  word: string;
  setWord: (guess: string) => void;
}

const useWordleStore = create<WordleStore>((set) => ({
  word: "",
  setWord: (guess: string) => set({ word: guess }),
}));

export default useWordleStore;
