import React from "react";

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-mask opacity-60" />

      {/* Subtle Ambient Red Glow Orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-[500px] h-[400px] bg-red-900/5 blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
};
