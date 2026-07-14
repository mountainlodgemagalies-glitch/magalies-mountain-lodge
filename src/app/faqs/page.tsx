"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const FAQ_CATEGORIES = [
  {
    category: "General",
    faqs: [
      { q: "Is Magalies Mountain Lodge adults only?", a: "Yes, we are a strictly adults-only establishment. No children under 18 are permitted. This policy ensures a peaceful and relaxing environment for all our guests." },
      { q: "Are pets allowed?", a: "No, pets are not permitted on the premises. This includes the accommodation, restaurant, spa, and all outdoor areas." },
      { q: "What are your check-in and check-out times?", a: "Check-in is at 14:00 and check-out is at 10:00. Early check-in and late check-out may be available on request." },
      { q: "Is there Wi-Fi available?", a: "Yes, complimentary Wi-Fi is available throughout the lodge, including all rooms, public areas, and outdoor spaces." },
    ],
  },
  {
    category: "Booking & Payment",
    faqs: [
      { q: "How do I make a reservation?", a: "You can book directly through our website using the NightsBridge booking system, or contact us via phone, email, or WhatsApp." },
      { q: "What payment methods do you accept?", a: "We accept EFT (bank transfer), credit and debit cards via PayFast, and direct bank payments. A 50% deposit is required to secure your booking." },
      { q: "What is your cancellation policy?", a: "Cancellations 14+ days before arrival receive a full refund (minus R200 admin fee). 7-13 days: 50% refund. Less than 7 days: no refund." },
      { q: "Can I modify my booking?", a: "Yes, subject to availability. Please contact us as soon as possible to discuss any changes to your reservation." },
    ],
  },
  {
    category: "Spa & Wellness",
    faqs: [
      { q: "Do I need to book spa treatments in advance?", a: "We highly recommend booking spa treatments in advance to ensure availability, especially during weekends and peak seasons." },
      { q: "Can day visitors use the spa?", a: "Yes! Day visitors are welcome to book spa treatments and use our day visitor packages. No overnight stay is required." },
      { q: "Are gift vouchers available?", a: "Yes, we offer spa gift vouchers that can be purchased online or at the lodge. Vouchers are valid for 6 months from the date of purchase." },
    ],
  },
  {
    category: "Activities & Dining",
    faqs: [
      { q: "What activities are available?", a: "We offer hiking trails, bird watching, nature walks, and can arrange trips to local attractions like Hartbeespoort Dam and Cheetah Park." },
      { q: "Is the restaurant open to non-guests?", a: "Yes, our restaurant is open to day visitors and the public. We recommend making a reservation for dinner." },
      { q: "Do you cater for dietary requirements?", a: "Yes, our kitchen can accommodate vegetarian, vegan, gluten-free, and other dietary needs with advance notice." },
    ],
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const allFaqs = FAQ_CATEGORIES.flatMap((cat) =>
    cat.faqs.map((faq) => ({ ...faq, category: cat.category }))
  );

  const filteredFaqs = searchQuery
    ? allFaqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <div className="pt-20">
      <section className="bg-primary/5 py-16 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Got Questions?</span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
          Find answers to common questions about Magalies Mountain Lodge.
        </p>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Search */}
          <div className="relative mb-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {filteredFaqs ? (
            <div className="space-y-3">
              {filteredFaqs.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No matching questions found.</p>
              )}
              {filteredFaqs.map((faq, i) => (
                <div key={i} className="border border-border bg-white">
                  <button
                    onClick={() => setOpenIndex(openIndex === `${faq.category}-${i}` ? null : `${faq.category}-${i}`)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                        openIndex === `${faq.category}-${i}` ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === `${faq.category}-${i}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          ) : (
            FAQ_CATEGORIES.map((cat) => (
              <div key={cat.category} className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">{cat.category}</h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq, i) => (
                    <div key={i} className="border border-border bg-white">
                      <button
                        onClick={() => setOpenIndex(openIndex === `${cat.category}-${i}` ? null : `${cat.category}-${i}`)}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                            openIndex === `${cat.category}-${i}` ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openIndex === `${cat.category}-${i}` && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
