/**
 * @file app/components/ProcessSection.tsx
 * @description Step-by-step service execution process section.
 * Outlines the simple 4-stage workflow from inquiry to certified completion.
 */

import React from "react";
import { SectionHeading } from "./SectionHeading";
import { CalendarCheck, ShieldAlert, Cpu, ThumbsUp } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Instant Booking & Quote",
    description:
      "Choose your required service (Cleaning, Electrical/Plumbing, or Appliance Setup), select your preferred time slot, and get a clear upfront estimate.",
    icon: <CalendarCheck className="w-5 h-5 text-sky-500" />,
  },
  {
    step: "02",
    title: "Punctual Arrival & Inspection",
    description:
      "Our uniformed, vetted technicians arrive precisely on time equipped with industrial grade tools and protective equipment.",
    icon: <ShieldAlert className="w-5 h-5 text-sky-500" />,
  },
  {
    step: "03",
    title: "Precision Execution",
    description:
      "Work is carried out adhering strictly to electrical codes, building regulations, and hygiene standards with continuous precision.",
    icon: <Cpu className="w-5 h-5 text-sky-500" />,
  },
  {
    step: "04",
    title: "Testing & Handover Sign-off",
    description:
      "We test appliances, verify circuits, and inspect sanitized surfaces alongside you. You only sign off once 100% satisfied.",
    icon: <ThumbsUp className="w-5 h-5 text-sky-500" />,
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Seamless Process"
          title="How On Time Delivers"
          highlight="Flawless Property Care"
          description="A frictionless, transparent workflow designed to respect your time and safeguard your valuable property assets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-sky-200 group-hover:text-sky-500 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold text-sky-600 flex items-center gap-1">
                <span>Phase {item.step} Complete</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
