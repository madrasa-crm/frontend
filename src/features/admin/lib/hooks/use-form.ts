import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// types
import type { CreateNewAdmin } from "../../model/types/general";

// schema
import { createNewAdminSchema } from "../../model/schema/general";

export const useCreateNewAdminForm = ({
  onSubmit,
}: {
  onSubmit: (data: CreateNewAdmin) => void;
}) => {
  const form = useForm<CreateNewAdmin>({
    resolver: zodResolver(createNewAdminSchema),
  });

  const handleCreateNewAdmin = (data: CreateNewAdmin) => {
    onSubmit(data);
  };

  return {
    form,
    handleCreateNewAdmin,
  };
};
