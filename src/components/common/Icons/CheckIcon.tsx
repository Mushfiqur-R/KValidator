import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const GreenCheckIcon = ({ 
  size = 24, 
  className = "", 
  ...props 
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="#00C48C" 
      strokeWidth="1.36"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7.2635 13.3161C10.5924 13.3161 13.3161 10.5924 13.3161 7.2635C13.3161 3.93459 10.5924 1.21094 7.2635 1.21094C3.93459 1.21094 1.21094 3.93459 1.21094 7.2635C1.21094 10.5924 3.93459 13.3161 7.2635 13.3161Z" />
      <path d="M4.69043 7.26366L6.40331 8.97653L9.83511 5.55078" />
    </svg>
  );
};