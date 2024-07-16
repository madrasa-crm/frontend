import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

// config
import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";

// types
import type { Student } from "../model/types/general";

export const getAll = () => {
  const { data, isLoading, isFetching, isError, error } = useQuery<
    AxiosResponse<Student[]>
  >({
    queryKey: ["student"],
    queryFn: async () => {
      return await instance.get(endpoints.student.getAll);
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
