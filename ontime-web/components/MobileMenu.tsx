/**
 * @file components/MobileMenu.tsx
 * @description Shared slide-down mobile menu used by both HeroNav and the
 * floating Navbar, so the mobile experience is identical in every scroll state.
 *
 * Props:
 * - `open`: whether the menu is visible.
 * - `onClose`: called when a link is tapped, the backdrop is clicked, or Escape is pressed.
 */

"use client";

import { useEffect } from "react";
import { X, PhoneCall, ArrowUpRight } from "lucide-react";
import { navLinks, PHONE_HREF } from "./navigation";
import { BrandLogo } from "./BrandLogo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Close on Escape and lock page scroll while the menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
      {/* Dimmed backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="absolute top-3 left-3 right-3 rounded-[2rem] bg-white p-5 shadow-2xl border border-slate-100">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <BrandLogo showTagline />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="py-3 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="px-4 py-3 rounded-2xl text-base font-semibold text-slate-800 hover:bg-sky-50 hover:text-sky-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 py-3 text-sm font-semibold text-slate-700"
          >
            <PhoneCall className="w-4 h-4 text-sky-500" /> Call Us
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-sky-500 py-3 text-sm font-bold text-white shadow-md shadow-sky-500/25"
          >
            Book Now <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
