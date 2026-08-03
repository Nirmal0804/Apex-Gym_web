/**
 * APEX FITNESS — Centralized Design System Tokens
 * Single source of truth for colors, typography, layout, borders, shadows, animations, and z-index values.
 */

export const COLORS = {
  primaryBg: "#050505",
  secondaryBg: "#0F0F10",
  surface: "#141416",
  textPrimary: "#FFFFFF",
  textSecondary: "#D1D5DB",
  textMuted: "#9CA3AF",
  accentRed: "#DC2626",
  accentRedDark: "#7F1D1D",
  accentRedLight: "#EF4444",
  accentGradient: {
    from: "#DC2626",
    via: "#991B1B",
    to: "#7F1D1D",
    css: "linear-gradient(135deg, #DC2626 0%, #7F1D1D 100%)",
  },
  borderDefault: "rgba(255, 255, 255, 0.1)",
  borderLight: "rgba(255, 255, 255, 0.05)",
  borderAccent: "rgba(220, 38, 38, 0.4)",
  hoverBg: "rgba(255, 255, 255, 0.05)",
  hoverAccent: "#EF4444",
  status: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },
} as const;

export const TYPOGRAPHY = {
  fonts: {
    heading: "var(--font-oswald), sans-serif",
    body: "var(--font-quattrocento), Georgia, serif",
  },
  scales: {
    heroTitle: {
      fontSize: "clamp(2.5rem, 6vw + 1rem, 5.5rem)",
      fontWeight: "700",
      lineHeight: "1.05",
      letterSpacing: "0.025em",
      textTransform: "uppercase",
    },
    sectionTitle: {
      fontSize: "clamp(2rem, 4vw + 0.5rem, 3.75rem)",
      fontWeight: "700",
      lineHeight: "1.1",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
    cardTitle: {
      fontSize: "clamp(1.25rem, 2vw + 0.25rem, 1.75rem)",
      fontWeight: "600",
      lineHeight: "1.25",
      letterSpacing: "0.025em",
      textTransform: "uppercase",
    },
    body: {
      fontSize: "clamp(0.95rem, 1vw + 0.5rem, 1.125rem)",
      fontWeight: "400",
      lineHeight: "1.75",
      letterSpacing: "0em",
    },
    smallText: {
      fontSize: "0.875rem",
      fontWeight: "400",
      lineHeight: "1.5",
      letterSpacing: "0em",
    },
    buttonText: {
      fontSize: "0.95rem",
      fontWeight: "600",
      lineHeight: "1",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
  },
} as const;

export const LAYOUT = {
  maxContainerWidth: "1280px", // max-w-7xl
  sectionPadding: {
    desktop: "8rem", // py-32
    tablet: "7rem",  // py-28
    mobile: "5rem",  // py-20
  },
  containerPadding: {
    desktop: "2rem", // px-8
    tablet: "1.5rem", // px-6
    mobile: "1rem",   // px-4
  },
  gap: {
    small: "1rem",   // gap-4
    medium: "1.5rem",// gap-6
    large: "2rem",   // gap-8
    xlarge: "3rem",  // gap-12
  },
  cardGap: "1.5rem",
} as const;

export const BORDER_RADIUS = {
  small: "0.25rem",  // 4px
  medium: "0.5rem",  // 8px
  large: "0.75rem",  // 12px
  xlarge: "1rem",    // 16px
  full: "9999px",
} as const;

export const SHADOWS = {
  small: "0 2px 8px -2px rgba(0, 0, 0, 0.5)",
  medium: "0 10px 30px -15px rgba(0, 0, 0, 0.8)",
  large: "0 20px 40px -20px rgba(0, 0, 0, 0.95)",
  glow: "0 0 25px -5px rgba(220, 38, 38, 0.35)",
  buttonGlow: "0 4px 20px -4px rgba(220, 38, 38, 0.35)",
  buttonGlowHover: "0 8px 25px -4px rgba(220, 38, 38, 0.5)",
} as const;

export const BORDERS = {
  default: "1px solid rgba(255, 255, 255, 0.1)",
  light: "1px solid rgba(255, 255, 255, 0.05)",
  accent: "1px solid rgba(220, 38, 38, 0.4)",
} as const;

export const ANIMATION = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  easing: {
    default: "cubic-bezier(0.16, 1, 0.3, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "ease-out",
  },
  hoverScale: 1.02,
  activeScale: 0.98,
  cardLiftY: "-6px",
  buttonLiftY: "-2px",
  fadeDistanceY: "20px",
  mouseTiltMaxDeg: 10,
} as const;

export const TRANSITIONS = {
  fast: "all 150ms ease-out",
  normal: "all 300ms ease-out",
  slow: "all 500ms ease-out",
} as const;

export const Z_INDEX = {
  background: 0,
  grid: 1,
  content: 10,
  navbar: 50,
  overlay: 90,
  modal: 100,
} as const;

export const BREAKPOINTS = {
  mobile: "640px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1280px",
  largeDesktop: "1536px",
} as const;

export const BLUR = {
  navbar: "12px",
  glass: "16px",
  overlay: "24px",
} as const;

export const OPACITY = {
  disabled: 0.5,
  border: 0.08,
  grid: 0.03,
  overlay: 0.85,
} as const;

export const DESIGN_TOKENS = {
  colors: COLORS,
  typography: TYPOGRAPHY,
  layout: LAYOUT,
  borderRadius: BORDER_RADIUS,
  shadows: SHADOWS,
  borders: BORDERS,
  animation: ANIMATION,
  transitions: TRANSITIONS,
  zIndex: Z_INDEX,
  breakpoints: BREAKPOINTS,
  blur: BLUR,
  opacity: OPACITY,
} as const;

export default DESIGN_TOKENS;
