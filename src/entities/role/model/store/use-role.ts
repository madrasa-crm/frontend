import { devtools } from "zustand/middleware";
import { createWithEqualityFn as create } from "zustand/traditional";

// types
import type { Actions, State } from "../types/use-role";

export const useRole = create<State & Actions>()(
  devtools((set) => ({
    isOpenModal: false,
    setIsOpenModal: (isOpen) => set({ isOpenModal: isOpen }),
  })),
);
