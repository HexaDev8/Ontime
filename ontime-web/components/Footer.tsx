/**
 * @file app/components/Footer.tsx
 * @description Accessible, SEO-friendly site footer component.
 * Displays NAP (Name, Address, Phone), service breakdown, operational hours,
 * social links, and legal notices.
 */

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Clock,
  Phone,
  Mail,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Purpose (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="On Time Private Limited"
                  width={36}
                  height={36}
                  style={{ width: "85%", height: "auto" }}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                ON TIME <span className="text-sky-400 font-semibold text-sm">Pvt Ltd</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              On Time Private Limited is a specialized property maintenance and technical care
              company. Delivering timely professional cleaning, certified electrical and plumbing
              repairs, and precision appliance installation.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 bg-sky-950/60 border border-sky-800/60 px-3 py-2 rounded-xl w-fit">
              <Clock className="w-4 h-4 text-sky-400 animate-pulse" />
              <span>Guaranteed Punctual Technicians & Verified Work</span>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Office Deep Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  House & Villa Sanitization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Student Apartment Turnover
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Wiring Repairs & Breakers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Bulb & Lighting Installations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Plumbing Leak Repairs
                </a>
              </li>
            </ul>
          </div>

          {/* Equipment Installations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Appliance Setup
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Washing Machine Connections
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Microwave & Oven Fitouts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Wall Mounted TVs & Audio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Appliance Safety Checks
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-sky-400 transition-colors">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-400 transition-colors">
                  Service FAQs
                </a>
              </li>
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
                <a href="mailto:ontime.inf@yahoo.com" className="min-w-0 break-all hover:text-white transition-colors">
                  ontime.inf@yahoo.com
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
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a href="#faq" className="hover:text-slate-400 transition-colors">
              Security & Guarantee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
