import { useCore } from "../model/use-core";

export const onRequest = (config: any) => {
  const token = useCore.getState().userToken;

  if (token) {
    const authToken = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };

    return {
      ...config,
      headers: authToken,
    };
  }

  return {
    ...config.headers,
    ...config,
  };
};
