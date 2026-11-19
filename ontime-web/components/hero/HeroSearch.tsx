/**
 * @file components/hero/HeroSearch.tsx
 * @description The "Hi Nutribot…" style chat/search pill from the reference,
 * adapted as a quick booking request: "Hi On Time, I need…".
 *
 * On submit it:
 * 1. Broadcasts the typed text via a `ontime:prefill` window event, which
 *    ContactForm listens for to pre-fill its "Scope Details" field.
 * 2. Smoothly scrolls the user to the #contact section.
 */

"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

/** Event name shared with ContactForm. */
export const PREFILL_EVENT = "ontime:prefill";

export function HeroSearch() {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: value.trim() }));
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex items-center gap-2 w-full max-w-md lg:max-w-lg rounded-full bg-white border border-slate-200/90 p-1.5 pl-5 shadow-sm focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-100 transition"
    >
      <label htmlFor="hero-request" className="sr-only">
        Describe the service you need
      </label>
      <input
        id="hero-request"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Hi On Time, I need…"
        className="flex-1 min-w-0 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
      />
      <button
        type="submit"
        aria-label="Send request"
        className="h-9 w-14 shrink-0 rounded-full bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center transition-colors active:scale-95"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
