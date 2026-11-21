/**
 * @file app/page.tsx
 * @description Main landing page for On Time Private Limited.
 * Implements a modern Sky Blue aesthetic, structured card layout,
 * component-driven architecture, and embedded JSON-LD schema markup
 * for SEO, AEO, and GEO excellence.
 */

import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PastWork } from "@/components/pastwork";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      {/* Search Engine, AEO & GEO Structured Data */}
      <JsonLd />

      {/* Header & Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section (Asymmetric Minimalist Design with Search Pill & Floating Bento Overlays) */}
        <HeroSection />

        {/* Services Showcase (formerly BentoSection) */}
        <ServicesSection />

        {/* Verified Past Work & Case Studies with Interactive Multi-Image Carousels */}
        <PastWork />

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
