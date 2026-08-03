"use client";

import React, { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
}

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentItem = items[currentIndex];
  const touchStartX = useRef<number | null>(null);

  // Keyboard navigation & ESC key handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Preload adjacent images
  useEffect(() => {
    if (!isOpen || items.length <= 1) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    const nextIndex = (currentIndex + 1) % items.length;

    const imgPrev = new window.Image();
    imgPrev.src = items[prevIndex].src;

    const imgNext = new window.Image();
    imgNext.src = items[nextIndex].src;
  }, [isOpen, currentIndex, items]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        onNext(); // Swiped left -> next
      } else {
        onPrev(); // Swiped right -> prev
      }
    }
    touchStartX.current = null;
  };

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 lg:p-10 select-none"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox Viewer"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close Lightbox"
          className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:text-red-500 hover:border-red-600/60 hover:bg-red-600/20 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Previous Image Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous Image"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:text-red-500 hover:border-red-600/60 hover:bg-red-600/20 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Image Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next Image"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:text-red-500 hover:border-red-600/60 hover:bg-red-600/20 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image & Title Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        >
          <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
              className="object-contain"
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
              {currentItem.title}
            </h3>
            <p className="font-heading text-xs uppercase tracking-widest text-red-500 mt-1">
              {currentIndex + 1} / {items.length}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
