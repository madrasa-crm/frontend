import { useMutation } from "@tanstack/react-query";

// // config
// import { instance } from "@/shared/api/axios-instance";
// import { endpoints } from "@/shared/api/endpoints";

export const signIn = () => {
  const mutation = useMutation<
    unknown,
    unknown,
    {
      phone: string;
      password: string;
    }
  >({
    mutationFn: async (data) => {
      //   return await instance.post<{
      //     phone: string;
      //     password: string;
      //   }>(endpoints.auth.signIn, data);
      console.log(data);
    },
  });

  return mutation;
};
