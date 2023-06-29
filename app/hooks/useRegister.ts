import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface RegisterProps {
  isOpenRegister: boolean;
  openRegister(): void;
  closeRegister(): void;
}

const RegisterToggler = create<RegisterProps>()(
  persist(
    (set) => ({
      isOpenRegister: false,
      openRegister: () => set({ isOpenRegister: true }),
      closeRegister: () => set({ isOpenRegister: false }),
    }),
    { name: "register", getStorage: () => localStorage }
  )
);
//

export default RegisterToggler;
