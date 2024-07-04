import { shallow } from "@tanstack/react-router";

// components
import { useTeacher } from "@/entities/teacher";

// selectors
import { createNewTeacherSelector } from "../model/selectors/create-new";

// components
import { CreateNewTeacher } from "@/features/teacher";
import { Dialog, DialogContent, DialogTitle } from "@/shared/ui/dialog";

export const CreateNewTeacherModal = () => {
  const { isOpenModal, setIsOpenModal } = useTeacher(
    createNewTeacherSelector,
    shallow,
  );

  return (
    <Dialog open={isOpenModal} onOpenChange={setIsOpenModal}>
      <DialogContent>
        <DialogTitle>Новый админ</DialogTitle>
        <CreateNewTeacher />
      </DialogContent>
    </Dialog>
  );
};
