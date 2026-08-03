import React from "react";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  children,
  className = "",
  containerClassName = "",
  fullWidth = false,
}) => {
  return (
    <section
      id={id}
      className={`w-full py-20 sm:py-28 md:py-32 relative overflow-hidden ${className}`}
    >
      {fullWidth ? (
        <div className={`w-full ${containerClassName}`}>{children}</div>
      ) : (
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
        >
          {children}
        </div>
      )}
    </section>
  );
};
