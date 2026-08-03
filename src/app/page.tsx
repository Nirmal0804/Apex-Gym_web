import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { MembershipSection } from "@/components/sections/MembershipSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Programs Section */}
      <ProgramsSection />

      {/* 4. Membership Section */}
      <MembershipSection />

      {/* 5. Gallery Section */}
      <GallerySection />

      {/* 6. Contact Section */}
      <ContactSection />
    </div>
  );
}
