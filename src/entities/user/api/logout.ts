import { useNavigate } from "@tanstack/react-router";

// store
import { useCore } from "@/shared/model/use-core";

export const logout = () => {
  const navigate = useNavigate();
  const reset = useCore((state) => state.reset);
  return {
    handleLogout: async () => {
      reset();
      navigate({
        to: "/",
      });
    },
  };
};
