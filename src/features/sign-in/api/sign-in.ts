import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import type { AxiosResponse } from "axios";

//  config
import { instance } from "@/shared/api/axios-instance";
import { endpoints } from "@/shared/api/endpoints";

// store
import { useCore } from "@/shared/model/use-core";

export const signIn = () => {
  const navigate = useNavigate();
  const setUserToken = useCore((state) => state.setUserToken);
  const mutation = useMutation<
    {
      token: string;
      message: string;
    },
    unknown,
    {
      phone: string;
      password: string;
    }
  >({
    mutationFn: async (data) => {
      const req = await instance.post<
        {
          token: string;
          message: string;
        },
        AxiosResponse<{
          message: string;
          token: string;
        }>,
        {
          phone: string;
          password: string;
        }
      >(endpoints.auth.signIn, data);
      return req.data;
    },
    onSuccess: (data) => {
      setUserToken(data.token);
      navigate({
        to: "/",
      });
    },
  });

  return mutation;
};
