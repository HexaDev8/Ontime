/**
 * @file app/components/ServiceCard.tsx
 * @description Card component representing an individual core service offering.
 * Displays high-resolution imagery, feature badges, detailed scope of work,
 * and a direct action trigger for booking.
 */

import React from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  categoryBadge: string;
  tagline: string;
  description: string;
  imageSrc: string;
  features: string[];
  idealFor: string[];
}

interface ServiceCardProps {
  service: ServiceItem;
  reversed?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, reversed = false }) => {
  return (
    <article
      id={service.id}
      className={`glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Content Column (7 cols) */}
      <div className={`space-y-6 lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 border border-sky-100 text-xs font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
          {service.categoryBadge}
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {service.title}
          </h3>
          <p className="mt-1 text-sm font-semibold text-sky-600">
            {service.tagline}
          </p>
        </div>

        <p className="text-slate-600 leading-relaxed text-base">
          {service.description}
        </p>

        {/* Deliverables / Scope of Work Checklist */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            What We Deliver:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal for Tags */}
        <div className="pt-2 flex items-center flex-wrap gap-2 text-xs">
          <span className="text-slate-400 font-semibold">Suitable For:</span>
          {service.idealFor.map((item, idx) => (
            <span
              key={idx}
              className="bg-slate-100/90 text-slate-600 px-2.5 py-1 rounded-lg font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-2">
          <a
            href={`#contact?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-sky-600 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 group"
          >
            <span>Book This Service</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Image Column (5 cols) */}
      <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
          <Image
            src={service.imageSrc}
            alt={`${service.title} by On Time Private Limited`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold bg-slate-900/40 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20">
            Verified On-Site Workmanship
          </div>
        </div>
      </div>
    </article>
  );
};
