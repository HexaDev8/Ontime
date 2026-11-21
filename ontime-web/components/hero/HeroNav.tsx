/**
 * @file components/hero/HeroNav.tsx
 * @description Navigation as it appears *inside* the hero (matches the reference):
 * - Desktop: logo followed by plain text links, with no background bar. The
 *   "Book Now" CTA lives in the notch of the hero image (see HeroSection).
 * - Mobile: logo on the left, round hamburger button on the right.
 *
 * Once the user scrolls past the hero, the floating <Navbar /> takes over.
 */

"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { BrandLogo } from "../BrandLogo";
import { MobileMenu } from "../MobileMenu";
import { navLinks } from "../navigation";

export function HeroNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between lg:justify-start gap-4 xl:gap-8">
        <div className="shrink-0">
          <BrandLogo />
        </div>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-3.5 xl:gap-6 whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          onTouchEnd={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
          aria-label="Open menu"
          aria-expanded={open}
          className="lg:hidden relative z-20 w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs active:scale-95 transition-transform cursor-pointer shrink-0"
        >
          <Menu className="w-5 h-5 pointer-events-none" />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
