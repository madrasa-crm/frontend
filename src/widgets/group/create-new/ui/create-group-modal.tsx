// store //
import { useGroup } from "@/entities/group";

// components //

import { CreateNewGroup } from "@/features/group";
import { Dialog, DialogContent, DialogTitle } from "@/shared/ui/dialog";

export const CreateGroupModal = () => {
  const { isGroupModalOpen, setIsGroupModalOpen } = useGroup();

  return (
    <Dialog open={isGroupModalOpen} onOpenChange={setIsGroupModalOpen}>
      <DialogContent>
        <DialogTitle>Создания новой группы</DialogTitle>
        <CreateNewGroup />
      </DialogContent>
    </Dialog>
  );
};
