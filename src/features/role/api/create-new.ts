import { useMutation } from "@tanstack/react-query";

// config
import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";

// types
import { CreateNewRole } from "../model/types/general";

export const createNewRole = (onSuccess?: () => void) => {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["role", "create"],
    mutationFn: async (data: CreateNewRole) => {
      return await instance.post(endpoints.role.createNew, data);
    },
    onSuccess: () => {
      onSuccess?.();
    },
  });

  const createNewRoleMutation = async (data: CreateNewRole) => {
    await mutateAsync(data);
  };

  return {
    createNewRoleMutation,
    isPending,
  };
};
