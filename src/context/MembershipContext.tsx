"use client";

import React, { createContext, useContext, useState } from "react";

interface MembershipContextType {
  selectedPlan: string | null;
  selectPlan: (planName: string) => void;
  clearPlan: () => void;
  isFormHighlighted: boolean;
}

const MembershipContext = createContext<MembershipContextType>({
  selectedPlan: null,
  selectPlan: () => {},
  clearPlan: () => {},
  isFormHighlighted: false,
});

export const MembershipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isFormHighlighted, setIsFormHighlighted] = useState(false);

  const selectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsFormHighlighted(true);

    // Scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    // Focus on contact form first input
    setTimeout(() => {
      const nameInput = document.getElementById("fullNameInput") as HTMLInputElement;
      if (nameInput) {
        nameInput.focus({ preventScroll: true });
      }
    }, 800);

    // Highlight form container for 1 second
    setTimeout(() => {
      setIsFormHighlighted(false);
    }, 1800);
  };

  const clearPlan = () => {
    setSelectedPlan(null);
  };

  return (
    <MembershipContext.Provider
      value={{
        selectedPlan,
        selectPlan,
        clearPlan,
        isFormHighlighted,
      }}
    >
      {children}
    </MembershipContext.Provider>
  );
};

export const useMembership = () => useContext(MembershipContext);
