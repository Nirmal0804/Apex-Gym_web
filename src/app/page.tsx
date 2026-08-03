import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { MembershipSection } from "@/components/sections/MembershipSection";

// Dynamic Imports for Non-Critical Below-the-Fold Sections (Code Splitting & Bundle Optimization)
const GallerySection = dynamic(
  () => import("@/components/sections/GallerySection").then((mod) => mod.GallerySection),
  { ssr: true }
);

const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then((mod) => mod.ContactSection),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Hero Section (Preloaded & Above-the-fold) */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Programs Section */}
      <ProgramsSection />

      {/* 4. Membership Section */}
      <MembershipSection />

      {/* 5. Gallery Section (Dynamically Loaded) */}
      <GallerySection />

      {/* 6. Contact Section (Dynamically Loaded) */}
      <ContactSection />
    </div>
  );
}
