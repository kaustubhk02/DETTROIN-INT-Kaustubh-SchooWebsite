import Hero from "../components/sections/Hero";
import StatsBar from "../components/sections/StatsBar";
import { GraduationCap, BookOpen, Calendar, Award, ArrowRight, HelpCircle, Send } from "lucide-react";

export default function HomePage({ onOpenInquiry, onNavigate }) {
  const HIGHLIGHT_CARDS = [
    {
      title: "About Our Campus",
      subtitle: "5-Acre Eco-Friendly Environment",
      description: "Set away from city noise in Aligarh, focused on academic excellence, values, and character development.",
      icon: GraduationCap,
      page: "about",
      color: "bg-blue-50 text-blue-700 border-blue-200",
      cta: "Explore About KIS",
    },
    {
      title: "CBSE Curriculum",
      subtitle: "Nursery to Class XII",
      description: "Progressive, child-centered academics with smart classrooms, STEM robotics, and science laboratories.",
      icon: BookOpen,
      page: "academics",
      color: "bg-amber-50 text-amber-800 border-amber-200",
      cta: "View Curriculum & Wings",
    },
    {
      title: "Admissions 2026-27",
      subtitle: "Simple 4-Step Process",
      description: "Hassle-free application process, transparent fee structure, and doorstep GPS bus transport pickup.",
      icon: Calendar,
      page: "admissions",
      color: "bg-emerald-50 text-emerald-800 border-emerald-200",
      cta: "View Admission Guide",
    },
    {
      title: "Campus Life & Gallery",
      subtitle: "Sports, Arts & Facilities",
      description: "Basketball court, athletic fields, library with 10,000+ books, and co-curricular student clubs.",
      icon: Award,
      page: "gallery",
      color: "bg-purple-50 text-purple-800 border-purple-200",
      cta: "View Photo Gallery",
    },
  ];

  const handleCardClick = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <Hero onOpenInquiry={onOpenInquiry} />

      {/* Quick Key Stats Bar */}
      <StatsBar />

      {/* Concise Core Section Highlights */}
      <section className="py-20 sm:py-28 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3.5 py-1 rounded-full border border-blue-200">
              Welcome to Krishna International School
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-4">
              Everything You Need for Your Child's Bright Future
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore key areas of our school below or visit dedicated section pages for complete details.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {HIGHLIGHT_CARDS.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  onClick={() => handleCardClick(card.page)}
                  className="h-full flex flex-col justify-between bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shadow-2xs group-hover:bg-blue-700 group-hover:text-white transition-colors">
                        <IconComp size={24} />
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${card.color}`}>
                        {card.subtitle}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                    <span>{card.cta}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Streamlined Quick Action Banner */}
      <section className="pb-20 sm:pb-28 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-500/20">
            <div className="text-center md:text-left max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/30 mb-3">
                <HelpCircle size={14} /> Admission Counseling 2026-27
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Have Questions About Admissions or Transport?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Our admission counselors are available to assist you with fee structure, eligibility criteria, and doorstep bus pickup details.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={16} />
                Talk to Admission Counselor
              </button>
              <button
                onClick={() => handleCardClick("contact")}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                View Parent FAQs & Contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
