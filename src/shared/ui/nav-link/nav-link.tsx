import { Link, type LinkOptions } from "@tanstack/react-router";

// utils
import { cn } from "@/helpers/utils";

interface NavLinkProps extends LinkOptions {
  activeClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

export const NavLink = ({
  className,
  activeClassName,
  to,
  ...props
}: NavLinkProps) => {
  return (
    <Link
      className={cn(
        "w-full flex items-center space-x-2 hover:text-primary-foreground hover:bg-accent py-2 px-2 rounded-lg transition-colors",
        className,
      )}
      activeProps={{
        className: cn("bg-primary text-primary-foreground", activeClassName),
      }}
      to={to}
      {...props}
    />
  );
};
