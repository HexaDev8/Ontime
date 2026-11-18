export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FaqItem[] = [
  {
    category: "Services & Scope",
    question: "What specific maintenance services does On Time Private Limited offer?",
    answer:
      "On Time Private Limited specializes in three core property care pillars: 1) Professional deep cleaning and regular sanitization for offices, private houses, homes, and student apartments; 2) Comprehensive electrical repairs (wiring, socket overhauls, lightbulb setups) and plumbing maintenance (leak stops, tap replacements, pipe clears); and 3) Professional equipment installation including washing machines, microwaves, televisions, and kitchen appliances.",
  },
  {
    category: "Scheduling & Availability",
    question: "Why is the company named 'On Time'? What is your punctuality policy?",
    answer:
      "Our core operational philosophy is rooted in absolute respect for our clients' schedules. When you book an appointment with On Time Private Limited, our crew arrives precisely within the scheduled time slot, fully prepared with equipment and spares. If unforeseen traffic delays occur, dispatch proactively alerts you with real-time updates.",
  },
  {
    category: "Cleaning Specifications",
    question: "Do you provide cleaning for student accommodation turnover and offices?",
    answer:
      "Yes. We offer specialized turnover cleaning contracts for student residences and student apartments between terms, as well as recurring daily or weekly sanitization for commercial offices. We bring industrial HEPA vacuums, eco-friendly detergents, and steam cleaners.",
  },
  {
    category: "Electrical & Plumbing",
    question: "Are your electricians and technicians certified to handle wiring repairs?",
    answer:
      "Every electrical and plumbing technician on the On Time team is certified, vetted, and adheres strictly to regional safety codes. All wiring fixes, circuit breaker resets, and fixture installations are thoroughly tested with diagnostic multimeters before handover.",
  },
  {
    category: "Equipment Installation",
    question: "Can you install newly purchased washing machines, TVs, and microwaves?",
    answer:
      "Yes. Our installation technicians handle complete unboxing, heavy bracket mounting for wall TVs, inlet and drainage plumbing connections for washing machines, and dedicated electrical safety checks for microwaves and ovens.",
  },
  {
    category: "Pricing & Invoicing",
    question: "How do you calculate service pricing? Are there any hidden fees?",
    answer:
      "We believe in 100% transparent pricing. You receive an itemized upfront quote based on property dimensions, number of appliances, or specific repair requirements. There are no hidden call-out fees or unexpected surcharges.",
  },
];
