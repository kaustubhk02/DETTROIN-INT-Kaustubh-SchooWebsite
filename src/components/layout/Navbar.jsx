import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  GraduationCap,
  Sparkles,
  MapPin,
  Send,
} from "lucide-react";

const NAV_ITEMS = [
  {
    label: "About Us",
    links: [
      { label: "Overview & Vision", href: "#about" },
      { label: "Our 5-Acre Campus", href: "#campus" },
      { label: "Principal's Message", href: "#about" },
      { label: "Awards & Recognition", href: "#why-us" },
    ],
  },
  {
    label: "Admissions",
    links: [
      { label: "4-Step Admission Guide", href: "#admissions" },
      { label: "Fee Structure & Eligibility", href: "#admissions" },
      { label: "Online Application Form", href: "#inquire" },
    ],
  },
  {
    label: "Academics",
    links: [
      { label: "CBSE Curriculum", href: "#academics" },
      { label: "Smart Classrooms", href: "#academics" },
      { label: "Science & Computer Labs", href: "#academics" },
    ],
  },
  {
    label: "Campus Life",
    links: [
      { label: "Sports & Athletics", href: "#facilities" },
      { label: "Arts & Culture", href: "#facilities" },
      { label: "School Gallery", href: "#gallery" },
    ],
  },
  { label: "Parent FAQ", href: "#faq" },
];

export default function Navbar({ onOpenInquiry }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileOpen]);

  return (
    <>
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Information */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone size={13} className="text-amber-400" />
              <span>+91 98765 43210</span>
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a
              href="mailto:admissions@krishnainternational.edu.in"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail size={13} className="text-amber-400" />
              <span>admissions@krishnainternational.edu.in</span>
            </a>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin size={13} className="text-slate-400" />
              Aligarh, Uttar Pradesh
            </span>
          </div>

          {/* Admission Status Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full font-medium text-[11px]">
              <Sparkles size={12} className="animate-spin-slow text-amber-400" />
              Admissions Open 2026-27 (Nursery to Class XII)
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
          scrolled ? "shadow-md shadow-slate-900/5 border-b border-slate-200/80" : "border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
          {/* Logo & School Name */}
          <a href="#" className="flex items-center gap-3 group focus:outline-hidden">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-md shadow-blue-700/20 group-hover:bg-blue-800 transition-colors">
              <GraduationCap size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-slate-900 leading-tight tracking-tight group-hover:text-blue-700 transition-colors">
                Krishna International
              </span>
              <span className="text-xs text-slate-500 font-medium">
                CBSE Affiliated School • Aligarh
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.links && setOpenDropdown(item.label)}
                onMouseLeave={() => item.links && setOpenDropdown(null)}
              >
                {item.links ? (
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 rounded-lg hover:text-blue-700 hover:bg-slate-100/80 transition-colors cursor-pointer"
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      className={`text-slate-400 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180 text-blue-700" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-sm font-semibold text-slate-700 rounded-lg hover:text-blue-700 hover:bg-slate-100/80 transition-colors"
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.links && openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-1.5 w-60 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                      {item.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="block px-3.5 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Send size={15} />
              Quick Inquiry
            </button>
            <button
              onClick={onOpenInquiry}
              className="px-5 py-2.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-md shadow-blue-700/20 hover:shadow-blue-700/30 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Apply Admissions
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenInquiry}
              className="px-3 py-1.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-hidden cursor-pointer"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white w-full max-h-[90vh] overflow-y-auto rounded-b-2xl shadow-2xl border-b border-slate-200 p-5 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            {/* Header in Mobile Drawer */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold">
                  <GraduationCap size={20} />
                </div>
                <span className="font-bold text-slate-900 text-base">
                  Krishna International
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Nav Links Accordion */}
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, idx) => (
                <div key={item.label} className="border-b border-slate-100 py-1">
                  {item.links ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveAccordion(
                            activeAccordion === idx ? null : idx
                          )
                        }
                        className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-slate-800 text-left cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`text-slate-400 transition-transform ${
                            activeAccordion === idx ? "rotate-180 text-blue-700" : ""
                          }`}
                        />
                      </button>

                      {activeAccordion === idx && (
                        <div className="pl-4 pb-2 pt-1 flex flex-col gap-2">
                          {item.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm font-medium text-slate-600 hover:text-blue-700 py-1"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-base font-semibold text-slate-800 hover:text-blue-700"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  if (onOpenInquiry) onOpenInquiry();
                }}
                className="w-full py-3 text-center text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-md cursor-pointer"
              >
                Start Online Admission Inquiry
              </button>
              <a
                href="tel:+919876543210"
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center gap-2"
              >
                <Phone size={16} className="text-blue-700" />
                Call Admissions Office
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
