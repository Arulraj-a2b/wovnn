import React from "react";

interface IconProps {
  className?: string;
}

export const SvgArea: React.FC<IconProps> = ({ className = "w-4 h-4" }) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 18 18">
      <g clip-path="url(#clip0_2001_550)">
        <path
          d="M3.3 17.25L0.75 14.7V13.95L3.75 12.45L6.75 13.95V14.7L4.2 17.25H3.3ZM13.95 6.75L12.45 3.75L13.95 0.75H14.7L17.25 3.3V4.2L14.7 6.75H13.95Z"
          fill="#F0F5FF"
        />
        <path
          d="M14.4 1.5L16.5 3.6V3.825L14.4 6L13.35 3.825L13.275 3.75L13.35 3.675L14.4 1.5ZM3.75 13.275L3.825 13.35L6 14.4L3.9 16.5H3.6L1.5 14.4L3.675 13.35L3.75 13.275ZM15 0H13.5L12 3H3V12L0 13.5V15L3 18H4.5L7.5 15V13.5L4.5 12V4.5H12L13.5 7.5H15L18 4.5V3L15 0ZM18 7.5H16.5V9H18V7.5ZM18 10.5H16.5V12H18V10.5ZM18 13.5H16.5V15H18V13.5ZM18 16.5H16.5V18H18V16.5ZM15 16.5H13.5V18H15V16.5ZM12 16.5H10.5V18H12V16.5ZM9 16.5H7.5V18H9V16.5Z"
          fill="#22A9E0"
        />
      </g>
      <defs>
        <clipPath id="clip0_2001_550">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
