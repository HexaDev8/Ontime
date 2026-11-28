/**
 * @file components/pastwork.tsx
 * @description Comprehensive Past Work & Core Services Showcase.
 * Displays dedicated cards for all 7 core services with interactive image carousels
 * featuring authentic on-site photography, next/previous slide controls,
 * comprehensive deliverable checklists, and direct booking actions linked to the appointment form.
 */

"use client";

import React, { useState } from "react";
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
        src: "/images/pastwork/cleaning-1.jpg",
        caption: "Full living room deep scrub & floor buffing",
      },
      {
        src: "/images/pastwork/cleaning-2.jpg",
        caption: "Student apartment kitchen & surface sanitization",
      },
      {
        src: "/images/pastwork/cleaning-3.jpg",
        caption: "Private residence bedroom & upholstery refresh",
      },
      {
        src: "/images/pastwork/cleaning-4.jpg",
        caption: "Post-lease turnover & spotless handover",
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
        src: "/images/pastwork/ac-1.jpg",
        caption: "Indoor split unit high-pressure coil wash",
      },
      {
        src: "/images/pastwork/ac-2.jpg",
        caption: "Anti-bacterial chemical bath & blower rotor clearing",
      },
      {
        src: "/images/pastwork/ac-3.jpg",
        caption: "R32/R410A manifold gauge pressure test & gas refill",
      },
      {
        src: "/images/pastwork/ac-4.jpg",
        caption: "Condenser fan motor diagnostic & safety inspection",
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
        src: "/images/pastwork/plumbing-1.jpg",
        caption: "Under-sink copper & PVC drainage pipe assembly",
      },
      {
        src: "/images/pastwork/plumbing-2.jpg",
        caption: "Main water line pressure testing & leak sealing",
      },
      {
        src: "/images/pastwork/plumbing-3.jpg",
        caption: "Concealed shower valve & hot/cold mixer calibration",
      },
      {
        src: "/images/pastwork/plumbing-4.jpg",
        caption: "Hot water geyser connection & safety relief valve",
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
        src: "/images/pastwork/electrical-1.jpg",
        caption: "Main distribution board (DB) rewiring & breaker install",
      },
      {
        src: "/images/pastwork/electrical-2.jpg",
        caption: "RCD safety trip diagnosis & circuit breaker testing",
      },
      {
        src: "/images/pastwork/electrical-3.jpg",
        caption: "Modern flush-mount switchboard & wiring alignment",
      },
      {
        src: "/images/pastwork/electrical-4.jpg",
        caption: "Commercial 3-phase load verification & conduit safety",
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
        src: "/images/pastwork/repair-1.jpg",
        caption: "Washing machine drum bearing replacement & pump check",
      },
      {
        src: "/images/pastwork/repair-2.jpg",
        caption: "Refrigerator cooling coil & compressor restoration",
      },
      {
        src: "/images/pastwork/repair-3.jpg",
        caption: "Built-in oven thermostat & heating element rebuild",
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
        src: "/images/pastwork/install-1.jpg",
        caption: "Heavy-duty TV wall mounting with concealed conduit",
      },
      {
        src: "/images/pastwork/install-2.jpg",
        caption: "Display level testing & masonry bracket anchor lock",
      },
      {
        src: "/images/pastwork/install-3.jpg",
        caption: "Washing machine plumbing connection & vibration leveling",
      },
      {
        src: "/images/pastwork/install-4.jpg",
        caption: "Built-in kitchen oven cabinet integration & safety test",
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
        src: "/images/pastwork/finish-1.jpg",
        caption: "Interior smooth wall emulsion & pristine ceiling coating",
      },
      {
        src: "/images/pastwork/finish-2.jpg",
        caption: "Exterior weather-shield protective paint application",
      },
      {
        src: "/images/pastwork/finish-3.jpg",
        caption: "Bathroom floor tile replacement & precision regrouting",
      },
      {
        src: "/images/pastwork/finish-4.jpg",
        caption: "Wall tile realignment, hollow re-bonding & clean sealant",
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

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? service.images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === service.images.length - 1 ? 0 : prev + 1));
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
        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 group select-none bg-slate-100">
          <Image
            src={activeImage.src}
            alt={`${service.title} - ${activeImage.caption}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={service.serviceNumber === "1"}
          />

          {/* Subtle gradient vignette at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

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

          {/* Image Caption & Slide Indicator at bottom */}
          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-2 pointer-events-auto">
            <p className="text-white text-xs font-medium truncate drop-shadow-sm bg-slate-900/50 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 max-w-[65%]">
              {activeImage.caption}
            </p>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/70 backdrop-blur-md border border-white/20 shrink-0">
              {service.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all rounded-full cursor-pointer ${currentImageIndex === i
                    ? "w-4 h-1.5 bg-sky-400"
                    : "w-1.5 h-1.5 bg-white/60 hover:bg-white"
                    }`}
                />
              ))}
              <span className="text-[10px] text-white/90 font-bold ml-1">
                {currentImageIndex + 1}/{service.images.length}
              </span>
            </div>
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
