import { useQuery } from "@tanstack/react-query";

// config
import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";

export const useGetAllRatings = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["rating"],
    queryFn: async () => await instance.get(endpoints.rating.getAll),
  });

  return {
    isLoading,
    isError,
    error,
    data,
  };
};
