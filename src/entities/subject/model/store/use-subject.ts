import { createWithEqualityFn as create } from "zustand/traditional";

import type { Actions, State } from "../types/use-subject";

export const useSubjectStore = create<Actions & State>()((set) => ({
  isActionModalOpen: false,
  setIsActionModalOpen: (isOpen) => set({ isActionModalOpen: isOpen }),
}));
