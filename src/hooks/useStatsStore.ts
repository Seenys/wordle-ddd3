import { create } from "zustand";

interface statsStore {
  answer: string;
  win: number;
  loss: number;
  isTimeComplete: boolean;
  setTimeComplete: () => void;
  setWin: () => void;
  setLoss: () => void;
  playState: "win" | "loss" | null;
  setPlayState: (state: any) => void;
  setAnswer: (guess: string) => void;
}

const useStatsStore = create<statsStore>((set) => ({
  playState: null,
  isTimeComplete: false,
  win: 0,
  loss: 0,
  answer: "",
  setPlayState: (state) => set({ playState: state }),
  setTimeComplete: () => set({ isTimeComplete: true }),
  setLoss: () => set((state) => ({ loss: state.loss + 1 })),
  setWin: () => set((state) => ({ win: state.win + 1 })),
  setAnswer: (guess) => set({ answer: guess }),
}));

export default useStatsStore;
