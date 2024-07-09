// components
import { ModeToggle } from "@/components/mode-toggle";
import { UserMenu } from "@/widgets/layout/user-menu";

export const Header = () => {
  return (
    <div className="flex justify-between items-center py-3 px-6 border-b">
      <div className="flex ml-auto gap-4 rounded-lg  mr-3">
        <ModeToggle />
        <UserMenu />
      </div>
    </div>
  );
};
