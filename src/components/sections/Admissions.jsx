import { Check, Send } from "lucide-react";

const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Submit Online Inquiry",
    description: "Fill out a quick 1-minute form online or visit our school office to get the official admission prospectus.",
  },
  {
    step: "02",
    title: "Campus Guided Tour",
    description: "Experience our 5-acre campus, inspect smart classrooms, sports ground, labs, and meet our principal.",
  },
  {
    step: "03",
    title: "Interactive Discussion",
    description: "An informal interaction for nursery/primary, or a basic assessment for senior classes to understand student interests.",
  },
  {
    step: "04",
    title: "Simple Enrollment",
    description: "Submit basic documents (birth certificate/TC, photos) and secure your seat with easy online or offline fee payment.",
  },
];

export default function Admissions({ onOpenInquiry }) {
  return (
    <section id="admissions" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/30">
            Easy 4-Step Admission Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-4">
            Simple, Transparent & Stress-Free for Parents
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            We welcome students for Nursery, KG, and Classes I to XII. Here is how simple it is to get started.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {ADMISSION_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="h-full flex flex-col justify-between bg-slate-800/90 rounded-2xl p-7 border border-slate-700/90 relative hover:border-amber-400/50 transition-all duration-200"
            >
              <div>
                <div className="text-3xl font-black text-amber-400 mb-4 font-mono">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/70 flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Check size={15} />
                <span>Step {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner inside Admissions */}
        <div className="mt-14 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-3xl p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-blue-500/30">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to take the first step?
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Fill out the quick inquiry form to receive our fee structure & prospectus directly on WhatsApp or Email.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Send size={16} />
            Submit Admission Inquiry Now
          </button>
        </div>
      </div>
    </section>
  );
}
