import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { CreateNewSubject } from "../model/types/general";

export const createNewSubject = (onSuccess: () => void) => {
  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["subject", "new"],
    mutationFn: async (data: CreateNewSubject) => {
      return await instance.post(endpoints.subject.createNew, data);
    },
    onSuccess(data, variables, context) {
      onSuccess();
    },
    onError(error, variables, context) {
      toast.error("Xatolik yuz berdi");
    },
  });

  const handleCreateNewSubject = (data: CreateNewSubject) => {
    mutateAsync(data);
  };

  return {
    isPending,
    handleCreateNewSubject,
  };
};
