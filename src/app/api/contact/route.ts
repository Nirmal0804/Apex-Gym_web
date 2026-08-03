import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message, selectedPlan, botField } = body;

    // 1. Honeypot Spam Protection
    if (botField) {
      return NextResponse.json(
        { success: false, error: "Spam submission detected" },
        { status: 400 }
      );
    }

    // 2. Server-side Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Full name must be at least 2 characters" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Invalid email address format" },
        { status: 400 }
      );
    }

    const cleanPhone = (phone || "").replace(/[\s\-\(\)\+]/g, "");
    if (!phone || cleanPhone.length < 10 || !/^\d+$/.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, error: "Invalid phone number (minimum 10 digits)" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // 3. Email Integration Handler (Resend / EmailJS / SMTP)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "APEX FITNESS <onboarding@resend.dev>",
          to: [process.env.BUSINESS_EMAIL || siteConfig.contact.email],
          subject: `New Gym Inquiry: ${fullName} ${selectedPlan ? `(${selectedPlan})` : ""}`,
          html: `
            <h2>New Inquiry Received from Website</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Selected Plan:</strong> ${selectedPlan || "General Inquiry"}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        }),
      });

      if (!emailResponse.ok) {
        const errData = await emailResponse.json();
        console.error("Resend API error:", errData);
      }
    } else {
      // Production fallback logger when RESEND_API_KEY is not set in env
      console.log("Inquiry received [Development Mode]:", {
        fullName,
        email,
        phone,
        message,
        selectedPlan,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { success: true, message: "Inquiry sent successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
