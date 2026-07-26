import StatsBar from "../components/sections/StatsBar";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import { GraduationCap, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      {/* Page Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/30">
            About Krishna International School
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-4 text-white">
            Dedicated to Academic Distinction & Character Building
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl">
            Established in 2012 in Aligarh, Uttar Pradesh. Spread over 5 acres of green, peaceful environment away from city noise.
          </p>
        </div>
      </div>

      {/* Chairman & Principal Message Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Chairman's Message
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              "Our vision is to empower every child with knowledge, strong ethics, and self-confidence. We believe education should prepare students to thrive as responsible global citizens."
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Principal's Vision
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              "We focus on joyful learning where curiosity is celebrated. With dedicated teachers, modern smart classrooms, and sports, every day is an opportunity to grow."
            </p>
          </div>
        </div>
      </div>

      <StatsBar />
      <WhyChooseUs />
    </div>
  );
}
