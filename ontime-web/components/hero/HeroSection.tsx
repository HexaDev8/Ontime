/**
 * @file components/HeroSection.tsx
 * @description Hero section recreated from the "Landing Pages Redesign" reference.
 *
 * DESKTOP (lg+) — 2-column grid:
 * ┌──────────────────────────────┬───────────────────────┐
 * │ HeroNav (logo + links)       │  Photo card  [Book ●] │ ← CTA sits in a notch
 * │                              │ ┌────────┐            │   cut into the photo
 * │ small label                  │ │Today's │  photo     │
 * │ Big headline + avatars       │ │jobs    │            │ ← floating cards
 * │ paragraph                    │ └────────┘            │   overlap left edge
 * │ [Hi On Time, I need…  (→)]   │ ┌──────┐              │
 * │                              │ │washer│              │
 * │ (tag) (tag) (tag) (+12)      │ (crew pill)    (→) •  │
 * └──────────────────────────────┴───────────────────────┘
 *
 * MOBILE — stacked: HeroNav → photo card (headline overlaid in white, a small
 * job card overlapping its bottom edge) → tags → paragraph → request pill.
 *
 * Server Component: only HeroNav, HeroSearch and HeroCarousel ship client JS.
 * The notch background color comes from the `--hero-bg` CSS variable, so it
 * MUST match the section background (set once on the <section> below).
 */

import type { CSSProperties } from "react";
import { Clock, ShieldCheck, CheckCircle2, WashingMachine, CalendarCheck, Check } from "lucide-react";
import { HeroNav } from "./HeroNav";
import { HeroButton } from "./HeroButton";
import { HeroTopicTags } from "./HeroTopicTags";
import { HeroCarousel, type HeroSlide } from "./HeroCarousel";

/** Real On Time job photos shown in the hero card. */
const slides: HeroSlide[] = [
  {
    src: "/images/gallery/clean-3.jpg",
    alt: "Living room after a full home deep clean by On Time Private Limited",
    label: "Home Deep Cleaning",
  },
  {
    src: "/images/services/cleaning-main.jpg",
    alt: "Freshly cleaned lounge and hardwood floor in a residential property",
    label: "Living Space Care",
  },
  {
    src: "/images/gallery/electric-1.jpg",
    alt: "Wall-mounted television installed by an On Time technician",
    label: "TV Wall Mounting",
  },
];

/** Fast dispatch & service progress steps. */
const dispatchSteps = [
  { icon: Clock, title: "Booking Confirmed", subtitle: "Under 15 minutes", tone: "bg-sky-100 text-sky-600" },
  { icon: ShieldCheck, title: "Technician Assigned", subtitle: "Equipped & ready", tone: "bg-amber-100 text-amber-600" },
  { icon: CheckCircle2, title: "Job Completed", subtitle: "Tested & signed off", tone: "bg-emerald-100 text-emerald-600" },
];

/** Trust badge floating card (Suggestion 3: Licensed & Insured). */
function TrustCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-xl shadow-slate-900/10 border border-slate-100 ${className}`}>
      <div className="flex items-center gap-2.5">
        <span className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </span>
        <div>
          <p className="text-xs font-bold text-slate-900">Fully Licensed & Insured</p>
          <p className="text-[10px] text-slate-600">Guaranteed Workmanship</p>
        </div>
      </div>
      <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
        {["Vetted Crew", "Safety Certified", "Work Insured"].map((chip) => (
          <span key={chip} className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 border border-slate-100">
            <Check className="w-2.5 h-2.5 text-sky-500" /> {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative bg-[var(--hero-bg)] pt-4 pb-14 sm:pt-6 lg:pb-20"
      style={{ "--hero-bg": "#f6f9fc" } as CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-0">
          {/* ── 1. In-hero navigation (row 1, left) ───────────────────── */}
          <div className="lg:col-span-6 lg:row-start-1 lg:pt-3">
            <HeroNav />
          </div>

          {/* ── 2. Photo card (spans both rows, right) ────────────────── */}
          <div className="relative lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1">
            <div className="hero-photo-frame relative min-h-96">
              <HeroCarousel slides={slides} />

              {/* Notch with "Book Now" CTA (desktop). Two `.notch-fillet`
                  spans create the smooth inverted corners. */}
              <div className="absolute top-0 right-0 z-20 hidden lg:block rounded-bl-[1.75rem] bg-[var(--hero-bg)] pb-3 pl-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-sky-400 hover:text-sky-600 transition-colors"
                >
                  Book Now <CalendarCheck className="w-4 h-4" />
                </a>
                <span aria-hidden="true" className="notch-fillet absolute top-0 -left-6" />
                <span aria-hidden="true" className="notch-fillet absolute -bottom-6 right-0" />
              </div>

              {/* Floating "Quick Dispatch" card — overlaps the photo's left edge (desktop) */}
              <div className="absolute top-[20%] -left-12 z-10 hidden w-64 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-xl shadow-slate-900/10 border border-slate-100 lg:block">
                <p className="text-xs font-bold text-slate-900 tracking-tight pb-2.5 mb-2.5 border-b border-slate-100">
                  Service Process
                </p>
                <ul className="space-y-3">
                  {dispatchSteps.map(({ icon: Icon, title, subtitle, tone }) => (
                    <li key={title} className="flex items-center gap-2.5 min-w-0">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${tone}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                      <div className="leading-tight min-w-0">
                        <p className="text-xs font-semibold text-slate-800 truncate">{title}</p>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">{subtitle}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating trust card — positioned on the right side of the photo (desktop) */}
              <TrustCard className="absolute top-[58%] -right-10 z-10 hidden lg:block" />

              {/* Mobile: headline overlaid on the photo (visual only; the real
                  <h1> below stays in the DOM for SEO / screen readers). */}
              <p
                aria-hidden="true"
                className="absolute inset-x-4 min-[400px]:inset-x-6 bottom-14 text-center text-[1.75rem] min-[400px]:text-[2rem] sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white lg:hidden"
              >
                A Simplified Way to Keep Your Property Spotless.
              </p>

              {/* Mobile: trust card overlapping the bottom edge */}
              <TrustCard className="absolute left-1/2 bottom-0 z-10 w-max -translate-x-1/2 translate-y-1/2 lg:hidden" />
            </div>
          </div>

          {/* ── 3. Copy column (row 2, left) ──────────────────────────── */}
          <div className="flex flex-col pt-10 lg:col-span-6 lg:row-start-2 lg:pt-0 lg:pb-2">
            {/* Small label */}
            <p className="hidden text-sm font-semibold text-sky-500 lg:mt-auto lg:block">
              Property Care Experts
            </p>

            {/* Headline — screen-reader only on mobile (the overlay shows it visually) */}
            <h1
              id="hero-title"
              className="sr-only lg:not-sr-only lg:mt-3 lg:text-5xl xl:text-[3.5rem] lg:font-extrabold lg:leading-[1.12] lg:tracking-tight lg:text-slate-900"
            >
              A Simplified Way to Keep Your{" "}
              <span className="text-sky-500">Property Spotless.</span>
            </h1>

            {/* Supporting copy (GEO-friendly plain-language summary) */}
            <p className="order-2 mt-5 max-w-lg text-sm leading-relaxed text-slate-500 lg:order-none lg:mt-5 lg:text-base">
              Book cleaning, electrical, plumbing and appliance installation with On Time
              Private Limited — certified crews that arrive exactly when promised. That&apos;s it.
            </p>

            {/* Call to action button */}
            <div className="order-3 mt-5 lg:order-none lg:mt-7">
              <HeroButton />
            </div>

            {/* Topic tags — first under the photo on mobile, bottom-left on desktop */}
            <HeroTopicTags />
          </div>
        </div>
      </div>
    </section>
  );
}
