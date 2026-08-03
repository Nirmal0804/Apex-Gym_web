import React from "react";

interface DividerProps {
  className?: string;
  accent?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  className = "",
  accent = false,
}) => {
  if (accent) {
    return (
      <div className={`relative w-full my-8 flex items-center justify-center ${className}`}>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626]" />
      </div>
    );
  }

  return (
    <hr
      className={`w-full border-t border-white/10 my-8 ${className}`}
    />
  );
};
