import { createWithEqualityFn as create } from "zustand/traditional";

import type { Actions, State } from "../types/use-subject";

export const useSubject = create<Actions & State>()((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
}));
