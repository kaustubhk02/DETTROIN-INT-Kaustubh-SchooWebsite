import { BookOpen, Bus, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

const FEATURES = [
  {
    title: "CBSE Accredited Curriculum",
    description: "Comprehensive academic foundation focused on critical thinking, conceptual clarity, and holistic skill development.",
    icon: BookOpen,
    badge: "Academics",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    title: "GPS-Tracked Safe Transport",
    description: "Doorstep pickup and drop service covering all major Aligarh routes with dedicated female attendants and live tracking.",
    icon: Bus,
    badge: "Safety",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    title: "Smart Digital Classrooms",
    description: "Interactive smart boards, high-tech STEM labs, computer centers, and a rich library to inspire digital learning.",
    icon: Sparkles,
    badge: "Infrastructure",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    title: "24/7 CCTV & Campus Security",
    description: "Gated 5-acre campus with round-the-clock security guards, visitor verification, and CCTV monitoring in all areas.",
    icon: ShieldCheck,
    badge: "Protection",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3.5 py-1 rounded-full">
            Why Parents Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3">
            Built around student safety, academic clarity, and individual care.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything at Krishna International School is designed to be simple for parents and inspiring for children.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                      <IconComponent size={24} />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${feat.color}`}>
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-blue-700">
                  <span>Learn details</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
