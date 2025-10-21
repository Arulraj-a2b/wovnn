import React from "react";

interface IconProps {
  className?: string;
}

export const SvgChevronRight: React.FC<IconProps> = ({
  className = "w-5 h-5",
}) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 6 11"
    >
      <path
        d="M0 9.98438V0.949219C0 0.316406 0.738281 0 1.19531 0.457031L5.69531 4.95703C5.97656 5.23828 5.97656 5.69531 5.69531 5.97656L1.19531 10.4766C0.738281 10.9336 0 10.6172 0 9.98438Z"
        fill="white"
      />
    </svg>
  );
};
