import { create } from "zustand";

interface infoModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useInfoModal = create<infoModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useInfoModal;
