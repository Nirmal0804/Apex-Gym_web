"use client";

import { useState, useCallback } from "react";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  selectedPlan?: string | null;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface ToastState {
  type: "success" | "error";
  message: string;
}

/**
 * Modular contact form handler.
 * Easily replace or extend with EmailJS, Resend API, or a Next.js API route (/api/contact).
 */
export async function sendContactInquiry(data: ContactFormData): Promise<{ success: boolean; message?: string }> {
  // Simulating async API call (replace with fetch('/api/contact') or EmailJS)
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Default modular success response
  return { success: true, message: "Message sent successfully." };
}

export function useContactForm(selectedPlan?: string | null, clearSelectedPlan?: () => void) {
  const [values, setValues] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const validateField = (name: keyof ContactFormData, value: string): string | undefined => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "email":
        if (!value.trim()) return "Email address is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Please enter a valid email address";
        return undefined;
      case "phone":
        if (!value.trim()) return "Phone number is required";
        const cleanPhone = value.replace(/[\s\-\(\)\+]/g, "");
        if (cleanPhone.length < 10 || !/^\d+$/.test(cleanPhone)) return "Please enter a valid phone number (min 10 digits)";
        return undefined;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear error on change if field becomes valid
    if (errors[name as keyof FormErrors]) {
      const fieldError = validateField(name as keyof ContactFormData, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(values) as (keyof ContactFormData)[]).forEach((field) => {
      if (field !== "selectedPlan") {
        const error = validateField(field, values[field] || "");
        if (error) {
          newErrors[field as keyof FormErrors] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateAll()) return;

    setIsSubmitting(true);
    setToast(null);

    try {
      const payload: ContactFormData = {
        ...values,
        selectedPlan: selectedPlan || null,
      };

      const response = await sendContactInquiry(payload);

      if (response.success) {
        setToast({
          type: "success",
          message: "✓ Message sent successfully.",
        });

        // Reset form
        setValues({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
        if (clearSelectedPlan) clearSelectedPlan();

        // Auto-dismiss toast after 3.5s
        setTimeout(() => {
          setToast(null);
        }, 3500);
      } else {
        throw new Error(response.message || "Unable to send message.");
      }
    } catch (err: any) {
      setToast({
        type: "error",
        message: err.message || "Unable to send message. Please try again.",
      });

      setTimeout(() => {
        setToast(null);
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    toast,
    handleChange,
    handleSubmit,
  };
}
