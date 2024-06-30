import { Outlet } from "@tanstack/react-router";

// widgets
import { AdminPanelLayout } from "@/widgets/layout/root";

const Cabinet = () => {
  return (
    <AdminPanelLayout>
      <Outlet />
    </AdminPanelLayout>
  );
};

export default Cabinet;
