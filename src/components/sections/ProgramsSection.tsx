"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProgramCardProps {
  number: string;
  title: string;
  subtitle?: string;
  image: string;
  icon: React.ReactNode;
  benefits: string[];
  delay?: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  number,
  title,
  subtitle,
  image,
  icon,
  benefits,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className="group relative w-full h-[280px] sm:h-[300px] bg-[#09090b] backdrop-blur-md border border-red-600/40 hover:border-red-600 rounded-[24px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_0_35px_rgba(220,38,38,0.4)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 cursor-pointer select-none"
  >
    {/* Right-Aligned Image with Smooth Gradient Left Fade Mask */}
    <div className="absolute right-0 top-0 bottom-0 w-[65%] h-full overflow-hidden pointer-events-none">
      <Image
        src={image}
        alt={title}
        width={500}
        height={400}
        priority
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
      />
      {/* Horizontal Gradient Mask: Dark Solid on Left -> Transparent on Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/85 via-40% to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-[#09090b]/40" />
    </div>

    {/* Left-Aligned Card Content */}
    <div className="relative z-10 w-[60%] sm:w-[58%] flex flex-col justify-between h-full">
      <div>
        {/* Giant Faded Number + Red Icon Stack */}
        <div className="relative mb-2">
          <span className="font-heading font-black text-6xl sm:text-7xl text-white/10 group-hover:text-red-500/20 transition-colors leading-none block select-none">
            {number}
          </span>
          <div className="text-red-500 -mt-7 ml-0.5">
            {icon}
          </div>
        </div>

        {/* Card Title */}
        <h3 className="font-heading text-lg sm:text-xl font-black text-white uppercase tracking-wide leading-tight group-hover:text-red-500 transition-colors">
          {title} {subtitle && <><br />{subtitle}</>}
        </h3>

        {/* Thin Red Line Accent */}
        <div className="w-7 h-[2px] bg-red-600 my-2.5 group-hover:w-12 transition-all duration-300" />

        {/* Benefits Bullet Points */}
        <ul className="space-y-1 font-body text-xs sm:text-sm text-gray-300 leading-snug">
          {benefits.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </div>

      {/* Circular Arrow Button (Positioned at Bottom Right of Card) */}
      <div className="absolute bottom-0 right-[-62%] sm:right-[-68%] z-20">
        <div className="w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-300 shadow-md">
          <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

    </div>

  </motion.div>
);

export const ProgramsSection: React.FC = () => {
  return (
    <section
      id="programs"
      className="relative w-full pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 flex flex-col justify-start overflow-hidden bg-[#050505] select-none scroll-mt-20"
    >
      {/* Background Layer 1: Huge Faded APEX Red Outline Watermark & Soft Radial Red Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {/* Giant Red Outline Watermark Text "APEX" behind Left Content */}
        <span className="font-heading font-black text-[16rem] sm:text-[22rem] lg:text-[26rem] text-transparent [-webkit-text-stroke:1.5px_rgba(220,38,38,0.15)] uppercase tracking-wider select-none pointer-events-none absolute left-[-4%] top-[22%] leading-none">
          APEX
        </span>

        {/* Soft Radial Deep Red Ambient Glow */}
        <div className="absolute left-[15%] top-[50%] -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] bg-gradient-to-tr from-red-600/25 via-red-900/10 to-transparent rounded-full blur-[140px]" />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/40 to-[#050505] opacity-90" />
      </div>

      {/* Main Container: 35% Left Column | 65% Right Column 2x2 Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column (35% Width - lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6 text-left relative z-10 lg:sticky lg:top-28">

            {/* Small Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2"
            >
              <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-500">
                PROGRAMS
              </span>
              <span className="text-red-500 font-bold text-xs">●</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight leading-[0.91] text-gray-100"
            >
              TRAIN FOR <br />
              YOUR <span className="text-red-600 drop-shadow-[0_0_40px_rgba(220,38,38,0.5)]">GOAL.</span>
            </motion.h2>

            {/* Short Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-base sm:text-lg text-gray-300 leading-relaxed max-w-sm"
            >
              Choose the training program that matches your fitness journey.
            </motion.p>

          </div>

          {/* Right Column (65% Width - lg:col-span-8): 2x2 Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">

            {/* Card 01: Strength Training */}
            <ProgramCard
              number="01"
              title="STRENGTH"
              subtitle="TRAINING"
              image="/images/program-strength.png"
              benefits={["Build muscle.", "Increase power.", "Lift smarter."]}
              delay={0.2}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
            />

            {/* Card 02: Fat Loss */}
            <ProgramCard
              number="02"
              title="FAT LOSS"
              image="/images/program-fatloss.png"
              benefits={["Burn calories.", "Improve conditioning.", "Stay consistent."]}
              delay={0.3}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              }
            />

            {/* Card 03: Functional Fitness */}
            <ProgramCard
              number="03"
              title="FUNCTIONAL"
              subtitle="FITNESS"
              image="/images/program-functional.png"
              benefits={["Improve mobility.", "Balance.", "Real-world strength."]}
              delay={0.4}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />

            {/* Card 04: Personal Coaching */}
            <ProgramCard
              number="04"
              title="PERSONAL"
              subtitle="COACHING"
              image="/images/program-coaching.png"
              benefits={["One-on-one guidance.", "Customized plans.", "Maximum results."]}
              delay={0.5}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            />

          </div>

        </div>
      </div>

      {/* Bottom CTA Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-full pt-12 pb-6 relative z-20 mt-12 sm:mt-16 flex flex-col items-center"
      >
        {/* Centered Heading with Flanking Horizontal Divider Lines */}
        <div className="flex items-center justify-center space-x-4 w-full max-w-2xl px-4 mb-5">
          <div className="h-[1px] bg-white/10 flex-1" />
          <span className="font-heading text-sm sm:text-base font-bold uppercase tracking-widest text-white whitespace-nowrap">
            READY TO <span className="text-red-600">TRANSFORM?</span>
          </span>
          <div className="h-[1px] bg-white/10 flex-1" />
        </div>

        {/* Solid Red JOIN APEX TODAY Button */}
        <a
          href="#membership"
          className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-md font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 shadow-[0_4px_25px_rgba(220,38,38,0.5)] hover:shadow-[0_6px_30px_rgba(220,38,38,0.7)] active:scale-95 transition-all duration-300 cursor-pointer select-none"
        >
          <span>EXPLORE MEMBERSHIP</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};
