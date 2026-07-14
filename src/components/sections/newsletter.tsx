"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In production, this would call a server action
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-20 bg-stone-900">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/50 block mb-3">Stay Connected</span>
        <h2 className="text-3xl md:text-4xl text-white mb-4">Newsletter</h2>
        <p className="text-white/60 mb-8">
          Subscribe for exclusive offers, mountain stories, and updates from Magalies.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-accent">
            <CheckCircle className="w-5 h-5" />
            <p className="font-semibold">Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-primary rounded-none"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-sm font-semibold tracking-widest flex items-center justify-center gap-2 rounded-none transition-colors"
            >
              <Send className="w-4 h-4" />
              SUBSCRIBE
            </button>
          </form>
        )}

        <p className="text-white/30 text-xs mt-4">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
