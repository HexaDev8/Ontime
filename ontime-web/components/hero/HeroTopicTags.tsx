/**
 * @file components/hero/HeroTopicTags.tsx
 * @description Topic pills beneath the hero search bar.
 * Displayed as visual category tags/labels without form click triggers.
 */

import React from "react";

/** Default topic tags for services offered */
export const defaultTopics = ["Cleaning", "Electrical", "Plumbing", "Installation"];

interface HeroTopicTagsProps {
  topics?: string[];
}

export function HeroTopicTags({ topics = defaultTopics }: HeroTopicTagsProps) {
  return (
    <ul
      aria-label="Service topics"
      className="order-1 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] lg:order-none lg:mx-0 lg:mt-auto lg:flex-wrap lg:overflow-visible lg:px-0"
    >
      {topics.map((topic) => (
        <li key={topic}>
          <span
            className="inline-block whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 shadow-2xs select-none"
          >
            {topic}
          </span>
        </li>
      ))}
      <li>
        <a
          href="#services"
          className="inline-block whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 hover:border-sky-300 hover:text-sky-600 transition-colors"
        >
          More Services ...
        </a>
      </li>
    </ul>
  );
}
