// components
import { ModeToggle } from "@/components/mode-toggle";
import { UserMenu } from "@/widgets/layout/user-menu";

export const Header = () => {
  return (
    <div className="flex justify-between items-center bg-secondary p-3">
      <div className="flex ml-auto gap-4 rounded-lg p-2 mr-3">
        <ModeToggle />
        <UserMenu />
      </div>
    </div>
  );
};
