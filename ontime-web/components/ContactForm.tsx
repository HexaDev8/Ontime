/**
 * @file app/components/ContactForm.tsx
 * @description Interactive service booking and quote request form.
 * Enables users to specify their property type, select core services
 * (Cleaning, Electrical/Plumbing, Appliance Setup), pick a date,
 * and submit an inquiry with instant client feedback.
 */

"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  Sparkles,
  MapPin,
  Compass,
} from "lucide-react";

// UK Phone number regex matching landlines, mobiles, and UK international dial code
// Examples: +44 7438 463543, 07438463543, 023 8012 3456, +44 20 7946 0991
const isValidUKPhoneNumber = (phone: string): boolean => {
  const cleaned = phone.replace(/[\s()-]/g, "");
  return /^(?:(?:\+44|0044)[1-9]\d{9}|0[12378]\d{9})$/.test(cleaned);
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyType: "Home / Residential",
    serviceCategory: "Professional Cleaning",
    details: "",
    preferredDate: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [highlightService, setHighlightService] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  // Listen for service selection events triggered from Services bento cards
  useEffect(() => {
    const handleServiceSelect = (event: Event) => {
      const customEvent = event as CustomEvent<{ category: string }>;
      if (customEvent.detail?.category) {
        setFormData((prev) => ({
          ...prev,
          serviceCategory: customEvent.detail.category,
        }));
        setHighlightService(true);
        setTimeout(() => setHighlightService(false), 2400);
      }
    };

    window.addEventListener("ontime-select-service", handleServiceSelect);
    return () => {
      window.removeEventListener("ontime-select-service", handleServiceSelect);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate that all fields are filled
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.preferredDate.trim() ||
      !formData.serviceCategory.trim() ||
      !formData.propertyType.trim() ||
      !formData.details.trim()
    ) {
      setErrorMessage("Please fill in all fields before submitting.");
      return;
    }

    // Validate UK Phone number
    if (!isValidUKPhoneNumber(formData.phone)) {
      setErrorMessage("Please enter a valid UK phone number (e.g. +44 7438 463543).");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || "Unable to send request right now. Please call our direct hotline.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error && err.message) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please check your details or call our hotline.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background radial accent */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-sky-200/30 blur-3xl rounded-full -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>
              Fast Response Desk
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ready for{" "}
              <span className="bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
                Stress-Free Maintenance?
              </span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Book your preferred date and time slot. Our team will verify your requirements
              and dispatch certified technicians with guaranteed punctuality.
            </p>

            <div className="space-y-3.5 pt-2">
              {/* 1. Phone Hotline */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Direct Booking Hotline</h4>
                  <a href="tel:+447438463543" className="text-base font-bold text-slate-900 hover:text-sky-600">
                    +44 7438 463543
                  </a>
                  <p className="text-xs text-slate-500">Quick dispatch & emergency assistance</p>
                </div>
              </div>

              {/* 2. Email Dispatch */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Email Dispatch</h4>
                  <a href="mailto:ontime.info@yahoo.com" className="text-base font-bold text-slate-900 hover:text-sky-600 break-all">
                    ontime.info@yahoo.com
                  </a>
                  <p className="text-xs text-slate-500">Guaranteed reply within 30 minutes</p>
                </div>
              </div>

              {/* 3. Operating Hours */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Operating Hours</h4>
                  <p className="text-sm font-semibold text-slate-800">Monday to Saturday: 9:00 AM – 5:00 PM</p>
                  <p className="text-xs text-slate-500">Sunday: Closed (On-call emergencies)</p>
                </div>
              </div>


              {/* 5. Service / Operating Areas */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Service & Operating Areas</h4>
                  <p className="text-sm font-semibold text-slate-900">Southampton & Surrounding Districts</p>
                  <p className="text-xs text-slate-500 ">Domestic, Commercial & Student Properties</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div id="booking-form" className="lg:col-span-7 scroll-mt-24">
            <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl bg-white/95">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Booking Request Received!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Our dispatch coordinator has
                    received your request for <strong>{formData.serviceCategory}</strong> and will call
                    you at <strong>{formData.phone}</strong> shortly to confirm your slot.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        propertyType: "Home / Residential",
                        serviceCategory: "Professional Cleaning",
                        details: "",
                        preferredDate: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900">
                      Request an Itemized Quote / Appointment
                    </h3>
                    <span className="text-xs font-bold text-sky-600 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Instant Review
                    </span>
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
                      <span className="font-bold text-red-500">Notice:</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Silva"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-hidden transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +44 7438 463543"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="david@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-hidden transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Service & Property Type Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center justify-between">
                        <span>Service Required *</span>
                        {highlightService && (
                          <span className="text-[11px] text-sky-600 font-bold animate-pulse">
                            Selected from Services
                          </span>
                        )}
                      </label>
                      <select
                        ref={selectRef}
                        value={formData.serviceCategory}
                        onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 outline-hidden transition-all bg-white ${highlightService
                          ? "border-sky-500 ring-4 ring-sky-200/80 shadow-md scale-[1.01]"
                          : "border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                          }`}
                      >
                        <option value="Professional Cleaning">1. Professional Cleaning (Domestic & Office)</option>
                        <option value="Air Conditioning Servicing">2. AC Servicing, Chemical Wash & Repair</option>
                        <option value="Plumbing & Sanitary Works">3. Plumbing Works & Bathroom Fittings</option>
                        <option value="Electrical Works & Repairs">4. Electrical Works & Safety Fixing</option>
                        <option value="Appliance & Electronics Repair">5. Fridge, Washing Machine & Electronics Repair</option>
                        <option value="Equipment & Appliance Setup">6. TV Mounting & Equipment Installation</option>
                        <option value="Painting & Tile Repairing">7. Painting Works & Tile Repairs</option>
                        <option value="Combined Maintenance Package">Combined Property Maintenance Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Property Type *
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-hidden transition-all bg-white"
                      >
                        <option value="Home / Residential">Home / Residential House</option>
                        <option value="Corporate Office">Corporate Office / Commercial</option>
                        <option value="Student Apartments">Student Apartments / Dormitory</option>
                        <option value="Rental Property / Airbnb">Rental Property / Airbnb</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Scope Details / Notes *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe what needs care (e.g., install 55-inch TV & washing machine, deep clean 3-bedroom flat, rewire trip switch...)"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-hidden transition-all"
                    ></textarea>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold text-base shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Sending your request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm & Dispatch Booking</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Strict privacy guaranteed. We never share your contact information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
