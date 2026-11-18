/**
 * @file app/components/ContactForm.tsx
 * @description Interactive service booking and quote request form.
 * Enables users to specify their property type, select core services
 * (Cleaning, Electrical/Plumbing, Appliance Setup), pick a date,
 * and submit an inquiry with instant client feedback.
 */

"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate instantaneous, reliable server action submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
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

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Direct Booking Hotline</h4>
                  <a href="tel:+94770000000" className="text-base font-bold text-slate-900 hover:text-sky-600">
                    +94 (77) 000-0000 / +94 (11) 200-0000
                  </a>
                  <p className="text-xs text-slate-500">Available 7 days a week, 7:00 AM – 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Email Dispatch</h4>
                  <a href="mailto:support@ontimepvt.com" className="text-base font-bold text-slate-900 hover:text-sky-600">
                    service@ontimelimited.com
                  </a>
                  <p className="text-xs text-slate-500">Guaranteed reply within 30 minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Operating Hours</h4>
                  <p className="text-sm font-semibold text-slate-800">Monday – Sunday: 7:00 AM - 8:00 PM</p>
                  <p className="text-xs text-sky-600 font-medium">Emergency on-call crew available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7">
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
                        placeholder="e.g. +94 77 123 4567"
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
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="david@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-hidden transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Service & Property Type Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Service Required *
                      </label>
                      <select
                        value={formData.serviceCategory}
                        onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm text-slate-900 outline-hidden transition-all bg-white"
                      >
                        <option value="Professional Cleaning">1. Professional Cleaning</option>
                        <option value="Plumbing & Electrical Services">2. Plumbing & Electrical Services</option>
                        <option value="Equipment Installation">3. Equipment Installation</option>
                        <option value="Combined Maintenance Package">Combined Property Package</option>
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
                      Scope Details / Notes
                    </label>
                    <textarea
                      rows={3}
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
