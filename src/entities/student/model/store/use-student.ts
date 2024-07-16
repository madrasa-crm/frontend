import { devtools } from "zustand/middleware";
import { createWithEqualityFn as create } from "zustand/traditional";

// types
import type { Actions, State } from "../types/use-student";

export const useStudent = create<State & Actions>()(
  devtools((set) => ({
    selectedAction: null,
    selectedStudentId: null,
    isOpenModal: false,
    setSelectedAction: (action) => set({ selectedAction: action }),
    setSelectedStudentId: (id) => set({ selectedStudentId: id }),
    setIsOpenModal: (isOpen) => set({ isOpenModal: isOpen }),
  })),
);
