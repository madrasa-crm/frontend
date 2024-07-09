import type { Actions, State } from "@/entities/teacher";

export const createNewTeacherSelector = (store: State & Actions) => ({
  isOpenModal: store.isOpenModal,
  setIsOpenModal: store.setIsOpenModal,
});
