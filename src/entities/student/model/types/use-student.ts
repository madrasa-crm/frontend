export type SelectedAction = "create" | "edit" | "delete";

export interface State {
  isOpenModal: boolean;
  selectedAction: SelectedAction | null;
  selectedStudentId: number | null;
}

export interface Actions {
  setIsOpenModal: (isOpen: boolean) => void;
  setSelectedAction: (action: SelectedAction) => void;
  setSelectedStudentId: (id: number | null) => void;
}
