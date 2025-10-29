import React from "react";

interface IconProps {
  className?: string;
}

export const SvgClock: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#787d8c" strokeWidth="2" />
      <path
        d="M12 7v5l3 3"
        stroke="#787d8c"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
