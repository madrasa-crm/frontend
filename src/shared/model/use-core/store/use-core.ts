import { devtools, persist } from "zustand/middleware";
import { createWithEqualityFn as create } from "zustand/traditional";

// types
import type { Actions, State } from "@/shared/model/use-core/types/use-core";

const initialState: State = {
  userToken: null,
  sidebarOpen: true,
};

export type Store = State & Actions;

export const useCore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setUserToken: (token: string | null) => set({ userToken: token }),
        setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
        reset: () => set(initialState),
      }),
      {
        name: "crm-school-storage",
      },
    ),
  ),
);
