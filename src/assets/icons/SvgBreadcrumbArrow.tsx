import React from "react";

interface IconProps {
  className?: string;
}

export const SvgBreadcrumbArrow: React.FC<IconProps> = ({
  className = "w-4 h-4",
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="#787d8c"
      transform="rotate(270) scale(1, -1)"
    >
      <path
        d="M6.667 5.833L10.834 10L6.667 14.167"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
