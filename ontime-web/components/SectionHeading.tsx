/**
 * @file app/components/SectionHeading.tsx
 * @description Reusable section header component that establishes visual consistency
 * with an informative badge, high-contrast title, and natural-language description.
 */

import React from "react";

interface SectionHeadingProps {
  /** Small category badge text e.g. "Reliable Maintenance", "Expert Care" */
  badge: string;
  /** Primary title string */
  title: string;
  /** Highlighted text inside the title rendered in Sky Blue */
  highlight?: string;
  /** Explanatory description paragraph optimized for clarity and SEO/GEO parsing */
  description?: string;
  /** Alignment of text: center or left */
  align?: "center" | "left";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  description,
  align = "center",
}) => {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 text-xs font-bold tracking-wide uppercase shadow-xs mb-3">
        <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
        {badge}
      </div>

      {/* Main Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {/* Supporting Text */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
