/**
 * @file components/hero/HeroTopicTags.tsx
 * @description Interactive topic pills beneath the hero search bar.
 * Tapping any tag automatically pre-fills the booking form and scrolls down.
 */

"use client";

import React from "react";
import { PREFILL_EVENT } from "./HeroSearch";

interface HeroTopicTagsProps {
  topics: string[];
}

export function HeroTopicTags({ topics }: HeroTopicTagsProps) {
  const handleTopicClick = (topic: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent(PREFILL_EVENT, {
          detail: `I need ${topic.toLowerCase()} service for my property.`,
        })
      );
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul
      aria-label="Service topics"
      className="order-1 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] lg:order-none lg:mx-0 lg:mt-auto lg:flex-wrap lg:overflow-visible lg:px-0"
    >
      {topics.map((topic) => (
        <li key={topic}>
          <button
            type="button"
            onClick={() => handleTopicClick(topic)}
            className="inline-block whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 hover:border-sky-300 hover:text-sky-600 transition-colors cursor-pointer"
          >
            {topic}
          </button>
        </li>
      ))}
      <li>
        <a
          href="#services"
          className="inline-block whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 hover:border-sky-300 hover:text-sky-600 transition-colors"
        >
          +12 Services
        </a>
      </li>
    </ul>
  );
}
