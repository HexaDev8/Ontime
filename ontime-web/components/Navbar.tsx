/**
 * @file app/components/Navbar.tsx
 * @description Modern glassmorphic navigation bar component.
 * Features sky-blue branding, responsive mobile menu drawer,
 * quick direct call action, and accessible navigation links.
 */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, PhoneCall, Sparkles, Clock } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navLinks: NavItem[] = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Projects & Proof", href: "#gallery" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top emergency / quick contact announcement pill */}
      <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 text-white text-xs py-1.5 px-4 text-center font-medium shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full font-semibold">
            <Clock className="w-3.5 h-3.5 animate-pulse" /> Always On Time Guarantee
          </span>
          <span className="hidden sm:inline text-sky-100">
            Professional Cleaning • Plumbing & Electrical Works • Equipment Installation
          </span>
          <a
            href="tel:+94770000000"
            className="underline underline-offset-2 hover:text-sky-100 font-bold ml-1 inline-flex items-center gap-1"
          >
            <PhoneCall className="w-3 h-3" /> Call for Immediate Booking
          </a>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2"
      >
        <div className="glass-panel rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-md border border-slate-200/80">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-white p-1 border border-sky-100 shadow-sm flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="On Time Private Limited Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                ON TIME <span className="text-sky-500 text-xs font-semibold uppercase tracking-wider block sm:inline">Pvt Ltd</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Property Care & Maintenance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50/80 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold text-sm px-4.5 py-2.5 rounded-xl shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 transform active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Service</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 glass-panel rounded-2xl border border-slate-200 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200/70 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm py-2.5 rounded-xl shadow-sm transition-colors"
              >
                Book a Fast Service
              </a>
              <a
                href="tel:+94770000000"
                className="w-full flex items-center justify-center gap-2 text-center text-slate-700 font-semibold text-sm py-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-sky-500" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
