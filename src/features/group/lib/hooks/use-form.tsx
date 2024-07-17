import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { newGroupSchema } from "../../model/schema/general";
import type { CreateNewGroup } from "../../model/types/general";

export const useCreateNewGroupForm = ({
  onSubmit,
}: {
  onSubmit: (data: CreateNewGroup) => void;
}) => {
  const form = useForm<CreateNewGroup>({
    resolver: zodResolver(newGroupSchema),
  });

  const createNewGroupHandler = (data: CreateNewGroup) => {
    onSubmit(data);
  };

  return {
    form,
    createNewGroupHandler,
  };
};
