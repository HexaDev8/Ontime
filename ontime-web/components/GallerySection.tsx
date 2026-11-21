/**
 * @file app/components/GallerySection.tsx
 * @description Proof of workmanship gallery using authentic on-site images
 * provided from the company's real maintenance operations.
 */

import React from "react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { CheckCircle2, ShieldCheck } from "lucide-react";

interface GalleryItem {
  src: string;
  category: string;
  caption: string;
  tag: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/services/cleaning-main.jpg",
    category: "Professional Cleaning",
    caption: "Deep Floor Scrubbing & Sanitization",
    tag: "Commercial Grade",
  },
  {
    src: "/images/services/electrical-main.jpg",
    category: "Electrical Works",
    caption: "Certified Wiring Repairs & Distribution Boxes",
    tag: "Safety Compliant",
  },
  {
    src: "/images/services/appliances-main.jpg",
    category: "Appliance Setup",
    caption: "Precision Electrical Appliance Fitouts",
    tag: "Tested & Certified",
  },
  {
    src: "/images/gallery/clean-1.jpg",
    category: "Office Cleaning",
    caption: "Detailed High-Dusting & Surface Polishing",
    tag: "Office Spaces",
  },
  {
    src: "/images/gallery/clean-2.jpg",
    category: "Residential Care",
    caption: "Pristine Tile & Grout Restoration",
    tag: "Homes & Flats",
  },
  {
    src: "/images/gallery/electric-1.jpg",
    category: "Wiring & Lighting",
    caption: "High-Efficiency Bulb & Fixture Installations",
    tag: "Energy Saving",
  },
];

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Field Work"
          title="See Our Technicians"
          highlight="In Action On Site"
          description="Real results from hundreds of office deep cleans, electrical overhauls, and equipment installations across residences and commercial centers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-900"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={`${item.caption} - On Time Private Limited`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-bold bg-white/90 text-slate-800 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-sky-400 block mb-1">
                    {item.category}
                  </span>
                  <p className="text-sm font-bold leading-snug">
                    {item.caption}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Completed by On Time Certified Crew</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
