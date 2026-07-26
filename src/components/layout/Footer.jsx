import { GraduationCap, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer({ onOpenInquiry }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                <GraduationCap size={22} />
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">
                  Krishna International
                </div>
                <div className="text-xs text-slate-400">Aligarh • Est. 2012</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              A premier CBSE affiliated school committed to academic excellence, safety, and all-round student development on a 5-acre campus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Our Campus</a></li>
              <li><a href="#admissions" className="hover:text-amber-400 transition-colors">Admission Process & Fees</a></li>
              <li><a href="#academics" className="hover:text-amber-400 transition-colors">CBSE Curriculum</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Photo Gallery</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Parent FAQs</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact Office
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <span>5-Acre Campus, Mathura Road, Aligarh, Uttar Pradesh 202001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <span>info@krishnainternational.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Office Hours & Inquiry CTA */}
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3">
            <h4 className="text-white font-bold text-sm flex items-center gap-2">
              <Clock size={16} className="text-amber-400" /> Office Visiting Hours
            </h4>
            <p className="text-xs text-slate-300">
              Monday - Saturday: 8:00 AM to 4:00 PM<br />
              Sunday: Closed
            </p>
            <button
              onClick={onOpenInquiry}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Inquire Admission Online
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Krishna International School, Aligarh. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Terms of Use</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">CBSE Mandatory Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
