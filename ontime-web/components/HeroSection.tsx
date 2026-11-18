/**
 * @file app/components/HeroSection.tsx
 * @description Hero component inspired by modern SaaS/advisory landing pages.
 * Features connected workflow node cards, verified metrics (e.g. 99.8% On-Time, 2,500+ Properties),
 * glowing sky-blue ambiance, and direct booking call-to-action.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Wrench,
  Tv,
  Star,
  Users,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50">
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] sm:w-[900px] sm:h-[450px] bg-gradient-to-tr from-sky-300/30 to-cyan-200/20 blur-3xl -z-10 rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-10 w-72 h-72 bg-sky-200/20 blur-2xl -z-10 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Central Typography */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-sky-200 shadow-sm text-sky-700 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span>Premier Property Care & Maintenance</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 flex items-center gap-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-sky-500" /> 100% Guaranteed Quality
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Keep Your Properties{" "}
            <span className="bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Immaculate, Powered
            </span>{" "}
            & Fully Installed.
          </h1>

          {/* Natural language summary for GEO & AEO */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            <strong>On Time Private Limited</strong> provides verified, scheduled maintenance,
            deep cleaning for offices & homes, prompt plumbing and electrical repairs,
            and precision equipment installation. Reliable, punctual, and fully insured.
          </p>

          {/* CTA Group */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 transition-all duration-300 transform active:scale-98"
            >
              <span>Schedule Service Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-7 py-4 rounded-2xl border border-slate-200/90 shadow-sm hover:border-sky-300 transition-all duration-200"
            >
              <span>Explore Services</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-4 flex items-center justify-center flex-wrap gap-6 text-xs sm:text-sm text-slate-500 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-500" /> Transparent Pricing
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-500" /> Certified Technicians
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-500" /> Same-Day Availability
            </span>
          </div>
        </div>

        {/* Modern Interactive Feature Showcase Grid (Inspired by the Adiyo visual structure) */}
        <div className="mt-14 sm:mt-16 relative max-w-5xl mx-auto">
          {/* Decorative connector line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 border-t-2 border-dashed border-sky-200/80 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Cleaning Specialty */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-sky-300 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100/80 text-sky-600 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                  99.8% Spotless
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                Professional Cleaning
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Comprehensive sanitization and deep cleaning for offices, private houses, luxury homes, and student residences.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Clock className="w-3.5 h-3.5 text-sky-500" /> Flexible Recurring or One-Off
              </div>
            </div>

            {/* Card 2: Electrical & Plumbing (Central Hero Card) */}
            <div className="glass-panel p-6 rounded-2xl border-2 border-sky-400 shadow-xl relative overflow-hidden bg-white/90 group transform md:-translate-y-2">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-sky-500 to-cyan-500 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                Emergency & Regular
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-sky-500/30">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="flex items-center text-amber-500 text-xs font-bold gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>4.9 / 5.0 Rating</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                Plumbing & Electrical Works
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Certified wiring repairs, socket and breaker overhauls, lightbulb setups, tap/leak repairs, and pipe maintenance.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="text-sky-600 font-bold">Licensed Pros</span>
                <span>Fast Diagnostics</span>
              </div>
            </div>

            {/* Card 3: Equipment & Appliance Installation */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-sky-300 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100/80 text-sky-600 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Tv className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                  Zero Hassle
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                Equipment Installation
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Precision setup for modern appliances including wall-mounted TVs, washing machines, microwaves, and electronics.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-500" /> Calibration & Testing Included
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-sky-600">2,500+</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Properties Serviced</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-sky-600">99.8%</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">On-Time Arrival</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-sky-600">100%</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Satisfaction Guarantee</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-sky-600">24/7</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Support Hotline</div>
          </div>
        </div>
      </div>
    </section>
  );
};
