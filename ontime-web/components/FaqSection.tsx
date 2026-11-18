/**
 * @file app/components/FaqSection.tsx
 * @description Answer Engine Optimization (AEO) and FAQ accordion component.
 * Provides clear question & answer structures that AI engines and search overviews
 * can directly index and extract.
 */

"use client";

import React, { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData, FaqItem } from "./faqData";

export type { FaqItem };
export { faqData };

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Direct Answers to"
          highlight="Your Common Questions"
          description="Clear facts about our services, booking process, safety standards, and pricing for home and facility managers."
        />

        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-sky-50/40 border-sky-300 shadow-sm"
                    : "bg-white border-slate-200/90 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-slate-900 text-base sm:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-sky-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-sky-100/60 mt-1">
                    <p>{faq.answer}</p>
                    <div className="mt-3 inline-block text-xs font-semibold text-sky-600 bg-sky-100/80 px-2.5 py-0.5 rounded-md">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
