import { create } from "zustand";

interface AdminModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAdminModal = create<AdminModalStore>((set) => ({
  isOpen: false,
  userMenu: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAdminModal;
