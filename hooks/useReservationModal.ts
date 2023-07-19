import { create } from "zustand";

interface ReservationModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useReservationModal = create<ReservationModalStore>((set) => ({
  isOpen: false,
  userMenu: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useReservationModal;
