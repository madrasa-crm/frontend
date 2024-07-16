import { devtools } from "zustand/middleware";
import { createWithEqualityFn as create } from "zustand/traditional";

// types
import type { Actions, State } from "../types/use-rating";

const initialState: State = {
  isModalOpen: false,
  selectedAction: null,
};

export const useRating = create<State & Actions>()(
  devtools((set) => ({
    ...initialState,
    setIsModalOpen: (isModalOpen) => set({ isModalOpen }),
    setSelectedAction: (selectedAction) => set({ selectedAction }),
  })),
);
