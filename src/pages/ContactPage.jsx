import Faq from "../components/sections/Faq";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      {/* Page Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/30">
            Contact & Parent Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-4 text-white">
            We are Here to Help You
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl">
            Have questions about admissions, transport routes, or school fees? Reach out to our admission counselors or visit our office.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Admission Helpline</h3>
              <p className="text-sm text-slate-600 mt-1">+91 98765 43210</p>
              <p className="text-xs text-slate-400 mt-0.5">Mon - Sat: 8:00 AM to 4:00 PM</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Email Inquiry</h3>
              <p className="text-sm text-slate-600 mt-1">info@krishnainternational.edu.in</p>
              <p className="text-xs text-slate-400 mt-0.5">24/7 Email Response Cell</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">School Campus Location</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">5-Acre Campus, Mathura Road, Aligarh, U.P. 202001</p>
            </div>
          </div>
        </div>
      </div>

      <Faq />
    </div>
  );
}
