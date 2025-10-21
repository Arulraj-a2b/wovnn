import React from "react";

interface IconProps {
  className?: string;
}

export const SvgArrowDown: React.FC<IconProps> = ({
  className = "w-[15px] h-[15px]",
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 2.5L7.5 12.5M7.5 12.5L12.5 7.5M7.5 12.5L2.5 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
