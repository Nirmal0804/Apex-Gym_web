import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "APEX FITNESS | Premium High-Performance Gym",
    short_name: "APEX FITNESS",
    description: "Built for focus. Engineered for performance. Reach your peak at APEX FITNESS.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
