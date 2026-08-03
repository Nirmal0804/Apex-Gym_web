import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  as: Component = "span",
}) => {
  return (
    <Component
      className={`bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </Component>
  );
};
