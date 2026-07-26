import { GraduationCap, MapPin, Users, Trophy } from "lucide-react";

const STATS = [
  { value: "100%", label: "CBSE Board Pass Rate", icon: GraduationCap },
  { value: "5 Acres", label: "Lush Green Eco-Campus", icon: MapPin },
  { value: "25:1", label: "Student-Teacher Ratio", icon: Users },
  { value: "30+", label: "Sports & Co-Curricular Clubs", icon: Trophy },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-slate-200/80 py-8 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, i) => {
            const IconComp = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center p-4 rounded-2xl bg-slate-50/50 border border-slate-100/80 hover:border-slate-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
                  <IconComp size={20} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
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
