import { useQuery } from "@tanstack/react-query";

// config
import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { GetAllGroups } from "../model/types/general";

export const getAllGroups = () => {
  const { data, isLoading, isError, error } = useQuery<
    AxiosResponse<GetAllGroups[]>
  >({
    queryKey: ["group"],
    queryFn: async () => instance.get(endpoints.group.getAll),
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
