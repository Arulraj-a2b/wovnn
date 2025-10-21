import React from "react";

interface IconProps {
  className?: string;
  filled?: boolean;
}

export const SvgStar: React.FC<IconProps> = ({
  className = "w-[13px] h-[13px]",
  filled = true,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke={filled ? "none" : "currentColor"}
        strokeWidth={filled ? 0 : 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
