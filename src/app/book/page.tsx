import type { Metadata } from "next";
import { NightsBridgeWidget } from "@/components/booking/nightsbridge-widget";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description: "Book your stay at Magalies Mountain Lodge. Check availability, view rates, and reserve your mountain escape.",
};

export default function BookPage() {
  return (
    <div className="pt-20">
      <section className="bg-primary/5 py-16 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Reserve</span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Book Your Stay</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
          Check availability and secure your mountain escape. For assistance, contact us directly.
        </p>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <NightsBridgeWidget />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-12 bg-stone-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help Booking?</h2>
              <p className="text-muted-foreground mb-6">
                Our team is ready to assist you with your reservation. Reach out via phone or WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+27123456789"
                  className="flex items-center gap-2 bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +27 (0) 12 345 6789
                </a>
                <a
                  href="https://wa.me/27825512681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
