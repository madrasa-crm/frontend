import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// types
import type { CreateNewRole } from "../../model/types/general";

// schema
import { createNewRoleSchema } from "../../model/schema/general";

export const useCreateNewRoleForm = ({
  onSubmit,
}: {
  onSubmit: (data: CreateNewRole) => void;
}) => {
  const form = useForm<CreateNewRole>({
    resolver: zodResolver(createNewRoleSchema),
  });

  const handleCreateNewRole = (data: CreateNewRole) => {
    onSubmit(data);
  };

  return {
    form,
    handleCreateNewRole,
  };
};
