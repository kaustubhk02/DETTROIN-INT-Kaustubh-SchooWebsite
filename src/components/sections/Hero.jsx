import {
  Sparkles,
  CheckCircle2,
  Send,
  Calendar,
  Phone,
  Trophy,
} from "lucide-react";

export default function Hero({ onOpenInquiry }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-[#FFFDF9] to-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 border border-amber-200/80 px-3.5 py-1.5 rounded-full font-semibold text-xs sm:text-sm mb-6 shadow-xs">
              <Sparkles size={16} className="text-amber-600 animate-pulse" />
              <span>Nurturing Excellence from Nursery to Class XII</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Where Curiosity Gets Space to Grow & Excellence Flourishes.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Set on a peaceful 5-acre green campus in Aligarh, Krishna International School combines academic distinction with sports, creative arts, and strong character development.
            </p>

            {/* Quick Key Highlights */}
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-700">
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                <CheckCircle2 size={16} className="text-emerald-600" /> CBSE Affiliated
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                <CheckCircle2 size={16} className="text-emerald-600" /> 5-Acre Eco-Campus
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                <CheckCircle2 size={16} className="text-emerald-600" /> Doorstep Bus Pickup
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenInquiry}
                className="px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-700/25 hover:shadow-blue-700/35 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send size={18} />
                Book a Campus Visit & Inquiry
              </button>
              <a
                href="#admissions"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base rounded-xl border border-slate-200 shadow-xs transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Calendar size={18} className="text-blue-700" />
                View 4-Step Admission Guide
              </a>
            </div>

            {/* Helpline indicator */}
            <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <Phone size={15} className="text-emerald-600" />
              <span>Admission Counseling Helpline: <strong className="text-slate-800">+91 98765 43210</strong> (8 AM - 4 PM)</span>
            </div>
          </div>

          {/* Right Campus Photo Collage */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 p-2 bg-white/60 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-xl">
              <div className="space-y-3.5">
                <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100 group">
                  <img
                    src="/images/campus-main.jpg"
                    alt="Krishna International School Campus Building"
                    className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="bg-slate-900/70 text-white text-[11px] font-medium py-1 px-2.5 text-center">
                    5-Acre Main Campus
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100 group">
                  <img
                    src="/images/sports.jpg"
                    alt="Sports ground and athletic field"
                    className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="bg-slate-900/70 text-white text-[11px] font-medium py-1 px-2.5 text-center">
                    Sports Grounds & Games
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 pt-4">
                <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100 group">
                  <img
                    src="/images/classroom.jpg"
                    alt="Smart Classroom with happy students"
                    className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="bg-slate-900/70 text-white text-[11px] font-medium py-1 px-2.5 text-center">
                    Smart Classrooms
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100 group">
                  <img
                    src="/images/library.jpg"
                    alt="Modern library and reading room"
                    className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="bg-slate-900/70 text-white text-[11px] font-medium py-1 px-2.5 text-center">
                    Rich Academic Library
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -bottom-4 -left-4 sm:left-4 bg-white rounded-2xl shadow-lg border border-slate-200 p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Trophy size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Ranked #1 School</div>
                <div className="text-[11px] text-slate-500">In Student Safety & Academics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
