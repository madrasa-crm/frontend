import { Link } from "@tanstack/react-router";

// components
import { AppLogo } from "@/shared/icons/app-logo";
import { cn } from "@/shared/lib/helpers/utils";
import { useCore } from "@/shared/model/use-core";
import { Menu } from "./menu";
import { SidebarToggle } from "./sidebar-toggle-button";

export const Sidebar = () => {
  const sidebarOpen = useCore((state) => state.sidebarOpen);
  const setSidebarOpen = useCore((state) => state.setSidebarOpen);

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        sidebarOpen === false ? "w-[90px]" : "w-72",
      )}
    >
      <SidebarToggle isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Link to="/cabinet">
          <AppLogo
            className={cn(
              "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300 ml-3 mt-3",
              sidebarOpen === false
                ? "-translate-x-96 opacity-0 hidden"
                : "translate-x-0 opacity-100",
            )}
          />
        </Link>
        <Menu isOpen={sidebarOpen} />
      </div>
    </aside>
  );
};
