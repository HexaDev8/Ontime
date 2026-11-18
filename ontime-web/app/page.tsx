/**
 * @file app/page.tsx
 * @description Main landing page for On Time Private Limited.
 * Implements a modern Sky Blue aesthetic, structured card layout,
 * component-driven architecture, and embedded JSON-LD schema markup
 * for SEO, AEO, and GEO excellence.
 */

import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard, ServiceItem } from "@/components/ServiceCard";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

// Service data modeled strictly according to company core offerings
const servicesData: ServiceItem[] = [
  {
    id: "cleaning",
    title: "1. Professional Cleaning Services",
    categoryBadge: "Sanitization & Hygiene",
    tagline: "Offices, Private Houses, Homes & Student Apartments",
    description:
      "Maintain a pristine, hygienic, and welcoming environment with our specialized deep cleaning teams. From corporate headquarters requiring immaculate presentation to swift student apartment turnover between terms, we utilize high-grade disinfectant solutions, rotary scrubbers, and HEPA filtration systems to restore every corner.",
    imageSrc: "/images/services/cleaning-main.jpg",
    features: [
      "Commercial office daily & after-hours deep sanitization",
      "Private home and luxury villa thorough floor-to-ceiling cleaning",
      "Fast student apartment & dormitory turnover cleans",
      "Tile, grout, window, carpet scrubbing & stain extraction",
      "Post-renovation dust elimination & site preparation",
      "Eco-safe, non-toxic, pet-friendly cleaning detergents",
    ],
    idealFor: ["Corporate Offices", "Family Homes", "Student Housing", "Property Landlords"],
  },
  {
    id: "electrical-plumbing",
    title: "2. Plumbing & Electrical Services",
    categoryBadge: "Technical Maintenance",
    tagline: "Certified Wiring, Bulb Installations & Plumbing Repairs",
    description:
      "Prevent costly damages and safety hazards with prompt, licensed repairs. Our technical specialists diagnose electrical glitches, rewire faulty distribution boards, install decorative and high-bay lighting, and fix persistent plumbing leaks, clogged drains, and pipe fittings with lasting precision.",
    imageSrc: "/images/services/electrical-main.jpg",
    features: [
      "General electrical diagnostics & breaker panel repairs",
      "Modern LED, pendant & security bulb installations",
      "Wall socket repairs, surge protection & switch replacements",
      "Emergency leak mitigation, tap repairs & valve replacements",
      "Pipe descaling, drain cleaning & sanitary fixture fixes",
      "Comprehensive multi-meter electrical load verification",
    ],
    idealFor: ["Residential Properties", "Commercial Facilities", "Retail Stores", "Warehouses"],
  },
  {
    id: "installation",
    title: "3. Equipment & Appliance Installation",
    categoryBadge: "Appliance Setup",
    tagline: "Washing Machines, Microwaves, TVs & Electronics",
    description:
      "Eliminate the stress of configuring new appliances. Our trained technicians arrive with heavy-duty anchors, leveling tools, and certified plumbing adapters to unbox, mount, plumb, wire, and test your new equipment cleanly and securely.",
    imageSrc: "/images/services/appliances-main.jpg",
    features: [
      "Washing machine plumbing connection, inlet filtering & test cycles",
      "Microwave, built-in oven & range hood fitouts and electrical checks",
      "Television wall mounting with concealed cabling & studs verification",
      "Audio-visual entertainment system calibration",
      "Anti-vibration leveling and water leak checks",
      "Old packaging removal & responsible eco-friendly disposal",
    ],
    idealFor: ["New Homeowners", "Tenants", "Airbnbs & Hotels", "Student Accommodations"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Search Engine, AEO & GEO Structured Data */}
      <JsonLd />

      {/* Header & Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Core Services Breakdown */}
        <section id="services" className="py-20 md:py-28 bg-slate-50/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Our Core Pillars"
              title="Tailored Property Care"
              highlight="Delivered Always On Time"
              description="Explore our three fundamental maintenance services designed to protect your property's value, functionality, and hygiene."
            />

            <div className="space-y-12">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  reversed={index % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Feature Grid */}
        <FeatureGrid />

        {/* Step-by-Step Workflow */}
        <ProcessSection />

        {/* Verified Proof Gallery */}
        <GallerySection />

        {/* Social Proof & Testimonials */}
        <TestimonialSection />

        {/* Answer Engine Optimization FAQ */}
        <FaqSection />

        {/* Contact & Booking Form */}
        <ContactForm />
      </main>

      {/* Global Site Footer */}
      <Footer />
    </>
  );
}
