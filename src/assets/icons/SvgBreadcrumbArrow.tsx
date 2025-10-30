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
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.49756 5C7.49718 5.19471 7.56497 5.38341 7.68916 5.53334L11.4213 10L7.82245 14.475C7.53242 14.8323 7.58683 15.3571 7.94398 15.6472C7.94512 15.6482 7.94627 15.6491 7.94741 15.65V15.65C8.30456 15.9401 8.82921 15.8857 9.11925 15.5284C9.12018 15.5273 9.1211 15.5262 9.12202 15.525L13.1457 10.525H13.1457C13.3984 10.2175 13.3984 9.77417 13.1457 9.46667L8.9804 4.46667C8.68676 4.11236 8.16159 4.06326 7.80739 4.35701C7.80686 4.35745 7.80632 4.35789 7.80579 4.35834C7.61229 4.51536 7.49921 4.75077 7.49756 5H7.49756Z"
        fill="#80C342"
      />
    </svg>
  );
};
