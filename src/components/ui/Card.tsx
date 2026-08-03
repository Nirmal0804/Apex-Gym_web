import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverable = true,
}) => {
  return (
    <div
      className={`bg-[#0F0F10] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-card-subtle ${
        hoverable ? "card-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
