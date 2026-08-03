export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "APEX FITNESS",
  description: "Built for focus. Engineered for performance. Reach your peak at APEX FITNESS.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://apexfitness.com",
  ogImage: "/images/about-gym-interior-hd.png",

  contact: {
    address: process.env.NEXT_PUBLIC_GYM_ADDRESS || "123 Fitness Street, Chennai, Tamil Nadu",
    phone: process.env.NEXT_PUBLIC_GYM_PHONE || "+91 98765 43210",
    email: process.env.NEXT_PUBLIC_GYM_EMAIL || "hello@apexfitness.com",
    whatsapp: process.env.NEXT_PUBLIC_GYM_WHATSAPP || "+919876543210",
    mapsUrl:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
      "https://maps.google.com/?q=123+Fitness+Street+Chennai",
    workingHours: {
      weekdays: process.env.NEXT_PUBLIC_HOURS_WEEKDAYS || "Mon–Fri: 5:00 AM – 10:00 PM",
      weekends: process.env.NEXT_PUBLIC_HOURS_WEEKENDS || "Sat–Sun: 6:00 AM – 9:00 PM",
    },
  },

  social: {
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "https://instagram.com",
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "https://facebook.com",
    whatsapp: process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP || "https://whatsapp.com",
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "https://youtube.com",
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "https://linkedin.com",
  },

  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  },
};
