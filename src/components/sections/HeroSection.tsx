"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] lg:min-h-screen pt-0 sm:pt-1 lg:pt-2 pb-4 flex flex-col justify-between overflow-hidden bg-[#050505] select-none"
    >
      {/* Background Layer 1: Dark Base + Grid */}
      {/* Background Layer 2: Soft Deep Red Ambient Radial Glow & Soft Vignette */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft Radial Deep-Red Glow behind the athlete */}
        <div className="absolute right-[5%] sm:right-[10%] top-[40%] -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] bg-gradient-to-tr from-red-600/30 via-red-900/20 to-transparent rounded-full blur-[140px]" />

        {/* Soft Vignette & Subtle Volumetric Atmosphere */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/40 to-[#050505] opacity-90" />
      </div>

      {/* Main Container: 42% Left Content | 58% Right Bodybuilder & Glassmorphic Stat Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 my-auto">

        {/* Left Column (42% Width - lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-6 text-left relative z-30 -mt-20 sm:-mt-24 lg:-mt-28">

          {/* Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-red-500"
          >
            WELCOME TO APEX
          </motion.span>

          {/* Main Massive Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-5xl sm:text-7xl lg:text-[5.85rem] font-black uppercase tracking-tight leading-[0.91] text-gray-100"
          >
            REACH YOUR <br />
            <span className="text-red-600 drop-shadow-[0_0_40px_rgba(220,38,38,0.5)]">
              PEAK.
            </span>
          </motion.h1>

          {/* Subtitle (Quattrocento font) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-lg sm:text-xl text-gray-300 leading-relaxed max-w-md"
          >
            Train harder. <br />
            Move smarter. <br />
            Become stronger.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1 w-full sm:w-auto"
          >
            <a
              href="#membership"
              className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-md font-heading text-xs sm:text-sm font-semibold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 shadow-[0_4px_25px_rgba(220,38,38,0.45)] hover:shadow-[0_6px_30px_rgba(220,38,38,0.65)] active:scale-95 transition-all duration-300 cursor-pointer select-none"
            >
              <span>JOIN NOW</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#membership"
              className="inline-flex items-center justify-center px-7 py-4 rounded-md font-heading text-xs sm:text-sm font-semibold uppercase tracking-widest text-white bg-transparent border border-white/25 hover:border-white/60 hover:bg-white/5 active:scale-95 transition-all duration-300 cursor-pointer select-none"
            >
              VIEW MEMBERSHIP
            </a>
          </motion.div>
        </div>

        {/* Right Column (58% Width - lg:col-span-7): Centered Bodybuilder + Staggered Glassmorphic Stat Cards */}
        <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-center z-10 -mt-16 lg:-mt-24">

          {/* Bodybuilder Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl flex items-center justify-center mx-auto lg:-translate-x-48 xl:-translate-x-68"
          >
            <Image
              src="/images/hero-athlete-isolated.png"
              alt="APEX FITNESS Bodybuilder"
              width={995}
              height={680}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 995px"
              className="w-full h-auto object-contain max-h-[760px] sm:max-h-[860px] lg:max-h-[960px] scale-120 sm:scale-125 lg:scale-135 drop-shadow-[0_25px_60px_rgba(220,38,38,0.35)] transition-transform duration-500 ease-out hover:scale-[1.38]"
            />

            {/* Soft Feathered Bottom Gradient Line */}
            <div className="absolute inset-x-0 -bottom-16 sm:-bottom-20 lg:-bottom-22 translate-x-28 lg:translate-x-44 h-24 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none z-10" />
          </motion.div>

          {/* Floating Glassmorphic Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:flex flex-col space-y-4 absolute -right-2 lg:-right-6 xl:-right-10 top-[38%] -translate-y-1/2 z-20 w-48 sm:w-52"
          >

            {/* Stat Card 1 */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/15 rounded-2xl p-4 flex items-center space-x-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:border-red-600/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300 group cursor-pointer lg:-translate-x-1"
            >
              <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-600/40 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div className="font-heading text-xl font-extrabold text-white tracking-wide">800+</div>
                <div className="font-heading text-[10px] uppercase tracking-widest text-gray-400">MEMBERS</div>
              </div>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/15 rounded-2xl p-4 flex items-center space-x-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:border-red-600/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300 group cursor-pointer lg:translate-x-5"
            >
              <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-600/40 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="font-heading text-xl font-extrabold text-white tracking-wide">12</div>
                <div className="font-heading text-[10px] uppercase tracking-widest text-gray-400">CERTIFIED COACHES</div>
              </div>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/15 rounded-2xl p-4 flex items-center space-x-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:border-red-600/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300 group cursor-pointer lg:-translate-x-2"
            >
              <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-600/40 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-heading text-xl font-extrabold text-white tracking-wide">24/7</div>
                <div className="font-heading text-[10px] uppercase tracking-widest text-gray-400">VIP ACCESS</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Full-Width Bottom Motivational Ticker Bar */}
      <div className="w-full border-t border-b border-white/10 bg-[#030303]/90 backdrop-blur-md py-3.5 relative z-30 -mt-16 sm:-mt-20 lg:-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-4 text-xs sm:text-sm font-heading font-semibold uppercase tracking-[0.25em]">
          <span className="text-gray-400">DISCIPLINE.</span>
          <span className="text-gray-400">DEDICATION.</span>
          <span className="text-red-500">DOMINATE.</span>
          <span className="w-10 h-[2px] bg-red-600 ml-2" />
        </div>
      </div>
    </section>
  );
};
