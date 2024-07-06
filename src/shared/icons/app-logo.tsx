import type { ComponentProps } from "react";

export const AppLogo = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="43"
      height="35"
      viewBox="0 0 70 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.8568 7.52513L19.0298 56.4773H8.85632L30.0544 0H36.5531L35.8568 7.52513ZM49.9372 56.4773L33.0716 7.52513L32.3367 0H38.874L60.1494 56.4773H49.9372Z"
        fill="currentColor"
      />
      <path
        d="M0 32.9343L8.04598 24.2046L33.9523 35.5532L61.5385 24.2046L70 32.9343L34.6971 46.6133C34.2189 46.7986 33.6878 46.7931 33.2136 46.598L0 32.9343Z"
        fill="#11B695"
      />
    </svg>
  );
};
