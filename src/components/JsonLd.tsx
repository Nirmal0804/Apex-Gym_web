import React from "react";

export const JsonLd: React.FC = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "name": "APEX FITNESS",
    "image": "https://apexfitness.com/images/about-gym-interior-hd.png",
    "url": "https://apexfitness.com",
    "telephone": "+919876543210",
    "priceRange": "₹999 - ₹3499",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Fitness Street",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "05:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "06:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://instagram.com",
      "https://facebook.com",
      "https://whatsapp.com"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};
