import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | APEX FITNESS",
  description: "The requested page does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4 overflow-hidden select-none">
      
      {/* Background Layer: Grid Pattern & Red Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {/* Giant Watermark "APEX" */}
        <span className="font-heading font-black text-[16rem] sm:text-[24rem] lg:text-[32rem] text-transparent [-webkit-text-stroke:1.5px_rgba(220,38,38,0.12)] uppercase tracking-widest select-none pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap">
          APEX
        </span>

        {/* Soft Radial Ambient Glow */}
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-red-600/30 via-red-900/15 to-transparent rounded-full blur-[150px]" />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/40 to-[#050505] opacity-90" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center space-y-6 my-auto">
        
        {/* Giant 404 Header */}
        <div className="relative">
          <h1 className="font-heading text-8xl sm:text-[13rem] font-black tracking-tighter text-white/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
              PAGE <span className="text-red-600 drop-shadow-[0_0_35px_rgba(220,38,38,0.6)]">NOT FOUND.</span>
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-base sm:text-lg text-gray-300 max-w-md leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-md font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 shadow-[0_4px_25px_rgba(220,38,38,0.45)] hover:shadow-[0_6px_30px_rgba(220,38,38,0.65)] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>← BACK HOME</span>
          </Link>

          <Link
            href="/#programs"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-md font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-transparent border border-white/20 hover:border-white/60 hover:bg-white/5 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>BROWSE WEBSITE →</span>
          </Link>
        </div>

      </div>

      {/* Footer copyright note */}
      <div className="relative z-10 py-6 text-center text-xs font-body text-gray-500">
        © 2026 APEX FITNESS. All rights reserved.
      </div>

    </div>
  );
}
