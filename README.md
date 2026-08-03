# APEX FITNESS — High-Performance Gym Website

[![Next.js](https://img.shields.io/badge/Next.js-16.2.12-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

A luxury, high-performance web application designed for **APEX FITNESS**. Built with Next.js (App Router), Tailwind CSS v4, Lenis smooth scrolling, Framer Motion animations, and production-ready SEO optimizations.

---

## ⚡ Key Features

- **Luxury Industrial Aesthetic**: Matte Black (`#050505`) dark mode, deep red (`#DC2626`) accents, technical background grid, and radial ambient glows.
- **60FPS Smooth Scrolling**: Integrated with Lenis smooth scroll and active navigation tracking via `IntersectionObserver`.
- **Framer Motion Micro-Interactions**: Viewport entrance reveals, floating stat cards, and statistics counter animations (`1500+`, `12`, `8 YRS`).
- **Interactive Lightbox Gallery**: Fullscreen image viewer with keyboard navigation (`←`, `→`, `ESC`), touch swipe gestures, and image preloading.
- **Form Validation & Membership Prefill**: Real-time client & server validation, loading spinner state, toast notifications, honeypot spam protection, and plan prefilling.
- **Production SEO & Security**: OpenGraph preview cards, LocalBusiness JSON-LD schema, dynamic `sitemap.xml`, `robots.txt`, Web App Manifest, and security headers.

---

## 📁 Folder Structure

```text
Gym web/
├── public/
│   ├── images/               # High-resolution gym & athlete images
│   └── favicon.ico           # Website favicon
├── src/
│   ├── app/
│   │   ├── api/contact/      # Contact Form API Route (Resend API)
│   │   ├── manifest.ts       # Web App Manifest generator
│   │   ├── robots.ts         # Robots.txt generator
│   │   ├── sitemap.ts        # Sitemap XML generator
│   │   ├── globals.css       # Tailwind CSS & custom styling rules
│   │   ├── layout.tsx        # Root layout, metadata & providers
│   │   └── page.tsx          # Main landing page
│   ├── components/
│   │   ├── sections/         # Hero, About, Programs, Membership, Gallery, Contact
│   │   ├── ui/               # Lightbox, Toast, Buttons, Badges, Cards
│   │   ├── Analytics.tsx     # GA4, GTM, Meta Pixel integration
│   │   ├── Footer.tsx        # Minimal brand footer
│   │   └── Navbar.tsx        # Sticky navbar & active section indicator
│   ├── config/
│   │   └── site.ts           # Centralized business information & social URLs
│   ├── context/
│   │   └── MembershipContext.tsx  # Membership selection & scroll state
│   └── hooks/
│       └── useContactForm.ts # Real-time validation & submit hook
├── .env.example              # Environment variables template
├── next.config.ts            # Next.js & Security Headers configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.17.0`
- npm `>= 9.0.0`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nirmal0804/Apex-Gym_web.git
   cd Apex-Gym_web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## ⚙️ Configuration & Environment Variables

All business details can be edited from `src/config/site.ts` or through environment variables in `.env.local`:

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_NAME` | Business / Gym Name | `APEX FITNESS` |
| `NEXT_PUBLIC_GYM_ADDRESS` | Gym Address | `123 Fitness Street, Chennai, Tamil Nadu` |
| `NEXT_PUBLIC_GYM_PHONE` | Contact Phone Number | `+91 98765 43210` |
| `NEXT_PUBLIC_GYM_EMAIL` | Contact Email | `hello@apexfitness.com` |
| `NEXT_PUBLIC_GOOGLE_MAPS_URL` | Google Maps Link | `https://maps.google.com/?q=123+Fitness+Street+Chennai` |
| `RESEND_API_KEY` | Resend API Key for Email Sending | *(Optional)* |
| `NEXT_PUBLIC_GA_ID` | Google Analytics GA4 ID | *(Optional)* |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID | *(Optional)* |

---

## 🛠️ Building for Production

To create an optimized production build:

```bash
npm run build
```

To test the production build locally:

```bash
npm run start
```

---

## 🌐 Deploying to Vercel

1. Push your code to GitHub:
   ```bash
   git push origin main
   ```

2. Import the project on [Vercel](https://vercel.com/new).
3. Select **Next.js** framework preset.
4. Add environment variables from `.env.example` in the Vercel project settings.
5. Click **Deploy**.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
