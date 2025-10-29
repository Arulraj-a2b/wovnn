import React from "react";

interface IconProps {
  className?: string;
}

export const SvgPlayCircle: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M21.5 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="#787d8c"
        strokeWidth="2"
      />
      <path
        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
        fill="#787d8c"
      />
    </svg>
  );
};
