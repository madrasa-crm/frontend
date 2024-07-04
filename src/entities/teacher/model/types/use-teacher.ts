export interface State {
  isOpenModal: boolean;
}

export interface Actions {
  setIsOpenModal: (isOpen: boolean) => void;
}
