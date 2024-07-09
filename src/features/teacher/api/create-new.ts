import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

// config
import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";

// types
import type { CreateNewTeacher } from "../model/types/general";

export const createNewTeacher = (onSuccess?: () => void) => {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["teacher", "create"],
    mutationFn: async (data: CreateNewTeacher) => {
      return await instance.post(endpoints.teacher.createNew, data);
    },
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error: AxiosError) => {
      // console.log(
      //   ,
      // );
      toast.error(
        (error.response?.data as any)?.data?.error || "Что-то пошло не так!",
      );
    },
  });

  const createNewTeacherMutation = async (data: CreateNewTeacher) => {
    await mutateAsync(data);
  };

  return {
    createNewTeacherMutation,
    isPending,
  };
};
