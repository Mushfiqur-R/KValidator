import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ShieldIcon = ({ 
  size = 24, 
  className = "", 
  ...props 
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="#F4CD4D" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 6.25V8.25" />
      <path d="M10 6.25V8.25" />
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" />
      <path d="M6 16V18" />
      <path d="M10 16V18" />
      <path d="M14 7.25H18" />
      <path d="M14 17H18" />
      <path d="M2 12H22" />
    </svg>
  );
};