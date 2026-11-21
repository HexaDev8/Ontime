/**
 * @file app/components/seo/JsonLd.tsx
 * @description JSON-LD structured schema markup for Search Engines,
 * Answer Engines (AEO), and Generative AI Overviews (GEO).
 * Integrates LocalBusiness, HomeAndConstructionBusiness, Service, and FAQPage schemas.
 */

import React from "react";
import { faqData } from "@/components/faqData";

export const JsonLd: React.FC = () => {
  // LocalBusiness & HomeAndConstructionBusiness Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://ontimelimited.com/#organization",
    name: "On Time Private Limited",
    alternateName: "On Time Property Care",
    legalName: "On Time Private Limited",
    url: "https://ontimelimited.com",
    logo: "https://ontimelimited.com/images/logo.png",
    image: "https://ontimelimited.com/images/services/cleaning-main.jpg",
    description:
      "On Time Private Limited provides prompt, certified property maintenance, professional cleaning for offices, houses, and student apartments, electrical wiring and plumbing repairs, and precision equipment installation.",
    telephone: "+44-7438-463543",
    email: "ontime.inf@yahoo.com",
    priceRange: "££",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "GBP",
    address: {
      "@type": "PostalAddress",
      streetAddress: "29, Carlisle Road",
      addressLocality: "Southampton",
      addressCountry: "GB",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Southampton",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Property Maintenance & Care Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Cleaning Services",
            description:
              "Deep cleaning, sanitization, and turnover care for offices, private houses, homes, and student apartments.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plumbing & Electrical Maintenance",
            description:
              "General electrical works, bulb installations, wiring repairs, and plumbing leak maintenance by certified technicians.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Equipment & Appliance Installation",
            description:
              "Professional setup, mounting, calibration, and installation of washing machines, microwaves, televisions, and electrical appliances.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "348",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // FAQPage Schema for Voice and Answer Engines (AEO)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
