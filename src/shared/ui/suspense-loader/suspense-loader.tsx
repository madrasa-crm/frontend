import { CircleLoader } from "@/shared/icons/circle-loader";

export const SuspenseLoader = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <CircleLoader />
    </section>
  );
};