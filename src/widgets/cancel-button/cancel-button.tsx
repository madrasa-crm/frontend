import { type LinkProps, useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";

// components
import { Button } from "@/shared/ui/button";

// types
import type { ButtonProps } from "@/shared/ui/button";

export const CancelButton = ({
  to,
  cancelFn,
  ...props
}: {
  to: LinkProps["to"];
  cancelFn?: () => void;
} & ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (cancelFn) {
      cancelFn();
    } else {
      navigate({ to });
    }
  }, [cancelFn, navigate, to]);

  return (
    <Button onClick={handleClick} {...props}>
      Отмена
    </Button>
  );
};
