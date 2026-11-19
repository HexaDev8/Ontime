/**
 * @file components/hero/HeroCarousel.tsx
 * @description The tall, rounded hero photo card on the right side of the hero.
 * - Cross-fades between real On Time job photos (auto-advances every 6s).
 * - Desktop bottom bar (as in the reference): crew profile pill on the left,
 *   round outlined "next" arrow + slide dots on the right.
 *
 * Props:
 * - `slides`: list of { src, alt, label } photos. `label` appears in the crew pill.
 */

"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";

export interface HeroSlide {
  src: string;
  alt: string;
  /** Short caption, e.g. "Home Deep Cleaning" */
  label: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length]);

  // Auto-advance; restarts whenever the slide changes (so manual clicks reset the timer).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(next, 6000);
    return () => clearTimeout(id);
  }, [index, next]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-200">
      {/* Photo stack (cross-fade) */}
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="(max-width: 1024px) 100vw, 45vw"
          className={`object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Bottom shade for legible overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent lg:from-slate-950/45 lg:via-transparent" />

      {/* Desktop bottom bar */}
      <div className="absolute bottom-5 left-5 right-5 hidden lg:flex items-center justify-between gap-3">
        {/* Crew profile pill */}
        <div className="flex items-center gap-3 rounded-full bg-white/95 backdrop-blur-md py-1.5 pl-1.5 pr-5 shadow-lg">
          <span className="w-10 h-10 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center overflow-hidden">
            <Image src="/images/logo.png" alt="" width={30} height={30} className="object-contain w-3/4 h-auto" />
          </span>
          <span className="leading-tight">
            <span className="flex items-center gap-1 text-sm font-bold text-slate-900">
              On Time Crew <BadgeCheck className="w-4 h-4 text-sky-500" />
            </span>
            <span className="text-xs font-medium text-slate-500" aria-live="polite">
              {slides[index].label}
            </span>
          </span>
        </div>

        {/* Next arrow + dots */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={next}
            aria-label="Show next photo"
            className="w-12 h-12 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="flex flex-col gap-1.5">
            {slides.map((s, i) => (
              <span
                key={s.src}
                className={`w-1.5 rounded-full bg-white transition-all ${i === index ? "h-4 opacity-100" : "h-1.5 opacity-50"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile dots (top-right) */}
      <div className="absolute top-4 right-4 flex gap-1.5 lg:hidden">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full bg-white transition-all ${i === index ? "w-5" : "w-1.5 opacity-60"}`}
          />
        ))}
      </div>
    </div>
  );
}
