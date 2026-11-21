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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), [slides.length]);

  // Auto-advance; restarts whenever the slide changes (so manual clicks/swipes reset the timer).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(next, 6000);
    return () => clearTimeout(id);
  }, [index, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      next(); // swipe left -> next slide
    } else if (diff < -45) {
      prev(); // swipe right -> prev slide
    }
    setTouchStartX(null);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-200 select-none"
    >
      {/* Photo stack (cross-fade) */}
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          loading={i === 0 ? "eager" : undefined}
          sizes="(max-width: 1024px) 100vw, 45vw"
          className={`object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Bottom shade for legible overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

      {/* Crew profile pill & controls */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex items-center justify-between gap-2 sm:gap-3">
        {/* Crew profile pill */}
        <div className="flex items-center gap-2 sm:gap-3 rounded-full bg-white/95 backdrop-blur-md py-1 px-1.5 sm:py-1.5 sm:pl-1.5 sm:pr-5 pr-3 shadow-lg max-w-[75%] sm:max-w-none">
          <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 overflow-hidden">
            <Image
              src="/images/logo.png"
              alt=""
              width={30}
              height={30}
              style={{ width: "75%", height: "auto" }}
              className="object-contain"
            />
          </span>
          <span className="leading-tight min-w-0">
            <span className="flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-900 truncate">
              On Time Crew <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-500 shrink-0" />
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-slate-500 truncate block" aria-live="polite">
              {slides[index].label}
            </span>
          </span>
        </div>

        {/* Next arrow + dots */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={next}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              next();
            }}
            aria-label="Show next photo"
            className="relative z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 border-white/80 bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-slate-900 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 pointer-events-none" />
          </button>
          <div className="flex flex-col gap-1 sm:gap-1.5">
            {slides.map((s, i) => (
              <span
                key={s.src}
                className={`w-1 sm:w-1.5 rounded-full bg-white transition-all ${i === index ? "h-3 sm:h-4 opacity-100" : "h-1 sm:h-1.5 opacity-50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
