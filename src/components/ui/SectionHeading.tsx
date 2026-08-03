import React from "react";
import { GradientText } from "./GradientText";

interface SectionHeadingProps {
  children: React.ReactNode;
  accentText?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  accentText,
  as: Component = "h2",
  className = "",
}) => {
  return (
    <Component
      className={`text-section-title text-white tracking-wider font-heading uppercase ${className}`}
    >
      {children}
      {accentText && (
        <>
          {" "}
          <GradientText>{accentText}</GradientText>
        </>
      )}
    </Component>
  );
};
