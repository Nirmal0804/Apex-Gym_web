"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Programs", href: "#programs", id: "programs" },
  { name: "Plans", href: "#membership", id: "membership" },
  { name: "Gallery", href: "#gallery", id: "gallery" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Navbar background change after 40px scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // IntersectionObserver to track active section in viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      NAV_ITEMS.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030303]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/60 py-3"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero", "hero")}
          aria-label="APEX FITNESS Home"
          className="group flex items-center space-x-2 text-xl sm:text-2xl font-bold tracking-wider uppercase text-white font-heading transition-opacity hover:opacity-90 cursor-pointer"
        >
          <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent font-black">
            APEX
          </span>
          <span className="text-white">FITNESS</span>
          <span className="w-2 h-2 rounded-full bg-red-600 group-hover:animate-ping" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3.5 py-2 text-sm font-medium tracking-wider uppercase font-heading transition-colors duration-200 rounded-md cursor-pointer ${
                    isActive
                      ? "text-red-500 font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-red-600 rounded-full shadow-[0_0_8px_#dc2626]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <a
            href="#membership"
            onClick={(e) => handleNavClick(e, "#membership", "membership")}
            className="px-5 py-2 rounded-lg font-heading text-xs font-semibold uppercase tracking-widest text-white border border-red-600/60 bg-red-950/40 hover:bg-red-600 shadow-[0_0_15px_-3px_rgba(220,38,38,0.4)] hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all duration-300 cursor-pointer"
          >
            JOIN NOW
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-2">
          <nav aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`block px-4 py-3 text-lg font-medium rounded-lg uppercase tracking-wider font-heading transition-colors cursor-pointer ${
                    isActive
                      ? "bg-red-600/15 text-red-500 border-l-4 border-red-600 pl-3 font-semibold"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
