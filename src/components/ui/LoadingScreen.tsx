"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show only on the first visit / page load
    const hasLoaded = sessionStorage.getItem("apex_has_loaded");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("apex_has_loaded", "true");
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden select-none pointer-events-auto"
        >
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          {/* Soft deep-red ambient glow */}
          <div className="absolute w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] bg-gradient-to-tr from-red-600/25 via-red-950/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

          {/* Huge Faded "APEX" Watermark (2% opacity) */}
          <span className="font-heading font-black text-[18rem] sm:text-[28rem] text-white opacity-[0.02] uppercase tracking-widest select-none pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap">
            APEX
          </span>

          {/* Centered Content */}
          <div className="relative z-10 flex flex-col items-center space-y-4">
            
            {/* Step 2: APEX Logo Fades In */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-2.5 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider font-heading"
            >
              <span className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.85)]">APEX</span>
              <span className="text-white">FITNESS</span>
              <span className="w-2 h-2 rounded-full bg-red-600 ml-1" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="font-heading text-xs uppercase tracking-[0.3em] text-gray-400"
            >
              Discipline • Dedication • Dominate
            </motion.p>

            {/* Step 3 & 4: Thin Red Line Grows & Emits Subtle Pulse */}
            <div className="w-36 sm:w-44 h-[2px] bg-white/10 rounded-full overflow-hidden mt-3 relative">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="w-full h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_12px_#dc2626] origin-left"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
