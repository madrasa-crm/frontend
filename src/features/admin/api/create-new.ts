import { useMutation } from "@tanstack/react-query";

// config
import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";

// types
import type { CreateNewAdmin } from "../model/types/general";

export const createNewAdmin = (onSuccess?: () => void) => {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["admin", "create"],
    mutationFn: async (data: CreateNewAdmin) => {
      return await instance.post(endpoints.admin.createNew, data);
    },
    onSuccess: () => {
      onSuccess?.();
    },
  });

  const createNewAdminMutation = async (data: CreateNewAdmin) => {
    await mutateAsync(data);
  };

  return {
    createNewAdminMutation,
    isPending,
  };
};
