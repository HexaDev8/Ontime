/**
 * @file components/pastwork.tsx
 * @description Comprehensive Past Work & Core Services Showcase.
 * Displays dedicated cards for all 7 core services with interactive image carousels
 * featuring authentic on-site photography, next/previous slide controls,
 * comprehensive deliverable checklists, and direct booking actions linked to the appointment form.
 */

"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import {
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Wind,
  Droplets,
  Zap,
  Wrench,
  Tv,
  Paintbrush,
} from "lucide-react";

export interface PastWorkItem {
  id: string;
  serviceNumber: string;
  title: string;
  dropdownCategory: string;
  categoryBadge: string;
  categoryIcon: React.ReactNode;
  tagline: string;
  description: string;
  images: {
    src: string;
    caption: string;
  }[];
  features: string[];
  idealFor: string[];
}

export const pastWorkData: PastWorkItem[] = [
  {
    id: "cleaning",
    serviceNumber: "1",
    title: "Professional Cleaning Services",
    dropdownCategory: "Professional Cleaning",
    categoryBadge: "Sanitization & Hygiene",
    categoryIcon: <Sparkles className="w-3.5 h-3.5" />,
    tagline: "Offices, Private Houses, Homes & Student Apartments",
    description:
      "Maintain an immaculate, hygienic, and welcoming environment with our specialized deep cleaning teams. From corporate floors requiring pristine presentation to fast student apartment turnovers and private villa sanitization, we deploy industrial HEPA scrubbers, rotary polishers, and hospital-grade eco disinfectants.",
    images: [
      {
        src: "/images/pastwork/Apartment Cleaning.jpeg",
        caption: "Apartments cleaning & sanitization",
      },
      {
        src: "/images/pastwork/Bathroom Cleaning.jpeg",
        caption: "Bathroom clean & sanitization",
      },
      {
        src: "/images/pastwork/Student Apartment Cleaning.jpeg",
        caption: "Student apartment cleaning & sanitization",
      },
      {
        src: "/images/pastwork/Office Cleaning.jpeg",
        caption: "Office cleaning & sanitization",
      },
    ],
    features: [
      "Commercial office daily upkeep & after-hours deep cleans",
      "Domestic house & luxury villa floor-to-ceiling sanitization",
      "Student apartment & dormitory fast turnover cleaning",
      "Normal clean & deep scrubbing for tiles, grout & glass",
      "Eco-friendly, pet-safe and non-toxic hospital disinfectants",
      "Post-construction dust elimination & move-in ready handover",
    ],
    idealFor: ["Corporate Offices", "Private Homes", "Student Housing", "Property Landlords"],
  },
  {
    id: "ac-servicing",
    serviceNumber: "2",
    title: "Air Conditioning Servicing, Chemical Wash & Repair",
    dropdownCategory: "Air Conditioning Servicing",
    categoryBadge: "AC & Climate Control",
    categoryIcon: <Wind className="w-3.5 h-3.5" />,
    tagline: "Chemical Wash, Gas Top-ups & Cooling Diagnostics",
    description:
      "Restore ice-cold airflow, eliminate musty odors, and prevent compressor burnout. Our certified HVAC technicians perform high-pressure chemical coil washes, anti-bacterial filter sanitization, drain pipe descaling, R32 & R410A refrigerant gas top-ups, and PCB electrical troubleshooting.",
    images: [
      {
        src: "/images/pastwork/Roof Top AC Repair.jpeg",
        caption: "Roof top ac repair",
      },
      {
        src: "/images/pastwork/Compressor replacement.jpeg",
        caption: "Compressor replacement",
      },
      {
        src: "/images/pastwork/Shop Refrigerator Repair.jpeg",
        caption: "Shop display refrigerator repair",
      },
    ],
    features: [
      "High-pressure coil wash & anti-fungal chemical cleaning",
      "Drain line suction clearing to stop dripping and water leaks",
      "R32,R410A,448A & 449A eco-refrigerant pressure testing & gas top-up",
      "Compressor performance diagnosis & thermostat calibration",
      "Inverter PCB circuit repairs & capacitor replacements",
      "Indoor split units, multi-split & commercial cassette maintenance",
    ],
    idealFor: ["Homes & Condos", "Corporate Workplaces", "Server Rooms", "Retail Stores"],
  },
  {
    id: "plumbing",
    serviceNumber: "3",
    title: "Plumbing Works, Leak Repairs & Bathroom Sanitary Fittings",
    dropdownCategory: "Plumbing & Sanitary Works",
    categoryBadge: "Plumbing & Bathrooms",
    categoryIcon: <Droplets className="w-3.5 h-3.5" />,
    tagline: "Emergency Leak Mitigation, Drainage & Sanitary Fitting",
    description:
      "Stop leaks, restore optimal water pressure, and modernize your bathroom plumbing. Our plumbers handle emergency burst pipes, sewer line blockages, PPR/copper piping installations, and precision assembly of luxury bathroom commodes, mixer taps, shower sets, and hot water geysers.",
    images: [
      {
        src: "/images/pastwork/Sanitary Fittings.jpeg",
        caption: "Sanitary fittings",
      },
      {
        src: "/images/pastwork/Hot Water Pipe installation.jpeg",
        caption: "Hot water pipe installation",
      },
      {
        src: "/images/pastwork/Shower installation.jpeg",
        caption: "Shower installation",
      },
    ],
    features: [
      "Emergency burst pipe mitigation & concealed leak repairs",
      "Clogged drain unblocking, waste lines & trap descaling",
      "PPR, PVC & copper pipe plumbing & pressure booster pumps",
      "Toilet commode, cistern mechanism & bidet spray fitment",
      "Hot water geyser / shower heater installation & safety seals",
      "Designer washbasin, vanity cabinetry & mixer tap fittings",
    ],
    idealFor: ["Residential Houses", "Apartments", "Commercial Restrooms", "Restaurants"],
  },
  {
    id: "electrical",
    serviceNumber: "4",
    title: "Electrical Works, Wiring & Power Fault Fixing",
    dropdownCategory: "Electrical Works & Repairs",
    categoryBadge: "Electrical & Safety",
    categoryIcon: <Zap className="w-3.5 h-3.5" />,
    tagline: "Distribution Boards, Breaker Diagnostics & Rewiring",
    description:
      "Guarantee uninterrupted, safe electrical power with certified electricians. We diagnose tripping safety breakers, short circuits, and voltage fluctuations, while offering complete rewiring, modern distribution board (DB) installations, chandeliers, architectural LED downlights, and security lighting.",
    images: [
      {
        src: "/images/pastwork/Distribution board installation.jpg",
        caption: "Distribution board installation",
      },
      {
        src: "/images/pastwork/Flood light installation.jpg",
        caption: "Flood light installation",
      },
      {
        src: "/images/pastwork/Shop light installation.jpg",
        caption: "Shop light installation",
      },
    ],
    features: [
      "Tripping main breaker & RCD safety switch diagnostics",
      "Complete residential & commercial rewiring and phase balancing",
      "Distribution board (DB box) upgrades & surge protectors",
      "Burnt socket, toggle switch & light fitting replacements",
      "LED downlights, chandeliers, track lights & outdoor lighting",
      "Multi-meter load testing & 100% electrical safety certification",
    ],
    idealFor: ["Corporate Offices", "Villas & Homes", "Retail Outlets", "Commercial Facilities"],
  },
  {
    id: "appliance-repair",
    serviceNumber: "5",
    title: "Fridge, Washing Machine & Electronic Equipment Repairing",
    dropdownCategory: "Appliance & Electronics Repair",
    categoryBadge: "Appliance Repair",
    categoryIcon: <Wrench className="w-3.5 h-3.5" />,
    tagline: "Component Diagnostics, Compressor & Motor Repair",
    description:
      "Extend the lifespan of your valuable appliances with rapid diagnostic repairs. Our appliance technicians service refrigerators, washing machines, microwaves, and electric ovens, sourcing genuine replacement parts for thermostats, drum bearings, drain pumps, and power control boards.",
    images: [
      {
        src: "/images/pastwork/Compressor installation.jpeg",
        caption: "Compressor installation",
      },
      {
        src: "/images/pastwork/Electronic Equipment Repairing.jpeg",
        caption: "Electronic Equipment Repairing",
      },
      {
        src: "/images/pastwork/Shop Refrigerator Repair.jpeg",
        caption: "Shop Refrigerator Repair",
      },
      {
        src: "/images/pastwork/Refrigerator Repair.jpeg",
        caption: "Refrigerator Repair",
      },
    ],
    features: [
      "Refrigerator cooling failures, gas leak fixing & compressors",
      "Washing machine drum bearing, belt & motor replacements",
      "Drain pump clearing, inlet valves & spin error troubleshooting",
      "Microwave, oven & induction cooktop heating element repairs",
      "Power supply PCB circuit board diagnosis & component soldering",
      "Same-day diagnostics with transparent pricing and warranty",
    ],
    idealFor: ["Households", "Tenants & Landlords", "Laundromats", "Holiday Villas"],
  },
  {
    id: "equipment-install",
    serviceNumber: "6",
    title: "TV Mounting, Washing Machine & Equipment Setup",
    dropdownCategory: "Equipment & Appliance Setup",
    categoryBadge: "Equipment Setup",
    categoryIcon: <Tv className="w-3.5 h-3.5" />,
    tagline: "Wall Mounting, Appliance Hookups & Heavy-Duty Anchoring",
    description:
      "Turnkey installation and secure anchoring for modern home and commercial electronics. We provide precision wall mounting for flat-screen displays up to 85 inches, clean cable trunking, anti-vibration leveling, and water/drain plumbing connections for washing machines and smart refrigerators.",
    images: [
      {
        src: "/images/pastwork/TV Mounting.jpg",
        caption: "TV wall mounting",
      },
      {
        src: "/images/pastwork/Washing Machine Installation.jpeg",
        caption: "Washing Machine Installation",
      },
      {
        src: "/images/pastwork/TV Mounting Office.jpeg",
        caption: "TV Mounting in Meeting Room",
      },
    ],
    features: [
      "TV mounting with heavy-duty masonry anchors & stud verification",
      "Fixed, tilt, and swivel bracket calibration with zero tilt errors",
      "Concealed in-wall cabling & surface-mount wire trunking",
      "Washing machine water inlet & drain hookup with leak testing",
      "Built-in oven, microwave & refrigerator kitchen cabinet fitment",
      "Full functional test cycles & packaging removal on completion",
    ],
    idealFor: ["New Homeowners", "Student Accommodations", "Meeting Rooms", "Tenants"],
  },
  {
    id: "painting-tiling",
    serviceNumber: "7",
    title: "Painting Works, Tile Repairs & Surface Finishes",
    dropdownCategory: "Painting & Tile Repairing",
    categoryBadge: "Finishes & Tiling",
    categoryIcon: <Paintbrush className="w-3.5 h-3.5" />,
    tagline: "Interior/Exterior Painting, Tile Replacement & Regrouting",
    description:
      "Restore beauty and durability to walls, floors, and ceilings. Our skilled artisans provide smooth interior emulsion coats, weather-resistant exterior painting, cracked and hollow tile replacement, high-performance waterproof regrouting, and seamless plaster crack repairs.",
    images: [
      {
        src: "/images/pastwork/Bathroom Tiling.jpeg",
        caption: "Bathroom Tiling",
      },
      {
        src: "/images/pastwork/Floor Polishing.jpeg",
        caption: "Floor Polishing",
      },
      {
        src: "/images/pastwork/Floor Tiling.jpeg",
        caption: "Floor Tiling",
      },
    ],
    features: [
      "Interior wall emulsions, ceiling coats & woodwork trim finishes",
      "Weather-shield exterior painting with moisture barrier coating",
      "Cracked and chipped ceramic/porcelain tile replacement",
      "Hollow floor tile rebonding & waterproof anti-mildew regrouting",
      "Hairline plaster crack filling, skim coating & smooth sanding",
      "Full surface masking and mess-free cleanup guarantee",
    ],
    idealFor: ["Home Renovations", "Rental Makeovers", "Commercial Offices", "New Builds"],
  },
];

interface PastWorkCardProps {
  service: PastWorkItem;
  reversed?: boolean;
}

const PastWorkCard: React.FC<PastWorkCardProps> = ({ service, reversed = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const advanceNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === service.images.length - 1 ? 0 : prev + 1));
  }, [service.images.length]);

  const advancePrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? service.images.length - 1 : prev - 1));
  }, [service.images.length]);

  // Automatically advance slides every 4 seconds; pauses on hover and resets on manual interaction
  useEffect(() => {
    if (isPaused || service.images.length <= 1) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = setTimeout(advanceNext, 4000);
    return () => clearTimeout(timer);
  }, [currentImageIndex, isPaused, service.images.length, advanceNext]);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    advancePrev();
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    advanceNext();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      advanceNext();
    } else if (diff < -45) {
      advancePrev();
    }
    setTouchStartX(null);
  };

  const handleBookService = () => {
    if (typeof window !== "undefined") {
      // 1. Dispatch custom event to select the corresponding service in the form dropdown
      window.dispatchEvent(
        new CustomEvent("ontime-select-service", {
          detail: { category: service.dropdownCategory },
        })
      );

      // 2. On mobile screens (< 1024px), scroll directly to the booking form box
      // On desktop, scroll to the contact section overview
      const isMobile = window.innerWidth < 1024;
      const targetElement = isMobile
        ? (document.getElementById("booking-form") || document.getElementById("contact"))
        : document.getElementById("contact");

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const activeImage = service.images[currentImageIndex];

  return (
    <article
      id={service.id}
      className={`glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white ${reversed ? "lg:flex-row-reverse" : ""
        }`}
    >
      {/* ── Content Column (7 cols) ── */}
      <div className={`space-y-6 lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-xs font-bold uppercase tracking-wider">
          <span className="text-sky-600">{service.categoryIcon}</span>
          <span>{service.categoryBadge}</span>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {service.serviceNumber}. {service.title}
          </h3>
          <p className="mt-1.5 text-sm sm:text-base font-semibold text-sky-600">
            {service.tagline}
          </p>
        </div>

        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
          {service.description}
        </p>

        {/* Deliverables / Scope Checklist */}
        <div className="space-y-2.5 pt-1">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            What We Deliver:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Suitable For Tags */}
        <div className="pt-2 flex items-center flex-wrap gap-2 text-xs">
          <span className="text-slate-400 font-semibold">Suitable For:</span>
          {service.idealFor.map((item, idx) => (
            <span
              key={idx}
              className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA: Book This Service Button */}
        <div className="pt-3">
          <button
            type="button"
            onClick={handleBookService}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-sky-600 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 group shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Book This Service</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* ── Image Column with Carousel (5 cols) ── */}
      <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 group select-none bg-slate-100"
        >
          {service.images.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={`${service.title} - ${img.caption}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className={`object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${i === currentImageIndex
                ? "opacity-100 z-[1]"
                : "opacity-0 z-0 pointer-events-none"
                }`}
              priority={service.serviceNumber === "1" && i === 0}
            />
          ))}

          {/* Subtle gradient vignette at bottom */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

          {/* Navigation Buttons: Previous and Next */}
          <button
            type="button"
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/65 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/65 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image Caption at bottom */}
          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center pointer-events-none">
            <p className="text-white text-xs font-medium truncate drop-shadow-sm bg-slate-900/50 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 max-w-full">
              {activeImage.caption}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export const PastWork: React.FC = () => {
  return (
    <section id="past-work" className="py-20 md:py-28 bg-slate-50/60 relative">
      <div id="service-pillars" className="scroll-mt-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Workmanship"
          title="Tailored Property Care,"
          highlight="Delivered Always On Time"
          description="Explore authentic on-site case studies across our 7 core maintenance pillars. Click through each photo gallery to inspect our finished quality."
        />

        <div className="space-y-12 mt-12">
          {pastWorkData.map((service, index) => (
            <PastWorkCard
              key={service.id}
              service={service}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PastWork;
