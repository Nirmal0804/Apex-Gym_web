import type { Metadata } from "next";
import { Oswald, Quattrocento } from "next/font/google";
import "./globals.css";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { MembershipProvider } from "@/context/MembershipContext";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const quattrocento = Quattrocento({
  variable: "--font-quattrocento",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "APEX FITNESS | Premium High-Performance Gym",
  description:
    "APEX FITNESS landing page wireframe blueprint built with Next.js, Tailwind CSS, smooth scrolling, and dark minimal aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${quattrocento.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#050505] text-[#f9fafb] font-body relative leading-relaxed"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <MembershipProvider>
            <BackgroundGrid />
            <Navbar />
            <main className="flex-1 w-full relative z-10">{children}</main>
            <Footer />
          </MembershipProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
