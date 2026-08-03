"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMembership } from "@/context/MembershipContext";

interface PricingCardProps {
  title: string;
  price: string;
  buttonText: string;
  icon: React.ReactNode;
  badge?: string;
  isFeatured?: boolean;
  features: string[];
  delay?: number;
  onSelectPlan: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  buttonText,
  icon,
  badge,
  isFeatured = false,
  features,
  delay = 0,
  onSelectPlan,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay }}
    className={`group relative w-full rounded-[24px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer select-none ${isFeatured
      ? "bg-[#09090b]/95 backdrop-blur-xl border-2 border-red-600 shadow-[0_0_45px_rgba(220,38,38,0.4)] lg:-translate-y-4 z-20 hover:-translate-y-6 hover:shadow-[0_0_55px_rgba(220,38,38,0.55)] hover:border-red-500"
      : "bg-[#09090b]/85 backdrop-blur-md border border-white/10 hover:border-red-600/60 shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.28)] hover:-translate-y-2 z-10"
      }`}
  >
    {/* Featured "MOST POPULAR" Badge */}
    {badge && (
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30">
        <span className="px-4 py-1.5 rounded-md font-heading text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-white bg-red-600 border border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)]">
          {badge}
        </span>
      </div>
    )}

    {/* Card Top: Red Outline Icon + Title */}
    <div className="flex flex-col items-center text-center">
      {/* Icon */}
      <div className="text-red-500 mb-3 group-hover:scale-110 transition-transform">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-wider text-white group-hover:text-red-500 transition-colors mb-4">
        {title}
      </h3>

      {/* Price */}
      <div className="mb-6 flex items-baseline justify-center space-x-1.5">
        <span className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-white">
          ₹{price}
        </span>
        <span className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">
          / month
        </span>
      </div>

      {/* Features List with Bottom Border Line per Item */}
      <ul className="w-full space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center text-xs sm:text-sm font-body text-gray-200 pb-3 border-b border-white/10 last:border-b-0"
          >
            {/* Red Checkmark Circle Badge */}
            <span className="w-5 h-5 rounded-full border border-red-600/60 bg-red-600/10 flex items-center justify-center text-red-500 text-[10px] font-bold mr-3 flex-shrink-0">
              ✓
            </span>
            <span className="text-left">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Card Footer: CTA Button */}
    <div className="w-full pt-2">
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          onSelectPlan();
        }}
        className={`w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-md font-heading text-xs sm:text-sm font-bold uppercase tracking-widest active:scale-95 transition-all duration-300 cursor-pointer ${isFeatured
          ? "text-white bg-red-600 hover:bg-red-700 shadow-[0_4px_25px_rgba(220,38,38,0.6)] hover:shadow-[0_6px_30px_rgba(220,38,38,0.8)]"
          : "text-white bg-transparent border border-red-600/60 hover:bg-red-600 hover:text-white"
          }`}
      >
        <span>{buttonText}</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </motion.div>
);

export const MembershipSection: React.FC = () => {
  const { selectPlan } = useMembership();

  return (
    <section
      id="membership"
      className="relative w-full pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 flex flex-col justify-start overflow-hidden bg-[#050505] select-none scroll-mt-20"
    >
      {/* Background Layer 1: Huge Faded APEX Red Outline Watermark & Soft Radial Red Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {/* Giant Red Outline Watermark Text "STRONGER" behind Cards */}
        <span className="font-heading font-black text-[16rem] sm:text-[22rem] lg:text-[28rem] text-transparent [-webkit-text-stroke:1.5px_rgba(220,38,38,0.12)] uppercase tracking-widest select-none pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap">
          STRONGER
        </span>

        {/* Soft Radial Deep Red Ambient Glow behind Center Card */}
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-tr from-red-600/25 via-red-900/10 to-transparent rounded-full blur-[150px]" />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/40 to-[#050505] opacity-90" />
      </div>

      {/* Main Container: Centered Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center relative z-10">

        {/* Section Header (Centered with Flanking Red Lines) */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mb-12 sm:mb-16 lg:mb-20">

          {/* Tagline with Flanking Red Lines */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-3 w-full"
          >
            <div className="w-8 h-[1px] bg-red-600/60" />
            <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              MEMBERSHIP
            </span>
            <div className="w-8 h-[1px] bg-red-600/60" />
          </motion.div>

          {/* Large Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight leading-[0.91] text-gray-100"
          >
            CHOOSE YOUR <span className="text-red-600 drop-shadow-[0_0_40px_rgba(220,38,38,0.5)]">LEVEL.</span>
          </motion.h2>

          {/* Short Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-base sm:text-lg text-gray-300 leading-relaxed max-w-md"
          >
            Simple plans designed <br className="hidden sm:inline" />
            for every fitness journey.
          </motion.p>

        </div>

        {/* 3 Pricing Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 w-full max-w-6xl items-stretch relative z-10">

          {/* Card 01: BASIC */}
          <PricingCard
            title="BASIC"
            price="999"
            buttonText="CHOOSE PLAN"
            delay={0.2}
            onSelectPlan={() => selectPlan("Basic Membership")}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
            features={[
              "Gym Access",
              "Locker",
              "Cardio Zone",
            ]}
          />

          {/* Card 02: PRO (FEATURED CENTER CARD - SLIGHTLY DELAYED) */}
          <PricingCard
            title="PRO"
            price="1999"
            buttonText="GET STARTED"
            badge="MOST POPULAR"
            isFeatured={true}
            delay={0.4}
            onSelectPlan={() => selectPlan("Pro Membership")}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            }
            features={[
              "Everything in Basic",
              "Strength Zone",
              "Group Classes",
              "Trainer Support",
            ]}
          />

          {/* Card 03: ELITE */}
          <PricingCard
            title="ELITE"
            price="3499"
            buttonText="CHOOSE PLAN"
            delay={0.3}
            onSelectPlan={() => selectPlan("Elite Membership")}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
            features={[
              "Everything in Pro",
              "Personal Coach",
              "Diet Plan",
              "Priority Support",
            ]}
          />

        </div>

        {/* Bottom Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 sm:mt-20 text-center relative z-10 flex flex-col items-center"
        >
          <p className="font-heading text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.25em] text-white">
            YOUR ONLY COMPETITION <br className="sm:hidden" />
            IS WHO YOU WERE <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">YESTERDAY.</span>
          </p>
          <div className="w-12 h-[2px] bg-red-600 mt-3" />
        </motion.div>

      </div>
    </section>
  );
};
