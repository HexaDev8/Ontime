/**
 * @file app/components/FeatureGrid.tsx
 * @description Modern multi-column feature grid inspired by SaaS dashboard landing pages.
 * Highlights key company differentiators: punctuality, licensed staff, transparent quotes,
 * and high safety standards with visual icons and glassmorphic micro-cards.
 */

import React from "react";
import { SectionHeading } from "./SectionHeading";
import {
  Clock,
  ShieldCheck,
  Award,
  Zap,
  Users2,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
}

const features: FeatureItem[] = [
  {
    icon: <Clock className="w-6 h-6 text-sky-500" />,
    title: "Strict Punctuality Guarantee",
    description:
      "We value your busy calendar. Our technicians arrive precisely within the confirmed window, ready with all tools and materials to complete the job on schedule.",
    metric: "99.8% On-Time",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-sky-500" />,
    title: "Vetted & Insured Technicians",
    description:
      "Every cleaner, electrician, and installer undergoes background checks, skill tests, and comprehensive safety training before entering your property.",
    metric: "100% Vetted",
  },
  {
    icon: <Award className="w-6 h-6 text-sky-500" />,
    title: "Commercial & Domestic Mastery",
    description:
      "Whether you run a high-traffic corporate office or manage student apartments, we tailor our procedures and grade of equipment to your unique standards.",
    metric: "2,500+ Properties",
  },
  {
    icon: <Zap className="w-6 h-6 text-sky-500" />,
    title: "Fast Diagnostics & Fixes",
    description:
      "From complex wiring issues and tripping circuit breakers to stubborn pipe leaks, we diagnose root causes rapidly without unnecessary delays.",
    metric: "< 60 Min Response",
  },
  {
    icon: <Users2 className="w-6 h-6 text-sky-500" />,
    title: "Dedicated Account Coordination",
    description:
      "Direct line of communication with our operations desk for continuous oversight, scheduled audits, and streamlined multi-property invoicing.",
    metric: "24/7 Desk",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-sky-500" />,
    title: "Clear, Upfront Pricing",
    description:
      "No hidden call-out fees or surprise overtime charges. You receive a fully itemized transparent estimate before work commences.",
    metric: "Zero Hidden Fees",
  },
];

export const FeatureGrid: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why On Time Pvt Ltd"
          title="Engineered for"
          highlight="Reliability & Total Peace of Mind"
          description="We built On Time Private Limited around one uncompromising principle: delivering exceptional property maintenance exactly when promised."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass-panel p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-200">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold text-sky-700 bg-sky-50/80 px-2.5 py-1 rounded-full border border-sky-200/60">
                    {feature.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle className="w-3.5 h-3.5 text-sky-500" />
                <span>Standard with every appointment</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
