import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { CreateNewGroup } from "../model/types/general";

export const createNewGroup = (onSuccess: () => void) => {
  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["group", "new"],
    mutationFn: async (data: CreateNewGroup) => {
      return await instance.post(endpoints.group.createNew, data);
    },
    onSuccess(data, variables, context) {
      onSuccess();
    },
    onError(error, variables, context) {
      toast.error("Что то пошло не так");
    },
  });

  const handleCreateNewGroup = (data: CreateNewGroup) => {
    mutateAsync(data);
  };

  return {
    isPending,
    handleCreateNewGroup,
  };
};
