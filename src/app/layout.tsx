import type { Metadata, Viewport } from "next";
import { Oswald, Quattrocento } from "next/font/google";
import "./globals.css";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { MembershipProvider } from "@/context/MembershipContext";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const quattrocento = Quattrocento({
  variable: "--font-quattrocento",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://apexfitness.com"),
  title: {
    default: "APEX FITNESS | Premium High-Performance Gym in Chennai",
    template: "%s | APEX FITNESS",
  },
  description:
    "Experience elite strength training, personal coaching, and state-of-the-art equipment at APEX FITNESS. Built for focus. Engineered for performance.",
  keywords: [
    "APEX FITNESS",
    "Luxury Gym Chennai",
    "High Performance Fitness",
    "Personal Training Chennai",
    "Strength Training",
    "Fat Loss Gym",
    "Elite Fitness Facility",
  ],
  authors: [{ name: "APEX Fitness Team" }],
  creator: "APEX FITNESS",
  publisher: "APEX FITNESS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "APEX FITNESS | Reach Your Peak",
    description:
      "Built for focus. Engineered for performance. Train with certified coaches in Chennai's premier fitness facility.",
    url: "https://apexfitness.com",
    siteName: "APEX FITNESS",
    images: [
      {
        url: "/images/about-gym-interior-hd.png",
        width: 1200,
        height: 630,
        alt: "APEX FITNESS Gym Interior with Neon Red Sign",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX FITNESS | Reach Your Peak",
    description:
      "Built for focus. Engineered for performance. Join APEX FITNESS today.",
    images: ["/images/about-gym-interior-hd.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <head>
        <JsonLd />
        <Analytics />
      </head>
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
