/**
 * @file components/ServicesSection.tsx
 * @description Comprehensive Services Showcase (4-Row Bento Grid) presenting all 8 On Time core offerings:
 * Row 1 (12 cols): 1. Professional Cleaning Services (Sky Blue Glow)
 * Row 2 (6 + 6 cols): 2. Plumbing Works & Bathroom Sanitary Fittings (Blue Glow) + 3. Electrical Works & Safety (Yellow Glow)
 * Row 3 (4 + 4 + 4 cols): 4. Air Conditioning Servicing (Cyan Glow) + 5. Appliance & Electronics Repair (Emerald Glow) + 6. TV Mounting & Equipment Setup (Indigo Glow)
 * Row 4 (4 + 8 cols): 7. Painting Works & Tile Repairing (Purple Glow) + 8. Hotel Kitchen Exhaust & Flat Grill Cleaning (Amber Glow)
 *
 * Each card features a "Book Service" button that smoothly scrolls to the appointment
 * booking form and auto-selects the corresponding service category in the dropdown.
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
  Flame,
  UtensilsCrossed,
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

      // 2. On mobile screens (< 1024px), scroll directly to the booking form box
      // On desktop, scroll to the contact section overview
      const isMobile = window.innerWidth < 1024;
      const targetElement = isMobile
        ? document.getElementById("booking-form") || document.getElementById("contact")
        : document.getElementById("contact");

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
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

        {/* ── 4-Row Bento Grid Layout (12 Columns) ──────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* ══════════════════════════════════════════════════════════════
              ROW 1 (12 cols): PROFESSIONAL CLEANING SERVICES
              Theme: Light Sky Blue Gradient
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-12 bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 rounded-[2.5rem] p-7 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group">
            {/* Background subtle radial glow */}
            <div
              className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/25">
                  <Sparkles className="w-3.5 h-3.5" /> Professional Cleaning
                </div>
                <Sparkles className="w-5 h-5 text-white/80" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-xl leading-tight text-white">
                    Spotless Cleaning, Custom-Fit to Your Space.
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-sky-100 leading-relaxed">
                    Whether you need everyday upkeep or full-scale deep sanitization, our certified teams deliver meticulous results across homes, workplaces, and student properties.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs border border-white/20">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-100" /> Hospital-Grade Disinfectants
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs border border-white/20">
                      <Clock className="w-3.5 h-3.5 text-sky-100" /> Flexible Contract or One-Off
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                            <span className="text-[11px] text-sky-100 ml-1.5">— Homes & villas</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-2.5 py-1.5 border border-white/10">
                          <Building2 className="w-4 h-4 text-sky-200 shrink-0" />
                          <div className="min-w-0">
                            <span className="font-bold text-white">Offices</span>
                            <span className="text-[11px] text-sky-100 ml-1.5">— Commercial desks</span>
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
            </div>

            <div className="mt-6 pt-5 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sky-600 hover:bg-sky-50 font-bold text-xs shadow-md hover:shadow-lg transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 2, LEFT (6 cols): PLUMBING WORKS & BATHROOM FITTINGS
              Theme: Dark Slate-900 with Deep Ocean Blue Glow
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-6 lg:col-span-6 bg-slate-900 rounded-[2.5rem] p-7 sm:p-9 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-blue-500/20 group hover:border-blue-500/40 transition-colors">
            <div
              className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/25 transition-all duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute -left-16 -bottom-16 w-60 h-60 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-500/30">
                  <Droplets className="w-3.5 h-3.5" /> Plumbing & Bathrooms
                </span>
                <Bath className="w-5 h-5 text-blue-400/80" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Plumbing Works, Leak Repairs & Bathroom Fittings
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Emergency repair for pipe leaks and low water pressure, plus complete fitting of modern bathroom sanitary ware and drainage systems.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-300">
                    <span className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-300">
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
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-300">
                    <span className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-300">
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
              <span className="flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-blue-400" /> Zero Leak Guarantee
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Plumbing & Sanitary Works")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:shadow-lg transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 2, RIGHT (6 cols): ELECTRICAL WORKS & ISSUE FIXING
              Theme: Dark Slate-900 with Electric Yellow Glow
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-6 lg:col-span-6 bg-slate-900 rounded-[2.5rem] p-7 sm:p-9 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-yellow-500/20 group hover:border-yellow-500/40 transition-colors">
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 bg-yellow-400/15 rounded-full blur-3xl pointer-events-none group-hover:bg-yellow-400/25 transition-all duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute -left-16 -top-16 w-60 h-60 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-semibold uppercase tracking-wider border border-yellow-500/30">
                  <Zap className="w-3.5 h-3.5" /> Electrical Works & Safety
                </span>
                <Plug className="w-5 h-5 text-yellow-400/80" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Wiring, Breaker Diagnostics & Electrical Issues
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Licensed electricians ensuring safe power delivery, troubleshooting tripping switches, and installing modern lighting solutions for homes and commercial sites.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-yellow-300">
                    <span className="w-6 h-6 rounded-lg bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center shrink-0 text-yellow-300">
                      <Zap className="w-3.5 h-3.5" />
                    </span>
                    Fixing Electrical Issues
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-[11px] text-slate-300">
                    <li>• Tripping main breakers & RCD safety trips</li>
                    <li>• Short circuit & voltage drop diagnostics</li>
                    <li>• Burnt sockets, switches & loose wiring</li>
                    <li>• Fuse box and phase balance repairs</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-yellow-300">
                    <span className="w-6 h-6 rounded-lg bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center shrink-0 text-yellow-300">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </span>
                    Electrical Works
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-[11px] text-slate-300">
                    <li>• Complete domestic & office rewiring</li>
                    <li>• Distribution board (DB) installations</li>
                    <li>• LED downlights, chandeliers & track lights</li>
                    <li>• Outdoor waterproof security lighting & CCTV</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-yellow-400" /> Licensed Electricians
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Electrical Works & Repairs")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-xs font-bold text-slate-950 shadow-md shadow-yellow-500/20 hover:shadow-lg transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 3, COL 1 (4 cols): AIR CONDITIONING SERVICING & FIXING
              Theme: Dark Slate-900 with Emerald / Fresh Mint Glow
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-6 lg:col-span-4 bg-slate-900 rounded-[2.5rem] p-7 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-emerald-500/20 group hover:border-emerald-500/40 transition-colors">
            <div
              className="absolute -right-16 -top-16 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/25 transition-all duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute -left-12 -bottom-12 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30">
                  <Wind className="w-3.5 h-3.5" /> AC & Climate Control
                </div>
                <Wind className="w-5 h-5 text-emerald-400/80" />
              </div>

              <h3 className="text-xl font-bold leading-snug text-white">
                AC Servicing, Chemical Wash & Fault Fixing
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Restore ice-cold airflow, eliminate odors, and fix cooling failures with certified technicians.
              </p>

              <div className="mt-4 space-y-2.5">
                <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                    <Wind className="w-4 h-4 text-emerald-400" /> Servicing & Chemical Wash
                  </div>
                  <p className="mt-1 text-[11px] text-slate-300 leading-snug">
                    High-pressure coil wash, anti-bacterial filter sanitization & drain line clearing to eliminate dripping.
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                    <Zap className="w-4 h-4 text-emerald-400" /> Diagnostics & Gas Top-up
                  </div>
                  <p className="mt-1 text-[11px] text-slate-300 leading-snug">
                    R32, R410A, 448A & 449A refrigerant recharging, compressor replacement, thermostat sensor repair & PCB electrical fixes.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Rapid Cool Restored
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Air Conditioning Servicing")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-xs font-bold text-white shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 3, COL 2 (4 cols): APPLIANCE & ELECTRONICS REPAIRING
              Theme: Light Sky Blue Gradient (Staggered Center)
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 rounded-[2.5rem] p-7 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div
              className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/25">
                  <Wrench className="w-3.5 h-3.5" /> Appliance Repair
                </span>
                <Refrigerator className="w-5 h-5 text-white/80" />
              </div>

              <h3 className="text-xl font-extrabold text-white leading-snug">
                Fridge, Washing Machine & Electronics Repair
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-sky-100 leading-relaxed">
                Fast component diagnostics and factory-grade repairs to restore malfunctioning household and commercial electronic equipment.
              </p>

              <div className="mt-4 space-y-2.5">
                <div className="rounded-xl bg-white/15 backdrop-blur-md p-3 border border-white/20 text-xs flex items-start gap-2.5 shadow-xs">
                  <span className="w-7 h-7 rounded-lg bg-white/20 border border-white/25 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Refrigerator className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Fridges & Freezers</span>
                    <p className="text-[11px] text-sky-100 mt-0.5">Cooling failure, gas leaks, thermostat & compressor motor repairs.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/15 backdrop-blur-md p-3 border border-white/20 text-xs flex items-start gap-2.5 shadow-xs">
                  <span className="w-7 h-7 rounded-lg bg-white/20 border border-white/25 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Washing Machines</span>
                    <p className="text-[11px] text-sky-100 mt-0.5">Drum bearings, drain pumps, water inlet valves & spin cycle error fixes.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/15 backdrop-blur-md p-3 border border-white/20 text-xs flex items-start gap-2.5 shadow-xs">
                  <span className="w-7 h-7 rounded-lg bg-white/20 border border-white/25 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Plug className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Electronic Equipment</span>
                    <p className="text-[11px] text-sky-100 mt-0.5">Microwaves, ovens, induction cooktops, power supply boards & wiring.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/20 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <Clock className="w-3.5 h-3.5 text-sky-200" /> Same-Day Diagnosis
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Appliance & Electronics Repair")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-sky-600 hover:bg-sky-50 font-bold text-xs shadow-md hover:shadow-lg transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 3, COL 3 (4 cols): EQUIPMENT & APPLIANCE INSTALLATION
              Theme: Dark Slate-900 with Violet / Purple Precision Glow
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-6 lg:col-span-4 bg-slate-900 rounded-[2.5rem] p-7 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-purple-500/20 group hover:border-purple-500/40 transition-colors">
            <div
              className="absolute -right-16 -top-16 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/25 transition-all duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute -left-12 -bottom-12 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider border border-purple-500/30">
                  <Tv className="w-3.5 h-3.5" /> Equipment Setup
                </span>
                <Tv className="w-5 h-5 text-purple-400/80" />
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">
                TV Mounting, Washing Machine & Appliance Setup
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Turnkey mounting, leveling, and plumbing. Perfectly anchored with stud finders, masonry bolts, and reinforced hose couplings.
              </p>

              <div className="mt-4 space-y-2.5">
                <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-xs flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Tv className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">TV & Wall Mounting</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Fixed, tilt or swivel brackets, heavy wall anchors & clean cable trunking.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-xs flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Droplets className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Washing Machine Setup</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Inlet & outlet plumbing connections, vibration dampening & leveling.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-xs flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Refrigerator className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Fridge & Kitchen Appliances</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Water filter plumbing, kitchen cabinet fitments & electrical safety test.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Level & Load Tested
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Equipment & Appliance Setup")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-xs font-bold text-white shadow-md shadow-purple-500/20 hover:shadow-lg transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 4, LEFT (4 cols): PAINTING WORKS & TILE REPAIRING
              Theme: Light Sky Blue Gradient (Staggered Bottom-Left)
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 rounded-[2.5rem] p-7 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div
              className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/25">
                  <Paintbrush className="w-3.5 h-3.5" /> Painting & Tiling
                </span>
                <Paintbrush className="w-5 h-5 text-white/80" />
              </div>

              <h3 className="text-xl font-extrabold text-white leading-snug">
                Painting Works, Tile Repairs & Surface Finishes
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-sky-100 leading-relaxed">
                Transform and protect walls, ceilings, and floors with smooth multi-coat painting, cracked tile replacement, and clean regrouting.
              </p>

              <div className="mt-4 space-y-2.5">
                <div className="rounded-xl bg-white/15 backdrop-blur-md p-3 border border-white/20 text-xs flex items-start gap-2.5 shadow-xs">
                  <span className="w-7 h-7 rounded-lg bg-white/20 border border-white/25 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Paintbrush className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Interior & Exterior Painting</span>
                    <p className="text-[11px] text-sky-100 mt-0.5">Wall emulsions, ceiling coats, weather-shield exteriors & wood trim.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/15 backdrop-blur-md p-3 border border-white/20 text-xs flex items-start gap-2.5 shadow-xs">
                  <span className="w-7 h-7 rounded-lg bg-white/20 border border-white/25 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Tile Repairing & Grouting</span>
                    <p className="text-[11px] text-sky-100 mt-0.5">Cracked tile replacement, hollow tile rebonding & waterproof regrouting.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/15 backdrop-blur-md p-3 border border-white/20 text-xs flex items-start gap-2.5 shadow-xs">
                  <span className="w-7 h-7 rounded-lg bg-white/20 border border-white/25 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-bold text-white">Plaster & Crack Touch-ups</span>
                    <p className="text-[11px] text-sky-100 mt-0.5">Hairline crack filling, moisture sealant & smooth sanding before paint.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/20 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <Check className="w-3.5 h-3.5 text-sky-200" /> Mess-Free Protection
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Painting & Tile Repairing")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-sky-600 hover:bg-sky-50 font-bold text-xs shadow-md hover:shadow-lg transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ROW 4, RIGHT (8 cols): HOTEL KITCHEN EXHAUST & FLAT GRILL CLEANING
              Theme: Deep Navy / Slate with Ember Amber / Orange Glow
             ══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-12 lg:col-span-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-[2.5rem] p-7 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-amber-500/20 group hover:border-amber-500/40 transition-colors">
            <div
              className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/25 transition-all duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute -left-16 -top-16 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-500/30">
                  <Flame className="w-3.5 h-3.5" /> Commercial Kitchen Hygiene
                </div>
                <UtensilsCrossed className="w-5 h-5 text-amber-400/80" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Hotel Kitchen Exhaust & Flat Grill Deep Cleaning
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                Heavy grease extraction and certified sanitization using professional-grade, food-safe chemical degreasers. We eliminate stubborn carbon deposits and fire hazards from extraction canopies and flat cooking grills.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs border border-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> TR19 & Fire Code Compliant
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs border border-slate-700">
                  <Droplets className="w-3.5 h-3.5 text-amber-400" /> Eco-Degreaser Chemical Wash
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Sub-Card 1: Exhaust System */}
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10 text-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 pb-2 mb-2 border-b border-white/10 text-white font-bold text-sm">
                      <span className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 flex items-center justify-center shrink-0">
                        <Wind className="w-4 h-4" />
                      </span>
                      Kitchen Exhaust Systems
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                      Thorough extraction ducting, canopy hood, grease baffle filter, and exhaust fan chemical wash.
                    </p>
                    <ul className="space-y-1.5 text-[11px] text-slate-400">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Hood canopy degreasing & stainless polish</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Baffle filter chemical soak & pressure clean</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Ductwork & impeller fan grease clearing</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Sub-Card 2: Flat Grills */}
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10 text-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 pb-2 mb-2 border-b border-white/10 text-white font-bold text-sm">
                      <span className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 flex items-center justify-center shrink-0">
                        <Flame className="w-4 h-4" />
                      </span>
                      Commercial Flat Grills & Ranges
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                      Restores flat top griddles, burger plates, and cooking ranges using industrial decarbonizing formulas.
                    </p>
                    <ul className="space-y-1.5 text-[11px] text-slate-400">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Burnt carbon & grease crust dissolution</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Food-grade chemical rinse & sanitization</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Trough, grease trap & backsplash cleaning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-amber-400" /> Commercial Hygiene Certificate & Cleanliness Sign-off
              </span>
              <button
                type="button"
                onClick={() => handleBookService("Hotel Kitchen Exhaust & Grill Cleaning")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-xs font-bold text-white shadow-md hover:shadow-lg transition-all group/btn shrink-0 cursor-pointer"
              >
                <span>Book Kitchen Exhaust Cleaning</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
