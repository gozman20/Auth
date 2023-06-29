import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LoginProps {
  isOpenLogin: boolean;
  openLogin(): void;
  closeLogin(): void;
}

const LoginToggler = create<LoginProps>()(
  persist(
    (set) => ({
      isOpenLogin: false,
      openLogin: () => set({ isOpenLogin: true }),
      closeLogin: () => set({ isOpenLogin: false }),
    }),
    { name: "login", getStorage: () => localStorage }
  )
);
//

export default LoginToggler;
