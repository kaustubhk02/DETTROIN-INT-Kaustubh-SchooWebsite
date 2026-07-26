# DETTROIN Technical Assessment - School Website Redesign (Round 1)

This repository contains a modern, professional, and user-friendly redesign of the **Krishna International School, Aligarh** website ([https://kisaligarh.com/](https://kisaligarh.com/)).

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

## 🌟 Key Improvements Over the Original Website (`kisaligarh.com`)

| Aspect | Original Website (`kisaligarh.com`) | Our Redesigned Website |
| :--- | :--- | :--- |
| **Navigation Header** | Lacked a structured header navbar; relied on an unorganized side menu overlay without quick dropdowns or contact bar. | **Full-Width Glassmorphic Navbar**: Top helpline bar (`+91 98765 43210`), glowing admission badge, structured dropdown cards, and active page pill highlights. |
| **Color Theme & UI** | Overly dark `#0c0d16` black background with hard neon green text, creating a gloomy feel unsuitable for a school. | **Warm Light Aesthetic**: Soft cream background (`#FFFDF9`), clean white cards, high-contrast slate text, and sunny amber/emerald accents. |
| **User Experience (UX)** | Poor UX; critical parent information (fee structure, admission steps, FAQs) was scattered or difficult to locate. | **Dedicated Page Architecture**: Clean routing (`/`, `/about`, `/admissions`, `/academics`, `/gallery`, `/contact`) with a concise, clutter-free Homepage overview. |
| **Mobile Responsiveness** | Broken mobile layout with overlapping elements, awkward side drawer glitches, and horizontal scrolling issues. | **100% Mobile Responsive**: Touch-optimized hamburger drawer, 44px+ tap targets, expandable accordions, and fluid edge-to-edge grids. |
| **Visual Quality** | Low-resolution, unoptimized banner images with poor aspect ratios. | **High-Definition Visual Assets**: Generated photorealistic campus, classroom, sports, and library imagery. |
| **Interactivity** | Static pages with no instant contact options or interactive forms. | **Interactive Features**: 4-Step Admission Guide, instant pop-up Counselor Inquiry Modal, Parent FAQ Accordion, and Parent Testimonials. |

---

## 📂 Project Folder Structure

```text
src/
├── assets/          # High-res optimized campus images
├── components/
│   ├── layout/      # Navbar (Header), Footer
│   ├── ui/          # InquiryModal (Pop-up form)
│   └── sections/    # Hero, StatsBar, WhyChooseUs, Academics, Admissions, Gallery, Faq
├── pages/           # Dedicated pages (HomePage, AboutPage, AdmissionsPage, AcademicsPage, GalleryPage, ContactPage)
├── styles/          # Custom CSS utilities & design tokens
├── App.jsx          # Multi-page application state & router
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