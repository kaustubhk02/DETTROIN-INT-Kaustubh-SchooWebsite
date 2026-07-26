import { useState } from "react";
import { HelpCircle, ChevronDown, Star, Heart } from "lucide-react";

const FAQS = [
  {
    q: "What is the age criteria for Nursery & KG admissions?",
    a: "For Nursery admission, the child should be at least 3 years old by March 31st of the academic year. For Kindergarten (KG-1), the minimum age is 4 years.",
  },
  {
    q: "What are the school timings for junior and senior classes?",
    a: "Nursery to Class II run from 8:30 AM to 1:00 PM. Class III to Class XII run from 8:00 AM to 2:15 PM (Monday to Saturday, 2nd & 4th Saturdays closed).",
  },
  {
    q: "Does the school provide transport facilities across Aligarh?",
    a: "Yes! We operate a fleet of comfortable, GPS-enabled school buses with female bus attendants and speed governors covering all major areas of Aligarh city and nearby locations.",
  },
  {
    q: "How can parents track their child's academic progress?",
    a: "We provide a dedicated Parent Portal app for daily attendance, homework notifications, circulars, exam marks, and direct messaging with class teachers.",
  },
  {
    q: "What is the fee payment structure?",
    a: "Fees can be paid quarterly or annually through cash, UPI, net banking, or debit/credit card via our parent portal with zero hassle.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Sending our daughter to Krishna International School was the best decision. The teachers are deeply caring, and the focus on public speaking and confidence has been amazing.",
    name: "Sunita & Rajesh Sharma",
    role: "Parents of Class V Student",
    stars: 5,
  },
  {
    quote: "The 5-acre campus has genuine room for kids to play and learn. The transport system is reliable and safe. Highly recommend for any parent looking for quality education in Aligarh.",
    name: "Dr. Vikram Verma",
    role: "Parent of Class VIII Student",
    stars: 5,
  },
];

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <>
      {/* Parent Reviews & Testimonials */}
      <section className="py-16 sm:py-20 bg-blue-50/60 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white px-3.5 py-1 rounded-full border border-blue-200">
              Parent Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Trusted by Hundreds of Families
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {t.role}
                    </div>
                  </div>
                  <Heart size={20} className="text-red-500/70" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent FAQ Accordion Section */}
      <section id="faq" className="py-16 sm:py-24 bg-[#FFFDF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-3.5 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Answers for Prospective Parents
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Click any question below to see clear, straightforward answers about our school.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle size={18} className="text-blue-700 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 shrink-0 transition-transform ${
                      activeFaq === idx ? "rotate-180 text-blue-700" : ""
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
