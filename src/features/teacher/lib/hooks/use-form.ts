import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// types
import type { CreateNewTeacher } from "../../model/types/general";

// schema
import { createNewTeacherSchema } from "../../model/schema/general";

export const useCreateNewTeacherForm = ({
  onSubmit,
}: {
  onSubmit: (data: CreateNewTeacher) => void;
}) => {
  const form = useForm<CreateNewTeacher>({
    resolver: zodResolver(createNewTeacherSchema),
  });

  const handleCreateNewTeacher = (data: CreateNewTeacher) => {
    onSubmit(data);
  };

  return {
    form,
    handleCreateNewTeacher,
  };
};
