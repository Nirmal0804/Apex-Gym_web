"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Animate loading screen once per session
    const hasLoaded = sessionStorage.getItem("apex_has_loaded");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("apex_has_loaded", "true");
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden select-none pointer-events-auto"
        >
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          {/* Soft Red Ambient Radial Glow */}
          <div className="absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-red-600/30 via-red-900/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

          {/* Centered Brand Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center space-y-4"
          >
            <div className="flex items-center space-x-2 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider font-heading">
              <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.8)]">APEX</span>
              <span className="text-white">FITNESS</span>
              <span className="w-2 h-2 rounded-full bg-red-600 ml-1 animate-ping" />
            </div>

            <p className="font-heading text-xs uppercase tracking-[0.3em] text-gray-400">
              Discipline • Dedication • Dominate
            </p>

            {/* Animated Loading Bar */}
            <div className="w-36 sm:w-44 h-0.5 bg-white/10 rounded-full overflow-hidden mt-3 relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_12px_#dc2626]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
