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
      <div className="flex items-center justify-between lg:justify-start lg:gap-10">
        <BrandLogo />

        {/* Desktop links (first 4 only, to keep the row as clean as the reference) */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="lg:hidden w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
