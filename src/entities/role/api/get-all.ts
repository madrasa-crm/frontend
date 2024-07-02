import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

// config
import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";

// types
import type { GetAllRoles } from "../model/types/general";

export const getAll = () => {
  const { data, isLoading, isFetching, isError, error } = useQuery<
    AxiosResponse<GetAllRoles[]>
  >({
    queryKey: ["role"],
    queryFn: async () => {
      return await instance.get(endpoints.role.getAll);
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
