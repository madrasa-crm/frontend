export type SelectedAction = "delete" | "view" | "create" | "edit";

export interface State {
  isModalOpen: boolean;
  selectedAction: SelectedAction | null;
}

export interface Actions {
  setIsModalOpen: (isOpen: boolean) => void;
  setSelectedAction: (selectedAction: SelectedAction) => void;
}
