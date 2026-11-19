/**
 * @file app/components/BentoSection.tsx
 * @description Modern Bento Grid showcase directly matching the card layout
 * of the user reference design.
 * Features:
 * - Large signature feature card in deep sky/emerald with micro status badges.
 * - Tall portrait image card with overlayed technician credentials.
 * - Interactive metric and data insights cards with rounded corners (`rounded-[2rem]`).
 * - Bottom paired cards illustrating precision maintenance and student turnover.
 */

import React from "react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import {
  Sparkles,
  Wrench,
  Tv,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const BentoSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Bento Overview"
          title="Intelligent Property Care,"
          highlight="Tailored for Every Need"
          description="Keep an eye on hygiene, electrical safety, and equipment readiness in a single, predictable maintenance flow."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Bento Card 1: Wide Signature Card (Sky Blue Theme - 8 cols) */}
          <div className="md:col-span-12 lg:col-span-8 bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 rounded-[2.5rem] p-7 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group">
            {/* Background glowing rings */}
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                <Sparkles className="w-3.5 h-3.5" /> Full-Spectrum Property Health
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight max-w-2xl leading-tight">
                Get Instant Verification on Cleaning, Wiring & Equipment Setup.
              </h3>

              <p className="mt-3 text-sky-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                Receive real-time progress breakdowns of your property work—helping you stay on track with zero unexpected repair delays or inspection failures.
              </p>
            </div>

            {/* Inner Bento Mockup Widgets */}
            <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-xs text-sky-100 font-medium">Offices & Homes</div>
                <div className="text-xl font-bold mt-1">Deep Cleaned</div>
                <div className="text-xs text-sky-200 mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-white" /> HEPA Sanitized
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-xs text-sky-100 font-medium">Circuits & Taps</div>
                <div className="text-xl font-bold mt-1">Tested Safe</div>
                <div className="text-xs text-sky-200 mt-2 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-white" /> Zero Leak Guarantee
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-xs text-sky-100 font-medium">Appliances</div>
                <div className="text-xl font-bold mt-1">Installed & Plumbed</div>
                <div className="text-xs text-sky-200 mt-2 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-white" /> On-Time Dispatch
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Tall Portrait Card with Team / Tech Specialist (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 bg-slate-900 rounded-[2.5rem] p-7 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-square w-full rounded-2xl overflow-hidden mb-6 border border-slate-700">
              <Image
                src="/images/services/property-care.jpg"
                alt="On Time Private Limited Certified Specialist"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-xs bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 font-medium">
                Certified Property Operations
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                Personalized Care
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                Recommendations Based on Your Space
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                From scheduled office dust control to urgent tap repairs and washing machine setups, our account coordinators tailor visit cadences to your exact facility needs.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Available 7 days / week</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 hover:text-sky-300"
              >
                <span>Book Crew</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Card 3: Appliance & Technical Precision Card (6 cols) */}
          <div className="md:col-span-6 bg-slate-50 rounded-[2.5rem] p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-sky-700 bg-sky-100/70 px-3 py-1 rounded-full">
                  Equipment Installation
                </span>
                <Tv className="w-5 h-5 text-sky-600" />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                Precision Setup for TVs, Washing Machines & Appliances
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                No guessing bracket positions or plumbing couplings. We arrive with wall studs finders, heavy masonry anchors, and high-pressure hose connectors.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-500" /> Full Safety Test
              </span>
              <span className="font-bold text-slate-800">Turnkey Handover</span>
            </div>
          </div>

          {/* Bento Card 4: Electrical & Plumbing Rapid Response (6 cols) */}
          <div className="md:col-span-6 bg-slate-50 rounded-[2.5rem] p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-sky-700 bg-sky-100/70 px-3 py-1 rounded-full">
                  Electrical & Plumbing
                </span>
                <Wrench className="w-5 h-5 text-sky-600" />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                Certified Wiring Repairs & Urgent Plumbing Stops
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Prompt resolution for short circuits, tripping main breakers, fixture renewals, and pipe leaks to safeguard occupants and property integrity.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-sky-500" /> Rapid Diagnostics
              </span>
              <span className="font-bold text-slate-800">Licensed Electricians</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
