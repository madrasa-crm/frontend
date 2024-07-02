import { Outlet } from "@tanstack/react-router";
import { Suspense } from "react";

// components
import { ProgressLoader } from "@/shared/ui/suspense-loader";
import { AdminPanelLayout } from "@/widgets/layout/root";

const Cabinet = () => {
  const LazyLoad = ProgressLoader();
  return (
    <AdminPanelLayout>
      <Suspense fallback={<LazyLoad />}>
        <Outlet />
      </Suspense>
    </AdminPanelLayout>
  );
};

export default Cabinet;
