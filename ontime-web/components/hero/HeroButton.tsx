/**
 * @file components/hero/HeroButton.tsx
 * @description Hero call-to-action button that smoothly navigates directly to the booking form.
 * Sized consistently as a clean pill button.
 */

"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function HeroButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center gap-3">
      <a
        href="#contact"
        onClick={handleClick}
        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 transition-all duration-200 transform active:scale-98"
      >
        <span>Book a Service Now</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
