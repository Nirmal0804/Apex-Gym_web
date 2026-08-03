import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  showDot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  showDot = true,
  className = "",
}) => {
  const variantStyles = {
    default:
      "bg-[#0F0F10] border border-white/10 text-gray-300 shadow-sm",
    accent:
      "bg-red-950/40 border border-red-600/30 text-red-400 shadow-[0_0_15px_-3px_rgba(220,38,38,0.2)]",
    outline:
      "bg-transparent border border-white/15 text-gray-400",
  };

  return (
    <span
      className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-heading font-medium uppercase tracking-widest transition-colors ${variantStyles[variant]} ${className}`}
    >
      {showDot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === "accent" ? "bg-red-500 animate-pulse" : "bg-red-600"
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
};
