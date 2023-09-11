import { create } from "zustand";

interface statsModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useStatsModal = create<statsModalStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useStatsModal;
