/**
 * @file components/Navbar.tsx
 * @description Floating "scrolled" navigation bar.
 *
 * Behaviour:
 * - While the hero (#hero) is on screen, this bar is hidden. The hero renders
 *   its own integrated navigation (HeroNav) that matches the reference design.
 * - As soon as the hero scrolls out of view, this bar slides down from the top
 *   as a fully rounded (`rounded-full`) glassmorphic pill.
 * - On mobile it shows logo + hamburger and opens the shared <MobileMenu />.
 *
 * While hidden, the bar is marked `inert` so it can't be tabbed to.
 */

"use client";

import { useEffect, useState } from "react";
import { Menu, PhoneCall, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { MobileMenu } from "./MobileMenu";
import { navLinks, PHONE_HREF } from "./navigation";

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("hero");
      // Show once the hero's bottom edge passes ~100px from the top of the viewport.
      const pastHero = hero ? hero.getBoundingClientRect().bottom < 100 : window.scrollY > 600;
      setVisible(pastHero);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <header
        inert={!visible}
        className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 transition-all duration-500 ease-out ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/90 py-2 pl-3 pr-2 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5 backdrop-blur-xl sm:pl-4"
        >
          <BrandLogo />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-1.5">
            <a
              href={PHONE_HREF}
              aria-label="Call On Time"
              className="w-10 h-10 rounded-full flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-500/25 hover:bg-sky-600 transition-colors"
            >
              Book Now <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href="#contact"
              className="rounded-full bg-sky-500 px-4 py-2 text-xs font-bold text-white shadow-sm"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-800"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
