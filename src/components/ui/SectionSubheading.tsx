import React from "react";

interface SectionSubheadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionSubheading: React.FC<SectionSubheadingProps> = ({
  children,
  className = "",
}) => {
  return (
    <p
      className={`text-body text-gray-400 font-body leading-relaxed max-w-2xl ${className}`}
    >
      {children}
    </p>
  );
};
