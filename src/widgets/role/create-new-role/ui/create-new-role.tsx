import { shallow } from "@tanstack/react-router";

// components
import { useRole } from "@/entities/role";

// selectors
import { createNewRoleSelector } from "../model/selectors/create-new-role";

// components
import { CreateNewRole } from "@/features/role";
import { Dialog, DialogContent, DialogTitle } from "@/shared/ui/dialog";

export const CreateNewRoleModal = () => {
  const { isOpenModal, setIsOpenModal } = useRole(
    createNewRoleSelector,
    shallow,
  );

  return (
    <Dialog open={isOpenModal} onOpenChange={setIsOpenModal}>
      <DialogContent>
        <DialogTitle>Новый роль</DialogTitle>
        <CreateNewRole />
      </DialogContent>
    </Dialog>
  );
};
