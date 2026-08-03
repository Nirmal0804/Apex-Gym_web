import React from "react";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  href,
  className = "",
  icon,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl font-heading text-button text-white bg-accent-gradient button-hover shadow-button-red hover:shadow-button-red-hover hover:brightness-110 active:scale-[0.98] transition-all duration-300 cursor-pointer select-none border border-red-500/30";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        <span>{children}</span>
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
