import NProgress from "nprogress";
import { useEffect } from "react";

export const ProgressLoader = () => {
  const LazyLoad = () => {
    useEffect(() => {
      NProgress.start();

      return () => {
        NProgress.done();
      };
    }, []);

    return null;
  };

  return LazyLoad;
};
