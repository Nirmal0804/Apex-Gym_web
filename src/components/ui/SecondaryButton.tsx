import React from "react";

interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  href,
  className = "",
  icon,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl font-heading text-button text-white bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 button-hover active:scale-[0.98] transition-all duration-300 cursor-pointer select-none";

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
