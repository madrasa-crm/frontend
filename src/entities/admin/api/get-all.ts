import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

// config
import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";

// types
import type { Admin } from "../model/types/general";

export const getAll = () => {
  const { data, isLoading, isFetching, isError, error } = useQuery<
    AxiosResponse<Admin[]>
  >({
    queryKey: ["admin"],
    queryFn: async () => {
      return await instance.get(endpoints.admin.getAll);
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
