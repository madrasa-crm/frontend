import { LogOut } from "lucide-react";

// api
import { logout } from "@/entities/user";

// utils
import { cn } from "@/shared/lib/helpers/utils";

// store
import { useCore } from "@/shared/model/use-core";

// components
import { Button } from "@/shared/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";

export const SidebarLogout = () => {
  const { handleLogout } = logout();
  const isOpen = useCore((state) => state.sidebarOpen);
  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            onClick={() => handleLogout()}
            variant="outline"
            className="w-full justify-center h-10 mt-5"
          >
            <span className={cn(isOpen === false ? "" : "mr-4")}>
              <LogOut size={18} />
            </span>
            <p
              className={cn(
                "whitespace-nowrap",
                isOpen === false ? "opacity-0 hidden" : "opacity-100",
              )}
            >
              Выйти
            </p>
          </Button>
        </TooltipTrigger>
        {isOpen === false && (
          <TooltipContent side="right">Выйти</TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
