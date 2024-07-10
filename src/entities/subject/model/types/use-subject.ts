export interface State {
  isModalOpen: boolean;
}

export interface Actions {
  setIsModalOpen: (isOpen: boolean) => void;
}
