# DETTROIN Technical Assessment - School Website Redesign (Round 1)

This repository contains a modern, professional, and user-friendly redesign of the **Krishna International School, Aligarh** website.

## Candidate & Submission Details

- **Full Name**: Kaustubh Kumbhare
- **Intern ID**: DETTROIN-INT
- **Email Address**: kaustubh.kumbhare23@pccoepune.com
- **GitHub Username**: kaustubhk02
- **Selected Website**: [https://kisaligarh.com/](https://kisaligarh.com/)
- **Repository Name**: `DETTROIN-INT-Kaustubh-SchooWebsite`
- **Live Demo Link**: [https://dettroin-int-kaustubh-schoo-website.vercel.app](https://dettroin-int-kaustubh-schoo-website.vercel.app)

---

## 🛠️ Technologies Used

- **Core**: React 19, HTML5, JavaScript (ESNext)
- **Styling & Design System**: Tailwind CSS v4 (`@tailwindcss/vite`), Custom CSS Design Tokens
- **Icons**: Lucide React
- **Build Tool**: Vite 8

---

## 🌟 Key Improvements Made

### 1. Light & Welcoming Design System (UI)
- **Light Theme Shift**: Replaced legacy dark background shades with a warm soft cream background (`#FFFDF9`), clean white cards, royal blue accents (`#1D4ED8`), and sunny amber highlights (`#FEF3C7`).
- **High-Legibility Typography**: Crisp slate typography (`#0F172A` headings, `#475569` body text) for high contrast and readability across all screens.

### 2. Beginner-Friendly UX & Navigation
- **Top Announcement & Contact Bar**: Quick contact helpline (`+91 98765 43210`), email, and an animated `Admissions Open 2026-27` status badge.
- **Interactive Admission Inquiry Pop-up Modal**: Clickable "Apply Admissions" buttons across all pages open an instant counselor inquiry form with instant submission confirmation.
- **4-Step Admission Process**: Beginner-friendly guide mapping out the entire enrollment journey (Inquiry $\rightarrow$ Campus Visit $\rightarrow$ Discussion $\rightarrow$ Enrollment).
- **Parent FAQ Accordion**: Interactive Q&A answering top parent questions regarding age criteria, school timings, transport safety, and fee payment.
- **Core Philosophy ("GREAT" Citizen)**: Incorporates the school's core motto (**G**iving, **R**especting, **E**xcelling, **A**ttitude, **T**hinking).

### 3. Full Mobile Responsiveness
- **Mobile Drawer Navigation**: Touch-friendly hamburger drawer featuring expandable category accordions and big tap targets.
- **Fluid Layout Grids**: Multi-column layouts scale smoothly from 1 column on mobile to 4 columns on desktop screens.

---

## 📂 Folder Structure

```text
src/
├── assets/          # Optimized image assets
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── ui/          # InquiryModal, reusable UI elements
│   └── sections/    # Hero, StatsBar, WhyChooseUs, Academics, Admissions, Gallery, Faq
├── styles/          # Custom utility styles
├── App.jsx          # Main application container
└── main.jsx         # Application entry point
```

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/kaustubhk02/DETTROIN-INT-Kaustubh-SchooWebsite.git
   cd DETTROIN-INT-Kaustubh-SchooWebsite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```