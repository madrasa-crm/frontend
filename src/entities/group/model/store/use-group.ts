import { createWithEqualityFn as create } from "zustand/traditional";

import type { Actions, State } from "../types/use-group";

export const useGroup = create<Actions & State>()((set) => ({
  isGroupModalOpen: false,
  setIsGroupModalOpen: (isOpen) => set({ isGroupModalOpen: isOpen }),
}));
