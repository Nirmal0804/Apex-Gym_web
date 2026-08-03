"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastState } from "@/hooks/useContactForm";

interface ToastProps {
  toast: ToastState | null;
}

export const Toast: React.FC<ToastProps> = ({ toast }) => {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full px-5 py-4 rounded-xl bg-[#09090b]/95 backdrop-blur-xl border border-red-600/80 text-white shadow-[0_0_35px_rgba(220,38,38,0.45)] flex items-center space-x-3 select-none"
          role="alert"
        >
          <div className="w-8 h-8 rounded-full bg-red-600/20 border border-red-600/50 flex items-center justify-center text-red-500 text-sm font-bold flex-shrink-0">
            {toast.type === "success" ? "✓" : "✕"}
          </div>
          <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-100 flex-1">
            {toast.message}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
