import Academics from "../components/sections/Academics";

export default function AcademicsPage() {
  return (
    <div className="py-12 sm:py-16">
      {/* Page Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/30">
            Academics & Curriculum
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-4 text-white">
            CBSE Accredited Academic Excellence
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl">
            A comprehensive learning environment combining conceptual clarity, STEM robotics labs, smart classrooms, and dedicated faculty.
          </p>
        </div>
      </div>

      <Academics />
    </div>
  );
}
