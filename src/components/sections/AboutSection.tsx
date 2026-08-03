"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: React.ReactNode;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from, to, duration = 2, suffix }) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease Out Cubic
        setCount(Math.floor(easeProgress * (to - from) + from));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      {count}
      {suffix}
    </span>
  );
};

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description, icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className="bg-[#09090b]/80 backdrop-blur-md border border-white/10 rounded-[18px] p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-red-600/50 hover:shadow-[0_0_25px_rgba(220,38,38,0.3)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
  >
    {/* Card Top Row: Circle Icon + Red Number */}
    <div className="flex items-center space-x-3 mb-3">
      <div className="w-10 h-10 rounded-full bg-red-600/10 border border-red-600/40 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="font-heading text-2xl font-black tracking-tight text-red-500">
        {number}
      </span>
    </div>

    {/* Card Content */}
    <div>
      <h3 className="font-heading text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-1.5 group-hover:text-red-500 transition-colors">
        {title}
      </h3>
      <p className="font-body text-xs text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 flex flex-col justify-start overflow-hidden bg-[#050505] select-none scroll-mt-20"
    >
      {/* Background Layer 1: Huge Faded APEX Watermark & Ambient Red Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {/* Faded Watermark Text "APEX" (Upper-Left Watermark behind heading) */}
        <span className="font-heading font-black text-[14rem] sm:text-[22rem] lg:text-[28rem] text-white/[0.03] uppercase tracking-[0.2em] select-none pointer-events-none absolute left-[-5%] top-[5%] leading-none">
          APEX
        </span>

        {/* Soft Radial Deep Red Ambient Glow behind image/content */}
        <div className="absolute right-[5%] top-[40%] -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] bg-gradient-to-tr from-red-600/25 via-red-900/15 to-transparent rounded-full blur-[140px]" />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/40 to-[#050505] opacity-90" />
      </div>

      {/* Main Container: Left Content | Right Gym Interior Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column (48% Width - lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left relative z-10">

            {/* Small Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2"
            >
              <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-500">
                ABOUT US
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
              BUILT FOR <br />
              THOSE WHO <br />
              WANT <span className="text-red-600 drop-shadow-[0_0_40px_rgba(220,38,38,0.5)]">MORE.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-base sm:text-lg text-gray-300 leading-relaxed max-w-md"
            >
              APEX Fitness isn’t just another gym. <br />
              We combine expert coaching, premium equipment, <br className="hidden sm:inline" />
              and a results-driven environment to help you <br className="hidden sm:inline" />
              become stronger every single day.
            </motion.p>

            {/* 3 Feature Cards Row (Staggered by 0.1s) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-3">
              <FeatureCard
                number="01"
                title="ELITE EQUIPMENT"
                description="Industry-leading machines built for performance."
                delay={0.3}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                }
              />

              <FeatureCard
                number="02"
                title="CERTIFIED COACHES"
                description="Experienced trainers focused on real progress."
                delay={0.4}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                }
              />

              <FeatureCard
                number="03"
                title="RESULTS FOCUSED"
                description="Training plans designed around your goals."
                delay={0.5}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
            </div>

          </div>

          {/* Right Column (52% Width - lg:col-span-6): Gym Interior Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 flex items-center justify-center relative z-10 mt-6 lg:mt-0"
          >
            <div className="relative w-full rounded-[32px] overflow-hidden border-2 border-red-600/80 shadow-[0_0_50px_rgba(220,38,38,0.4)] group">
              <Image
                src="/images/about-gym-interior-hd.png"
                alt="APEX FITNESS Luxury Gym Interior with Neon Red Sign"
                width={800}
                height={800}
                priority
                className="w-full h-auto object-cover max-h-[500px] sm:max-h-[560px] lg:max-h-[620px] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Soft Ambient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Statistics Row with Counter Animation */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full border-t border-white/10 bg-[#030303]/90 backdrop-blur-md py-8 relative z-20 mt-12 sm:mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center items-center divide-y md:divide-y-0 md:divide-x divide-white/10">

          {/* Stat 1: Animated 1500+ */}
          <div className="flex flex-col items-center pt-4 md:pt-0">
            <span className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight flex items-baseline">
              <AnimatedCounter
                from={0}
                to={1500}
                duration={2}
                suffix={<span className="text-red-500 font-bold text-3xl sm:text-4xl ml-0.5">+</span>}
              />
            </span>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mt-2">
              MEMBERS
            </span>
          </div>

          {/* Stat 2: Animated 12 */}
          <div className="flex flex-col items-center pt-4 md:pt-0">
            <span className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight">
              <AnimatedCounter from={0} to={12} duration={1.8} />
            </span>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mt-2">
              EXPERT COACHES
            </span>
          </div>

          {/* Stat 3: Animated 8 YRS */}
          <div className="flex flex-col items-center pt-4 md:pt-0">
            <span className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight flex items-baseline">
              <AnimatedCounter
                from={0}
                to={8}
                duration={1.5}
                suffix={<span className="text-red-500 font-heading font-black text-xl sm:text-2xl tracking-wide ml-1.5">YEARS</span>}
              />
            </span>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mt-2">
              EXPERIENCE
            </span>
          </div>

          {/* Stat 4: 24/7 (Fade in only, no counting!) */}
          <div className="flex flex-col items-center pt-4 md:pt-0">
            <span className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight flex items-baseline">
              24<span className="text-red-500 font-bold text-3xl sm:text-4xl mx-0.5">/</span>7
            </span>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mt-2">
              ACCESS
            </span>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
