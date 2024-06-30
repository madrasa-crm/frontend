import { instance } from "@/shared/api/axios-instance";

export const logout = () => {
  return {
    handleLogout: async () => {
      await instance.post("/auth/logout");
    },
  };
};
