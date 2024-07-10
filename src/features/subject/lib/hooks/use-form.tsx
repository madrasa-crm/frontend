import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { newSubjectSchema } from "../../model/schema/general";
import type { CreateNewSubject } from "../../model/types/general";

export const useCreateNewSubjectForm = ({
  onSubmit,
}: {
  onSubmit: (data: CreateNewSubject) => void;
}) => {
  const form = useForm<CreateNewSubject>({
    resolver: zodResolver(newSubjectSchema),
  });

  const createNewSubjectHandler = (data: CreateNewSubject) => {
    onSubmit(data);
  };

  return {
    form,
    createNewSubjectHandler,
  };
};
