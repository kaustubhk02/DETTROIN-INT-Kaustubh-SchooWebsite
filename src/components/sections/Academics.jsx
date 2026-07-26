import { Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";

const ACADEMIC_WINGS = [
  {
    stage: "Primary Wing",
    grades: "Nursery to Class V",
    description: "Focuses on foundational literacy, numeracy, activity-based discovery, and building joy in everyday learning.",
    color: "border-blue-200 bg-blue-50/50 text-blue-700",
    highlights: ["Play-based & Experiential Learning", "Phonics & Storytelling", "Basic Math & Science Activity Kits"],
  },
  {
    stage: "Middle Wing",
    grades: "Class VI to VIII",
    description: "Introduces specialized subject teaching, inquiry-based STEM projects, and analytical problem solving.",
    color: "border-amber-200 bg-amber-50/50 text-amber-800",
    highlights: ["Science & Robotics Labs", "Language Fluency Workshops", "Project-Based Learning"],
  },
  {
    stage: "Senior & Secondary Wing",
    grades: "Class IX to XII",
    description: "Prepares students for CBSE Board exams with Science, Commerce & Humanities streams and career counseling.",
    color: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    highlights: ["Science, Commerce & Arts Streams", "Competitive Exam Mentorship", "Career Counseling Cell"],
  },
];

const GREAT_CITIZEN = [
  { letter: "G", text: "Giving and receiving the very best." },
  { letter: "R", text: "Respecting ourselves, others, and our surroundings." },
  { letter: "E", text: "Excelling by setting high expectations and strong work ethic." },
  { letter: "A", text: "Attitude of being open to continuous learning." },
  { letter: "T", text: "Thinking critically and creatively in a changing world." },
];

export default function Academics() {
  return (
    <section id="academics" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Academics & CBSE Curriculum
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-4">
            Structured for Board Excellence, Designed for Lifelong Curiosity.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Affiliated with the Central Board of Secondary Education (CBSE), offering a progressive, child-centered educational experience.
          </p>
        </div>

        {/* GREAT Citizen Motto Feature Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 rounded-3xl p-7 sm:p-10 text-white shadow-xl mb-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/30">
              <Lightbulb size={14} /> Our Core Educational Philosophy
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-4 text-white">
              Nurturing "GREAT" Citizens
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              At Krishna International, academic success goes hand in hand with building strong values and character:
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            {GREAT_CITIZEN.map((item, idx) => (
              <div
                key={idx}
                className="h-full flex flex-col justify-between bg-slate-800/90 rounded-2xl p-5 border border-slate-700/90 hover:border-amber-400/50 transition-all duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black text-lg flex items-center justify-center mb-3 shadow-md">
                    {item.letter}
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Structure Wings */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-10">
            Academic Wings & Curriculum Stages
          </h3>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {ACADEMIC_WINGS.map((wing, idx) => (
              <div
                key={idx}
                className="h-full flex flex-col justify-between bg-[#FFFDF9] rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      {wing.grades}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${wing.color}`}>
                      Stage {idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2.5">
                    {wing.stage}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {wing.description}
                  </p>

                  <div className="space-y-2.5 pt-3 border-t border-slate-200/60">
                    {wing.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-blue-700">
                  <span>Explore Syllabus</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
