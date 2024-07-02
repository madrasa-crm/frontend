import type { Actions, State } from "@/entities/role";

export const createNewRoleSelector = (store: State & Actions) => ({
  isOpenModal: store.isOpenModal,
  setIsOpenModal: store.setIsOpenModal,
});
