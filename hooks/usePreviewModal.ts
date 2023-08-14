import { create } from "zustand";

import { RoomType } from "@/app/rooms/page";

interface PreviewModalStore {
  isOpen: boolean;
  data?: RoomType;
  onOpen(data: RoomType): void;
  onClose(): void;
}
const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: RoomType) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
