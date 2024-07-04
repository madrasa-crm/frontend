import type { Actions, State } from "@/entities/admin";

export const createNewAdminSelector = (store: State & Actions) => ({
  isOpenModal: store.isOpenModal,
  setIsOpenModal: store.setIsOpenModal,
});
