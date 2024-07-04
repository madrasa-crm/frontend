import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

// config
import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";

// types
import type { Teacher } from "../model/types/general";

export const getAll = () => {
  const { data, isLoading, isFetching, isError, error } = useQuery<
    AxiosResponse<Teacher[]>
  >({
    queryKey: ["teacher"],
    queryFn: async () => {
      return await instance.get(endpoints.teacher.getAll);
    },
  });

  return {
    data,
    isLoading,
    isFetching,
    isError,
    error,
  };
};
