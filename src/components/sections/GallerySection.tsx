"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbox, GalleryItem } from "@/components/ui/Lightbox";

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/images/gallery-1.png",
    alt: "APEX Heavy Lifting Athlete",
    title: "HEAVY LIFTING ZONE",
  },
  {
    src: "/images/gallery-2.png",
    alt: "APEX Dumbbell Rack & Neon Sign",
    title: "DUMBBELL RACK & NEON ATMOSPHERE",
  },
  {
    src: "/images/gallery-3.png",
    alt: "APEX Treadmill Cardio Area",
    title: "HIGH-INTENSITY CARDIO SUITE",
  },
  {
    src: "/images/gallery-4.png",
    alt: "APEX Gym Interior & Squat Racks",
    title: "INDUSTRIAL SQUAT RACK SANCTUARY",
  },
];

export const GallerySection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  return (
    <section
      id="gallery"
      className="relative w-full min-h-[85vh] py-16 sm:py-20 lg:py-24 flex flex-col justify-between overflow-hidden bg-[#050505] select-none"
    >
      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        items={GALLERY_ITEMS}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />

      {/* Background Layer 1: Huge Faded APEX Red Outline Watermark & Soft Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {/* Giant Red Outline Watermark Text "APEX" */}
        <span className="font-heading font-black text-[12rem] sm:text-[18rem] lg:text-[24rem] text-transparent [-webkit-text-stroke:1.5px_rgba(220,38,38,0.12)] uppercase tracking-widest select-none pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap">
          APEX
        </span>

        {/* Soft Radial Ambient Glow */}
        <div className="absolute right-[15%] top-[45%] -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] bg-gradient-to-tr from-red-600/20 via-red-900/10 to-transparent rounded-full blur-[140px]" />
        
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/40 to-[#050505] opacity-90" />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center relative z-10 my-auto">
        
        {/* Section Header (Centered) */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mb-12 sm:mb-16">
          
          {/* Small Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              GALLERY
            </span>
            <span className="text-red-500 font-bold text-xs">●</span>
          </motion.div>

          {/* Large Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight leading-[0.91] text-gray-100"
          >
            THE APEX <span className="text-red-600 drop-shadow-[0_0_40px_rgba(220,38,38,0.5)]">ATMOSPHERE.</span>
          </motion.h2>

          {/* Short Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-base sm:text-lg text-gray-300 leading-relaxed max-w-md"
          >
            Built for focus. Engineered for performance.
          </motion.p>

        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full relative z-10">
          
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="group relative rounded-[20px] overflow-hidden border border-white/10 hover:border-red-600/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(220,38,38,0.35)] hover:-translate-y-1.5 transition-all duration-500 h-64 sm:h-72 lg:h-80 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View ${item.title} in Lightbox`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={500}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity flex items-end p-4">
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title} ↗
                </span>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Ending Centered Premium Brand Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 sm:mt-18 text-center relative z-10 flex flex-col items-center"
        >
          <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-gray-300">
            DISCIPLINE  •  DEDICATION  •  <span className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">DOMINATE.</span>
          </p>
          <div className="w-12 h-[2px] bg-red-600/80 mt-3" />
        </motion.div>

      </div>
    </section>
  );
};
