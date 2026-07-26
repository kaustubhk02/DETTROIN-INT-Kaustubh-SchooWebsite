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
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Calendar,
} from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About Us",
    page: "about",
    icon: Users,
    links: [
      { label: "Overview & Vision", page: "about", desc: "Our 5-acre campus & mission" },
      { label: "Chairman & Principal Message", page: "about", desc: "Leadership guidance" },
      { label: "Why Krishna International?", page: "about", desc: "Key school features" },
    ],
  },
  {
    label: "Admissions",
    page: "admissions",
    icon: Calendar,
    links: [
      { label: "4-Step Admission Guide", page: "admissions", desc: "Simple enrollment process" },
      { label: "Required Documents", page: "admissions", desc: "Checklist for parents" },
      { label: "Fee Payment & Structure", page: "admissions", desc: "Transparent fee details" },
    ],
  },
  {
    label: "Academics",
    page: "academics",
    icon: BookOpen,
    links: [
      { label: "CBSE Curriculum", page: "academics", desc: "Nursery to Class XII" },
      { label: "Academic Wings", page: "academics", desc: "Primary, Middle & Senior" },
      { label: "GREAT Citizen Motto", page: "academics", desc: "Core student values" },
    ],
  },
  {
    label: "Campus Life",
    page: "gallery",
    icon: Award,
    links: [
      { label: "Sports & Athletics", page: "gallery", desc: "Basketball, football & games" },
      { label: "Smart Classrooms", page: "gallery", desc: "Digital learning labs" },
      { label: "Photo Gallery", page: "gallery", desc: "Visual campus tour" },
    ],
  },
  { label: "Parent FAQ / Contact", page: "contact" },
];

export default function Navbar({ onOpenInquiry, currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
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

  const handleNavClick = (page) => {
    if (onNavigate) onNavigate(page);
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Full-Width Top Announcement & Contact Bar */}
      <div className="w-full bg-slate-950 text-slate-300 text-xs py-2.5 px-4 sm:px-8 lg:px-12 border-b border-slate-800/80">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Details */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start font-medium">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone size={13} className="text-amber-400" />
              <span>+91 98765 43210</span>
            </a>
            <span className="hidden sm:inline text-slate-700">•</span>
            <a
              href="mailto:admissions@krishnainternational.edu.in"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail size={13} className="text-amber-400" />
              <span>admissions@krishnainternational.edu.in</span>
            </a>
            <span className="hidden md:inline text-slate-700">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin size={13} className="text-amber-400" />
              Aligarh, Uttar Pradesh
            </span>
          </div>

          {/* Admission Open Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 text-amber-300 border border-amber-400/40 px-3 py-0.5 rounded-full font-semibold text-[11px] shadow-2xs">
              <Sparkles size={12} className="animate-spin-slow text-amber-400" />
              Admissions Open 2026-27 (Nursery to Class XII)
            </span>
          </div>
        </div>
      </div>

      {/* Full-Width Main Glassmorphism Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 border-b border-slate-200/90 py-2.5"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200/70 py-3.5"
        }`}
      >
        <div className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-12">
          {/* Logo & School Name */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-hidden"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white flex items-center justify-center shadow-md shadow-blue-700/25 group-hover:scale-105 transition-transform">
              <GraduationCap size={24} />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 leading-tight tracking-tight group-hover:text-blue-700 transition-colors">
                Krishna International
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                CBSE Affiliated School • Aligarh
              </span>
            </div>
          </button>

          {/* Desktop Navigation Link Boxes */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.links && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.links && setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.page)}
                    className={`h-10 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-150 flex items-center gap-1.5 cursor-pointer border ${
                      isActive
                        ? "bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/20 font-bold"
                        : "bg-slate-50/80 text-slate-700 border-slate-200/80 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.links && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label
                            ? "rotate-180 text-blue-300"
                            : isActive
                            ? "text-blue-100"
                            : "text-slate-400"
                        }`}
                      />
                    )}
                  </button>

                  {/* Evenly Formatted Dropdown Menu Card */}
                  {item.links && openDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/90 p-2.5 space-y-1.5">
                        {item.links.map((link) => (
                          <button
                            key={link.label}
                            onClick={() => handleNavClick(link.page)}
                            className="w-full text-left p-3 rounded-xl hover:bg-blue-50/90 transition-all cursor-pointer group flex items-start justify-between border border-transparent hover:border-blue-100"
                          >
                            <div>
                              <div className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                                {link.label}
                              </div>
                              <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                                {link.desc}
                              </div>
                            </div>
                            <ArrowRight size={14} className="text-slate-300 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all mt-1" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={onOpenInquiry}
              className="h-10 px-4 py-2 text-sm font-bold text-blue-700 bg-blue-50 border border-blue-200/80 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
            >
              <Send size={15} />
              Quick Inquiry
            </button>
            <button
              onClick={onOpenInquiry}
              className="h-10 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 rounded-xl shadow-md shadow-blue-700/25 hover:shadow-blue-700/35 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Apply Admissions
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenInquiry}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
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

      {/* Mobile Drawer Panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white/98 backdrop-blur-md w-full max-h-[90vh] overflow-y-auto rounded-b-3xl shadow-2xl border-b border-slate-200 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            {/* Mobile Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold">
                  <GraduationCap size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-base leading-tight">
                    Krishna International
                  </span>
                  <span className="text-xs text-slate-500">Aligarh, U.P.</span>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Nav Link Boxes */}
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = currentPage === item.page;
                return (
                  <div key={item.label} className="rounded-xl border border-slate-200/80 overflow-hidden">
                    {item.links ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveAccordion(
                              activeAccordion === idx ? null : idx
                            )
                          }
                          className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-left cursor-pointer transition-colors ${
                            isActive
                              ? "bg-blue-700 text-white font-bold"
                              : "bg-slate-50 text-slate-800 hover:bg-slate-100"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              activeAccordion === idx ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {activeAccordion === idx && (
                          <div className="p-3 bg-white flex flex-col gap-1.5 border-t border-slate-100">
                            {item.links.map((link) => (
                              <button
                                key={link.label}
                                onClick={() => handleNavClick(link.page)}
                                className="text-left text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg flex items-center justify-between transition-colors"
                              >
                                <span>{link.label}</span>
                                <ArrowRight size={14} className="text-slate-400" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.page)}
                        className={`w-full text-left block px-4 py-3 text-base font-semibold transition-colors ${
                          isActive
                            ? "bg-blue-700 text-white font-bold"
                            : "bg-slate-50 text-slate-800 hover:bg-slate-100"
                        }`}
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Actions */}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  if (onOpenInquiry) onOpenInquiry();
                }}
                className="w-full py-3.5 text-center text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-indigo-800 rounded-xl shadow-md cursor-pointer"
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
