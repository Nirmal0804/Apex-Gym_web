"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMembership } from "@/context/MembershipContext";
import { useContactForm } from "@/hooks/useContactForm";
import { Toast } from "@/components/ui/Toast";
import { siteConfig } from "@/config/site";

export const ContactSection: React.FC = () => {
  const { selectedPlan, clearPlan, isFormHighlighted } = useMembership();
  const { values, errors, isSubmitting, toast, handleChange, handleSubmit } = useContactForm(selectedPlan, clearPlan);

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-16 sm:py-20 lg:py-24 flex flex-col justify-between overflow-hidden bg-[#050505] select-none"
    >
      {/* Toast Notification Container */}
      <Toast toast={toast} />

      {/* Background Layer 1: Huge Faded APEX Red Outline Watermark & Soft Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {/* Faded Watermark Text "APEX" */}
        <span className="font-heading font-black text-[14rem] sm:text-[22rem] lg:text-[28rem] text-transparent [-webkit-text-stroke:1.5px_rgba(220,38,38,0.12)] uppercase tracking-widest select-none pointer-events-none absolute left-[5%] top-[15%] leading-none">
          APEX
        </span>

        {/* Soft Radial Deep Red Ambient Glow */}
        <div className="absolute right-[10%] top-[45%] -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] bg-gradient-to-tr from-red-600/25 via-red-900/10 to-transparent rounded-full blur-[140px]" />
        
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/40 to-[#050505] opacity-90" />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center relative z-10 my-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4 max-w-2xl mb-12 sm:mb-16">
          
          {/* Small Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              CONTACT
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
            READY TO <br />
            START <span className="text-red-600 drop-shadow-[0_0_40px_rgba(220,38,38,0.5)]">TODAY?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg"
          >
            Visit APEX Fitness or get in touch with our team. We're here to help you start your fitness journey.
          </motion.p>

        </div>

        {/* Grid Layout: Left Column (40%) | Right Column (60%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
          
          {/* Left Column (40% Width - lg:col-span-5): Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col space-y-4"
          >
            
            {/* Info Card 1: Location */}
            <div className="bg-[#09090b]/85 backdrop-blur-md border border-white/10 hover:border-red-600/60 rounded-2xl p-5 flex items-start space-x-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(220,38,38,0.25)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-red-500 mb-1">
                  LOCATION
                </h4>
                <p className="font-body text-sm text-gray-200 leading-relaxed">
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>

            {/* Google Maps Link Card */}
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#09090b]/85 backdrop-blur-md border border-red-600/40 hover:border-red-600 rounded-2xl p-4 flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-white hover:text-red-500 shadow-[0_5px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(220,38,38,0.3)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <span className="text-red-500 text-sm">📍</span>
                <span>View on Google Maps</span>
              </div>
              <svg className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Info Card 2: Phone */}
            <div className="bg-[#09090b]/85 backdrop-blur-md border border-white/10 hover:border-red-600/60 rounded-2xl p-5 flex items-start space-x-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(220,38,38,0.25)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-red-500 mb-1">
                  PHONE
                </h4>
                <p className="font-body text-sm text-gray-200">
                  {siteConfig.contact.phone}
                </p>
              </div>
            </div>

            {/* Info Card 3: Email */}
            <div className="bg-[#09090b]/85 backdrop-blur-md border border-white/10 hover:border-red-600/60 rounded-2xl p-5 flex items-start space-x-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(220,38,38,0.25)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-red-500 mb-1">
                  EMAIL
                </h4>
                <p className="font-body text-sm text-gray-200">
                  {siteConfig.contact.email}
                </p>
              </div>
            </div>

            {/* Info Card 4: Working Hours */}
            <div className="bg-[#09090b]/85 backdrop-blur-md border border-white/10 hover:border-red-600/60 rounded-2xl p-5 flex items-start space-x-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(220,38,38,0.25)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-red-500 mb-1">
                  WORKING HOURS
                </h4>
                <p className="font-body text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {siteConfig.contact.workingHours.weekdays} <br />
                  {siteConfig.contact.workingHours.weekends}
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column (60% Width - lg:col-span-7): Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={`lg:col-span-7 bg-[#09090b]/90 backdrop-blur-xl border rounded-[24px] p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.8)] relative z-10 transition-all duration-500 ${
              isFormHighlighted
                ? "border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.4)] scale-[1.01]"
                : "border-white/15"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white">
                SEND A MESSAGE
              </h3>

              {/* Prefilled Plan Badge (if plan selected) */}
              {selectedPlan && (
                <span className="px-3 py-1 rounded-md font-heading text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white bg-red-600/20 border border-red-600/50 flex items-center space-x-1">
                  <span className="text-red-500">★</span>
                  <span>{selectedPlan}</span>
                </span>
              )}
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Hidden selected plan field */}
              <input type="hidden" name="selectedPlan" value={selectedPlan || ""} />

              {/* Full Name */}
              <div>
                <label htmlFor="fullNameInput" className="block font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  FULL NAME
                </label>
                <input
                  id="fullNameInput"
                  name="fullName"
                  type="text"
                  value={values.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullNameError" : undefined}
                  className={`w-full rounded-xl bg-[#050505]/80 border px-4 py-3.5 text-white font-body text-sm placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                    errors.fullName
                      ? "border-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                      : "border-white/15 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  }`}
                />
                {errors.fullName && (
                  <span id="fullNameError" className="text-red-500 text-xs font-body mt-1.5 block">
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* Email Address & Phone Number Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="emailInput" className="block font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="emailInput"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "emailError" : undefined}
                    className={`w-full rounded-xl bg-[#050505]/80 border px-4 py-3.5 text-white font-body text-sm placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.email
                        ? "border-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                        : "border-white/15 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    }`}
                  />
                  {errors.email && (
                    <span id="emailError" className="text-red-500 text-xs font-body mt-1.5 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneInput" className="block font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    PHONE NUMBER
                  </label>
                  <input
                    id="phoneInput"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phoneError" : undefined}
                    className={`w-full rounded-xl bg-[#050505]/80 border px-4 py-3.5 text-white font-body text-sm placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.phone
                        ? "border-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                        : "border-white/15 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    }`}
                  />
                  {errors.phone && (
                    <span id="phoneError" className="text-red-500 text-xs font-body mt-1.5 block">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="messageInput" className="block font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="messageInput"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "messageError" : undefined}
                  className={`w-full rounded-xl bg-[#050505]/80 border px-4 py-3.5 text-white font-body text-sm placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                      : "border-white/15 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  }`}
                />
                {errors.message && (
                  <span id="messageError" className="text-red-500 text-xs font-body mt-1.5 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Send Button with Loading Spinner */}
              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Send Message"
                className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-md font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 disabled:opacity-75 disabled:cursor-not-allowed shadow-[0_4px_25px_rgba(220,38,38,0.45)] hover:shadow-[0_6px_30px_rgba(220,38,38,0.65)] active:scale-95 transition-all duration-300 cursor-pointer select-none w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
