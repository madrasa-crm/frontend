// store
import { useSubject } from "@/entities/subject";

// components
import { CreateNewSubject } from "@/features/subject";
import { Dialog, DialogContent, DialogTitle } from "@/shared/ui/dialog";

export const CreateNewModal = () => {
  const { isModalOpen, setIsModalOpen } = useSubject();

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogTitle>Yangi subject</DialogTitle>
        <CreateNewSubject />
      </DialogContent>
    </Dialog>
  );
};
