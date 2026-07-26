import Admissions from "../components/sections/Admissions";
import { CheckCircle2 } from "lucide-react";

export default function AdmissionsPage({ onOpenInquiry }) {
  return (
    <div className="py-12 sm:py-16">
      {/* Page Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/30">
            Admissions 2026-27
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-4 text-white">
            Enrollment & Admission Guide
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl">
            We are accepting applications from Nursery to Class XII. Simple eligibility criteria and hassle-free online fee payment options.
          </p>
        </div>
      </div>

      <Admissions onOpenInquiry={onOpenInquiry} />

      {/* Required Documents Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Documents Required at the Time of Admission
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium">Birth Certificate (Self-attested copy)</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium">Transfer Certificate (Original from previous school)</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium">Passport Size Photos (4 Student + 2 Parents)</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium">Aadhar Card Copy (Student & Parents)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
