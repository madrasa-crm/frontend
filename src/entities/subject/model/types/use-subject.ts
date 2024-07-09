export interface State {
  isActionModalOpen: boolean;
}

export interface Actions {
  setIsActionModalOpen: (isOpen: boolean) => void;
}
