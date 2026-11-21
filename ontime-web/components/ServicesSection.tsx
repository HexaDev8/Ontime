/**
 * @file components/ServicesSection.tsx
 * @description Comprehensive Services Showcase (Bento Grid) presenting all On Time core offerings:
 * 1. Professional Cleaning Services (Normal & Deep Clean; Domestic, Offices & Student Apartments)
 * 2. Air Conditioning Servicing, Chemical Wash & Troubleshooting
 * 3. Plumbing Works & Bathroom Sanitary Fittings
 * 4. Electrical Works, Wiring & Power Issue Diagnostics
 * 5. Fridge, Washing Machine & Electronic Equipment Repairing
 * 6. Washing Machine, TV, Fridge & Electronic Equipment Installation
 * 7. Painting Works, Tile Repairing & Surface Restoration
 *
 * Each card features a "Book Service" button that smoothly scrolls to the appointment
 * booking form and auto-selects the corresponding service category in the dropdown.
 * The visual style harmoniously alternates between the vibrant Sky Blue gradient
 * and sleek Slate-900 / Navy dark themes.
 */

"use client";

import React from "react";
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
  Building2,
  Home,
  GraduationCap,
  Layers,
  Brush,
  Droplets,
  Paintbrush,
  Wind,
  Refrigerator,
  Bath,
  Plug,
  Cpu,
  Check,
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const handleBookService = (category: string) => {
    if (typeof window !== "undefined") {
      // 1. Dispatch event to update the booking form dropdown
      window.dispatchEvent(
        new CustomEvent("ontime-select-service", {
          detail: { category },
        })
      );

      // 2. Smoothly scroll to the booking form without altering the URL hash
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="Complete Property Services,"
          highlight="Delivered Always On Time"
          description="From routine maintenance to deep sanitization, air conditioning, licensed wiring, plumbing, and precision installations — explore everything our verified teams handle."
        />

        {/* ── Bento Grid Layout (12 Columns) ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* ══════════════════════════════════════════════════════════════
              ROW 1, CARD 1 (8 cols): PROFESSIONAL CLEANING SERVICES
              Theme: Sky Blue Gradient
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-12 lg:col-span-8 bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 rounded-[2.5rem] p-7 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group">
            {/* Background subtle radial glow */}
            <div
              className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              {/* Category pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/25">
                <Sparkles className="w-3.5 h-3.5" /> Professional Cleaning
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-xl leading-tight">
                Spotless Cleaning, Custom-Fit to Your Space.
              </h3>

              <p className="mt-3 text-sky-100 text-sm sm:text-base max-w-xl leading-relaxed">
                Whether you need everyday upkeep or full-scale deep sanitization, our certified teams deliver meticulous results across homes, workplaces, and student properties.
              </p>

              {/* Bento Sub-Cards: Cleaning Intensity vs. Spaces Served */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. Cleaning Grades */}
                <div className="rounded-2xl bg-white/15 backdrop-blur-md p-4 border border-white/20 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/15">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-100">
                        Cleaning Intensity
                      </span>
                      <Layers className="w-4 h-4 text-white/80" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2.5">
                        <span className="w-8 h-8 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center shrink-0 shadow-inner mt-0.5 text-white">
                          <Brush className="w-4 h-4" />
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white">Normal Clean</p>
                          <p className="text-[11px] text-sky-100 leading-snug mt-0.5">
                            Routine dusting, vacuuming, mopping, trash clearing & surface sanitization.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="w-8 h-8 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center shrink-0 shadow-inner mt-0.5 text-sky-200">
                          <Sparkles className="w-4 h-4 text-white" />
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white">Deep Clean</p>
                          <p className="text-[11px] text-sky-100 leading-snug mt-0.5">
                            HEPA scrub, grout descaling, grease removal, interior glass & baseboards.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Spaces We Serve */}
                <div className="rounded-2xl bg-white/15 backdrop-blur-md p-4 border border-white/20 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/15">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-100">
                        Spaces We Serve
                      </span>
                      <Building2 className="w-4 h-4 text-white/80" />
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-2.5 py-1.5 border border-white/10">
                        <Home className="w-4 h-4 text-sky-200 shrink-0" />
                        <div className="min-w-0">
                          <span className="font-bold text-white">Domestic</span>
                          <span className="text-[11px] text-sky-100 ml-1.5">— Homes, condos & luxury villas</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-2.5 py-1.5 border border-white/10">
                        <Building2 className="w-4 h-4 text-sky-200 shrink-0" />
                        <div className="min-w-0">
                          <span className="font-bold text-white">Offices</span>
                          <span className="text-[11px] text-sky-100 ml-1.5">— Commercial floors & desks</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-2.5 py-1.5 border border-white/10">
                        <GraduationCap className="w-4 h-4 text-sky-200 shrink-0" />
                        <div className="min-w-0">
                          <span className="font-bold text-white">Student Housing</span>
                          <span className="text-[11px] text-sky-100 ml-1.5">— Fast term turnovers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Proof Metric Chips + Book Service Action */}
            <div className="mt-6 pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <div className="flex items-center gap-2 text-sky-100">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>One-off or regular contracts</span>
                </div>
                <div className="flex items-center gap-2 text-sky-100">
                  <Clock className="w-4 h-4 text-white shrink-0" />
                  <span>Hospital-grade disinfectants</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleBookService("Professional Cleaning")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sky-600 hover:bg-sky-50 font-bold text-xs shadow-md hover:shadow-lg transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 1, CARD 2 (4 cols): AIR CONDITIONING SERVICING & FIXING
              Theme: Dark Slate-900 / Navy
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-12 lg:col-span-4 bg-slate-900 rounded-[2.5rem] p-7 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-slate-800 group">
            {/* Background subtle glow */}
            <div
              className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-cyan-500/30">
                <Wind className="w-3.5 h-3.5" /> AC & Climate Control
              </div>

              <h3 className="text-xl sm:text-2xl font-bold leading-tight text-white">
                AC Servicing, Chemical Wash & Fault Fixing
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Restore ice-cold airflow, eliminate odors, and fix cooling failures with certified technicians.
              </p>

              {/* Sub-features list */}
              <div className="mt-5 space-y-2.5">
                <div className="rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                    <Wind className="w-4 h-4 text-cyan-400" /> Servicing & Chemical Wash
                  </div>
                  <p className="mt-1 text-[11px] text-slate-300 leading-snug">
                    High-pressure coil wash, anti-bacterial filter sanitization & drain line clearing to eliminate dripping.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                    <Zap className="w-4 h-4 text-cyan-400" /> Diagnostics & Gas Top-up
                  </div>
                  <p className="mt-1 text-[11px] text-slate-300 leading-snug">
                    R32 & R410A refrigerant recharging, compressor inspection, thermostat sensor repair & PCB electrical fixes.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-cyan-400" /> Rapid Cool Restored
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Air Conditioning Servicing")}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-bold text-cyan-300 hover:text-white transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 2, CARD 3 (6 cols): PLUMBING WORKS & BATHROOM FITTINGS
              Theme: Dark Slate-900 / Navy
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-12 lg:col-span-6 bg-slate-900 rounded-[2.5rem] p-7 sm:p-9 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-slate-800 group">
            {/* Background subtle glow */}
            <div
              className="absolute -right-20 -top-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider border border-cyan-500/30">
                  <Droplets className="w-3.5 h-3.5" /> Plumbing & Bathrooms
                </span>
                <Bath className="w-5 h-5 text-cyan-400/80" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Plumbing Works, Leak Repairs & Bathroom Fittings
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Emergency repair for pipe leaks and low water pressure, plus complete fitting of modern bathroom sanitary ware and drainage systems.
              </p>

              {/* Two Column Sub-Cards */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                    <span className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-300">
                      <Wrench className="w-3.5 h-3.5" />
                    </span>
                    Plumbing Works
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-[11px] text-slate-300">
                    <li>• Emergency burst pipe & leak repair</li>
                    <li>• Clogged drain & waste line clears</li>
                    <li>• Water pressure pump troubleshooting</li>
                    <li>• Copper, PVC & PPR pipe fitting</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                    <span className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-300">
                      <Bath className="w-3.5 h-3.5" />
                    </span>
                    Bathroom Fittings
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-[11px] text-slate-300">
                    <li>• Toilet commode & cistern assembly</li>
                    <li>• Mixer taps, shower heads & valves</li>
                    <li>• Washbasins & vanity cabinetry</li>
                    <li>• Hot water geyser connection & seals</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" /> Zero Leak Guarantee
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Plumbing & Sanitary Works")}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-bold text-cyan-300 hover:text-white transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 2, CARD 4 (6 cols): ELECTRICAL WORKS & ISSUE FIXING
              Theme: Sky Blue Gradient
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-12 lg:col-span-6 bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 rounded-[2.5rem] p-7 sm:p-9 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group">
            {/* Background subtle glow */}
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/25">
                  <Zap className="w-3.5 h-3.5" /> Electrical Works & Safety
                </span>
                <Plug className="w-5 h-5 text-white/80" />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                Wiring, Breaker Diagnostics & Electrical Issues
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-sky-100 leading-relaxed">
                Licensed electricians ensuring safe power delivery, troubleshooting tripping switches, and installing modern lighting solutions for homes and commercial sites.
              </p>

              {/* Two Column Sub-Cards */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/15 backdrop-blur-md p-3.5 border border-white/20 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <span className="w-6 h-6 rounded-lg bg-white/20 border border-white/25 flex items-center justify-center shrink-0 text-white">
                      <Zap className="w-3.5 h-3.5" />
                    </span>
                    Fixing Electrical Issues
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-[11px] text-sky-100">
                    <li>• Tripping main breakers & RCD safety trips</li>
                    <li>• Short circuit & voltage drop diagnostics</li>
                    <li>• Burnt sockets, switches & loose wiring</li>
                    <li>• Fuse box and phase balance repairs</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/15 backdrop-blur-md p-3.5 border border-white/20 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <span className="w-6 h-6 rounded-lg bg-white/20 border border-white/25 flex items-center justify-center shrink-0 text-white">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </span>
                    Electrical Works
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-[11px] text-sky-100">
                    <li>• Complete domestic & office rewiring</li>
                    <li>• Distribution board (DB) installations</li>
                    <li>• LED downlights, chandeliers & track lights</li>
                    <li>• Outdoor waterproof security lighting & CCTV</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-sky-200" /> Licensed Electricians
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Electrical Works & Repairs")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-sky-600 hover:bg-sky-50 font-bold text-xs shadow-md hover:shadow-lg transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 3, CARD 5 (4 cols): APPLIANCE & ELECTRONICS REPAIRING
              Theme: Dark Slate-900 / Navy
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-12 lg:col-span-4 bg-slate-900 rounded-[2.5rem] p-7 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-slate-800 group">
            {/* Background subtle glow */}
            <div
              className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider border border-cyan-500/30">
                  <Wrench className="w-3.5 h-3.5" /> Appliance Repair
                </span>
                <Refrigerator className="w-5 h-5 text-cyan-400/80" />
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">
                Fridge, Washing Machine & Electronics Repair
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Fast component diagnostics and factory-grade repairs to restore malfunctioning household and commercial electronic equipment.
              </p>

              {/* Feature items */}
              <div className="mt-4 space-y-2.5">
                <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-xs flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Refrigerator className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Fridges & Freezers</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Cooling failure, gas leaks, thermostat & compressor motor repairs.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-xs flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Washing Machines</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Drum bearings, drain pumps, water inlet valves & spin cycle error fixes.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-xs flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Plug className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Electronic Equipment</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Microwaves, ovens, induction cooktops, power supply boards & wiring.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400" /> Same-Day Diagnosis
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Appliance & Electronics Repair")}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-bold text-cyan-300 hover:text-white transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 3, CARD 6 (4 cols): EQUIPMENT & APPLIANCE INSTALLATION
              Theme: Sky Blue Gradient
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-12 lg:col-span-4 bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 rounded-[2.5rem] p-7 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group">
            {/* Background subtle glow */}
            <div
              className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/25">
                  <Tv className="w-3.5 h-3.5" /> Equipment Setup
                </span>
                <Tv className="w-5 h-5 text-white/80" />
              </div>

              <h3 className="text-xl font-extrabold text-white leading-snug">
                TV Mounting, Washing Machine & Appliance Setup
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-sky-100 leading-relaxed">
                Turnkey mounting, leveling, and plumbing. Perfectly anchored with stud finders, masonry bolts, and reinforced hose couplings.
              </p>

              {/* Feature items */}
              <div className="mt-4 space-y-2.5">
                <div className="rounded-xl bg-white/15 backdrop-blur-md p-3 border border-white/20 text-xs flex items-start gap-2.5 shadow-xs">
                  <span className="w-7 h-7 rounded-lg bg-white/20 border border-white/25 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Tv className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">TV & Wall Mounting</span>
                    <p className="text-[11px] text-sky-100 mt-0.5">Fixed, tilt or swivel brackets, heavy wall anchors & clean cable trunking.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/15 backdrop-blur-md p-3 border border-white/20 text-xs flex items-start gap-2.5 shadow-xs">
                  <span className="w-7 h-7 rounded-lg bg-white/20 border border-white/25 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Droplets className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Washing Machine Setup</span>
                    <p className="text-[11px] text-sky-100 mt-0.5">Inlet & outlet plumbing connections, vibration dampening & leveling.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/15 backdrop-blur-md p-3 border border-white/20 text-xs flex items-start gap-2.5 shadow-xs">
                  <span className="w-7 h-7 rounded-lg bg-white/20 border border-white/25 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Refrigerator className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Fridge & Kitchen Appliances</span>
                    <p className="text-[11px] text-sky-100 mt-0.5">Water filter plumbing, kitchen cabinet fitments & electrical safety test.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/20 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-200" /> Level & Load Tested
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Equipment & Appliance Setup")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-sky-600 hover:bg-sky-50 font-bold text-xs shadow-md hover:shadow-lg transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 3, CARD 7 (4 cols): PAINTING WORKS & TILE REPAIRING
              Theme: Dark Slate-900 / Navy
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-12 lg:col-span-4 bg-slate-900 rounded-[2.5rem] p-7 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-slate-800 group">
            {/* Background subtle glow */}
            <div
              className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider border border-cyan-500/30">
                  <Paintbrush className="w-3.5 h-3.5" /> Painting & Tiling
                </span>
                <Paintbrush className="w-5 h-5 text-cyan-400/80" />
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">
                Painting Works, Tile Repairs & Surface Finishes
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Transform and protect walls, ceilings, and floors with smooth multi-coat painting, cracked tile replacement, and clean regrouting.
              </p>

              {/* Feature items */}
              <div className="mt-4 space-y-2.5">
                <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-xs flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Paintbrush className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Interior & Exterior Painting</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Wall emulsions, ceiling coats, weather-shield exteriors & wood trim.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-xs flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Tile Repairing & Grouting</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Cracked tile replacement, hollow tile rebonding & waterproof regrouting.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-xs flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Plaster & Crack Touch-ups</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Hairline crack filling, moisture sealant & smooth sanding before paint.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Check className="w-3.5 h-3.5 text-cyan-400" /> Mess-Free Protection
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Painting & Tile Repairing")}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-bold text-cyan-300 hover:text-white transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
