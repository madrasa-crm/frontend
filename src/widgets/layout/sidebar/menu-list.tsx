import { Link } from "@tanstack/react-router";

// utils
import { cn } from "@/shared/lib/helpers/utils";

// store
import { useCore } from "@/shared/model/use-core";

// types
import type { Menu } from "@/shared/model/use-core/types/menu";

// components
import { Button } from "@/shared/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";
import { CollapseMenuButton } from "./collapse-menu-button";

export const MenuList = ({ menus }: { menus: Menu[] }) => {
  const isOpen = useCore((state) => state.sidebarOpen);

  return menus.map(({ href, label, icon: Icon, active, submenus }, index) =>
    submenus.length === 0 ? (
      <div className="w-full" key={index}>
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Button
                variant={active ? "activeSidebarLink" : "ghost"}
                className="w-full justify-start h-10 mb-1"
                asChild
              >
                <Link to={href}>
                  <span className={cn(isOpen === false ? "" : "mr-4")}>
                    <Icon size={18} />
                  </span>
                  <p
                    className={cn(
                      "max-w-[200px] truncate",
                      isOpen === false
                        ? "-translate-x-96 opacity-0"
                        : "translate-x-0 opacity-100",
                    )}
                  >
                    {label}
                  </p>
                </Link>
              </Button>
            </TooltipTrigger>
            {isOpen === false && (
              <TooltipContent side="right">{label}</TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
    ) : (
      <div className="w-full" key={index}>
        <CollapseMenuButton
          icon={Icon}
          label={label}
          active={active}
          submenus={submenus}
          isOpen={isOpen}
        />
      </div>
    ),
  );
};
