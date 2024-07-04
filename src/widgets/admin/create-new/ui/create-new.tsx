import { shallow } from "@tanstack/react-router";

// components
import { useAdmin } from "@/entities/admin";

// selectors
import { createNewAdminSelector } from "../model/selectors/create-new";

// components
import { CreateNewAdmin } from "@/features/admin";
import { Dialog, DialogContent, DialogTitle } from "@/shared/ui/dialog";

export const CreateNewAdminModal = () => {
  const { isOpenModal, setIsOpenModal } = useAdmin(
    createNewAdminSelector,
    shallow,
  );

  return (
    <Dialog open={isOpenModal} onOpenChange={setIsOpenModal}>
      <DialogContent>
        <DialogTitle>Новый админ</DialogTitle>
        <CreateNewAdmin />
      </DialogContent>
    </Dialog>
  );
};
