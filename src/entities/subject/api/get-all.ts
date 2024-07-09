import { useQuery } from "@tanstack/react-query";

// config
import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { GetAllSubjects } from "../model/types/general";

export const getAllSubjects = () => {
  const { data, isLoading, isError, error } = useQuery<
    AxiosResponse<GetAllSubjects[]>
  >({
    queryKey: ["subject"],
    queryFn: async () => instance.get(endpoints.subject.getAll),
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
