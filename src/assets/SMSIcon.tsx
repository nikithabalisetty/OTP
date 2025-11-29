import React from "react";

interface SMSIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

const SMSIcon: React.FC<SMSIconProps> = ({
  width = 18,
  height = 18,
  className = "otp-icon",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="12" y2="14" />
    </svg>
  );
};

export default SMSIcon;
