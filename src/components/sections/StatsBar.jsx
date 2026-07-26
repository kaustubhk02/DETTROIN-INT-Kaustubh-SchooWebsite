import { GraduationCap, MapPin, Users, Trophy } from "lucide-react";

const STATS = [
  { value: "100%", label: "CBSE Board Pass Rate", icon: GraduationCap },
  { value: "5 Acres", label: "Lush Green Eco-Campus", icon: MapPin },
  { value: "25:1", label: "Student-Teacher Ratio", icon: Users },
  { value: "30+", label: "Sports & Co-Curricular Clubs", icon: Trophy },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-slate-200/80 py-12 sm:py-16 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
          {STATS.map((stat, i) => {
            const IconComp = stat.icon;
            return (
              <div
                key={i}
                className="h-full flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100/90 text-blue-700 flex items-center justify-center mb-3 shadow-2xs">
                  <IconComp size={22} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1 text-center">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
