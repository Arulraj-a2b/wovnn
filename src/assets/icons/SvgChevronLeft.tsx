import React from "react";

interface IconProps {
  className?: string;
}

export const SvgChevronLeft: React.FC<IconProps> = ({
  className = "w-4 h-4",
}) => {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 7 11">
      <path
        d="M6.01172 0.949219V9.98438C6.01172 10.6172 5.23828 10.9336 4.78125 10.4766L0.28125 5.97656C0 5.69531 0 5.23828 0.28125 4.95703L4.78125 0.457031C5.23828 0 6.01172 0.316406 6.01172 0.949219Z"
        fill="#22A9E0"
      />
    </svg>
  );
};
