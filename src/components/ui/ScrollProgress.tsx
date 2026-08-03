"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_10px_#dc2626] z-[100] origin-left pointer-events-none"
    />
  );
};
