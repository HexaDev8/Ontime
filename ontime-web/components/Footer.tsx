/**
 * @file app/components/Footer.tsx
 * @description Accessible, SEO-friendly site footer component.
 * Displays NAP (Name, Address, Phone), service breakdown, operational hours,
 * social links, and legal notices.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Phone,
  Mail,
} from "lucide-react";
import { navLinks } from "./navigation";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Purpose (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center group" aria-label="On Time Private Limited – Home">
              <Image
                src="/images/logo.png"
                alt="On Time Private Limited"
                width={180}
                height={64}
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              On Time Private Limited is a specialized property maintenance and technical care
              company. Delivering timely professional cleaning, certified electrical and plumbing
              repairs, and precision appliance installation.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 bg-sky-950/60 border border-sky-800/60 px-3 py-2 rounded-xl w-fit">
              <Clock className="w-4 h-4 text-sky-400 animate-pulse" />
              <span>Guaranteed Punctual Technicians & Verified Work</span>
            </div>

            {/* Social Links */}
            <div className="pt-1">
              <a
                href="https://www.facebook.com/share/1Dokfxz65B/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-sky-600 border border-slate-700/80 hover:border-sky-500 text-slate-300 hover:text-white text-xs font-semibold transition-all group"
                aria-label="Follow On Time Private Limited on Facebook"
              >
                <svg
                  className="w-4 h-4 fill-current text-sky-400 group-hover:text-white transition-colors"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-sky-400 transition-colors cursor-default">Kitchen Exhaust & Hood Degreasing</li>
              <li className="hover:text-sky-400 transition-colors cursor-default">Commercial Flat Grill Cleaning</li>
              <li className="hover:text-sky-400 transition-colors cursor-default">Office Deep Cleaning</li>
              <li className="hover:text-sky-400 transition-colors cursor-default">House & Villa Sanitization</li>
              <li className="hover:text-sky-400 transition-colors cursor-default">Wiring Repairs & Breakers</li>
              <li className="hover:text-sky-400 transition-colors cursor-default">Plumbing Leak Repairs</li>
            </ul>
          </div>

          {/* Quick Links (from Navigation) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-sky-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NAP (Name, Address, Phone) & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Hours
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a href="tel:+447438463543" className="hover:text-white transition-colors">
                  +44 7438 463543
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a href="mailto:ontime.info@yahoo.com" className="min-w-0 break-all hover:text-white transition-colors">
                  ontime.info@yahoo.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Mon - Sat: 9:00 AM - 5:00 PM</span>
              </p>
              <p className="flex items-start gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Licensed, Bonded & Fully Insured Property Care</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 On Time Private Limited. All rights reserved.
          </p>
          <p className="text-slate-400 font-medium">
            Designed by <span className="text-sky-400 font-semibold">hexadevsolutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
