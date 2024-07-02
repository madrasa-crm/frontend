// components
import { Sidebar } from "@/widgets/layout/sidebar";

// store
import { useCore } from "@/shared/model/use-core";

// utils
import { cn } from "@/helpers/utils";
import { Header } from "../header/header";

export const AdminPanelLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const sidebarOpen = useCore((state) => state.sidebarOpen);

  return (
    <>
      <Sidebar />

      <div
        className={cn(
          "min-h-[100vh] transition-[margin-left] border ease-in-out duration-300 ",
          sidebarOpen === false ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </>
  );
};
