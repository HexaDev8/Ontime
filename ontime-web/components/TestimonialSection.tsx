/**
 * @file app/components/TestimonialSection.tsx
 * @description Social proof and review section highlighting customer satisfaction
 * across offices, student flats, and private home managers.
 */

import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Star, CheckCircle, Building2, Home, GraduationCap } from "lucide-react";

interface Review {
  name: string;
  role: string;
  companyOrType: string;
  avatarIcon: React.ReactNode;
  rating: number;
  comment: string;
  highlight: string;
}

const reviews: Review[] = [
  {
    name: "Dharshana Perera",
    role: "Facility Director",
    companyOrType: "Apex Corporate Center",
    avatarIcon: <Building2 className="w-5 h-5 text-sky-500" />,
    rating: 5,
    highlight: "Never once had a delay in 18 months",
    comment:
      "On Time Private Limited manages our 4-floor corporate premises. Their cleaning teams work like clockwork after hours, and any electrical faults are fixed before 8 AM next morning. Exceptional reliability.",
  },
  {
    name: "Dr. Rachel Weerasinghe",
    role: "Homeowner",
    companyOrType: "Luxury Villa Resident",
    avatarIcon: <Home className="w-5 h-5 text-sky-500" />,
    rating: 5,
    highlight: "Courteous, knowledgeable & spotless",
    comment:
      "Hired them for a complete electrical socket replacement and washing machine installation. They arrived on the exact minute, laid down floor protectors, and calibrated the machine flawlessly.",
  },
  {
    name: "Malik Fernando",
    role: "Student Housing Manager",
    companyOrType: "Campus Vista Accommodations",
    avatarIcon: <GraduationCap className="w-5 h-5 text-sky-500" />,
    rating: 5,
    highlight: "Turnaround time between student terms was incredible",
    comment:
      "Turnover between semesters is hectic. On Time completely cleaned 40+ student rooms, repaired broken plumbing, and fitted new microwaves in under 48 hours. Lifesavers!",
  },
];

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Endorsements"
          title="Trusted by Property"
          highlight="Owners, Managers & Residents"
          description="Read verified experiences from clients who rely on On Time Private Limited for maintenance excellence."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-700">5.0 / 5.0</span>
                </div>

                <p className="text-sm font-bold text-sky-600 mb-2">
                  &ldquo;{review.highlight}&rdquo;
                </p>

                <p className="text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                  {review.avatarIcon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle className="w-3.5 h-3.5 text-sky-500" />
                  </h4>
                  <p className="text-xs text-slate-500">
                    {review.role} • {review.companyOrType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
