import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Sparkles, Tag, Gift, Percent } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Specials & Offers",
  description: "Exclusive deals and seasonal specials at Magalies Mountain Lodge. Save on accommodation, spa, and dining packages.",
};

const SPECIALS = [
  {
    title: "Weekend Wellness Escape",
    description: "2 nights luxury accommodation + full body massage + breakfast daily. Reconnect with tranquility.",
    originalPrice: 5200,
    salePrice: 3900,
    badge: "Most Popular",
    icon: <Sparkles className="w-6 h-6" />,
    validUntil: "Limited availability",
  },
  {
    title: "Couples Retreat",
    description: "2 nights + couples massage + private dinner for two + breakfast. The ultimate romantic escape.",
    originalPrice: 6800,
    salePrice: 4950,
    badge: "Best Value",
    icon: <Gift className="w-6 h-6" />,
    validUntil: "Book by end of month",
  },
  {
    title: "Midweek Mountain Break",
    description: "2 nights accommodation + R500 spa voucher + breakfast daily. Escape the city midweek.",
    originalPrice: 4200,
    salePrice: 2999,
    badge: "Saver",
    icon: <Tag className="w-6 h-6" />,
    validUntil: "Sun-Thu only",
  },
  {
    title: "Day Spa Special",
    description: "Full day spa experience including 2 treatments, lunch, and pool access. No overnight stay needed.",
    originalPrice: 1800,
    salePrice: 1200,
    badge: "Day Visitor",
    icon: <Percent className="w-6 h-6" />,
    validUntil: "Weekdays only",
  },
  {
    title: "Long Stay Discount",
    description: "Stay 3+ nights and receive 15% off your total accommodation. Perfect for a proper break.",
    originalPrice: 0,
    salePrice: 0,
    badge: "15% Off",
    icon: <Clock className="w-6 h-6" />,
    validUntil: "3+ night minimum",
    discount: "15%",
  },
  {
    title: "Honeymoon Package",
    description: "3 nights in our best suite + couples spa + private dining + champagne. Start your journey in luxury.",
    originalPrice: 12000,
    salePrice: 8500,
    badge: "Romance",
    icon: <Users className="w-6 h-6" />,
    validUntil: "By appointment",
  },
];

export default function OffersPage() {
  return (
    <div className="pt-20">
      <section className="bg-primary/5 py-16 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Save More</span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Specials & Offers</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
          Take advantage of our exclusive deals and seasonal promotions. Book direct for the best rates.
        </p>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SPECIALS.map((special, i) => (
              <AnimatedSection key={special.title} delay={i * 0.1}>
                <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-primary text-white border-0">{special.badge}</Badge>
                      <div className="text-primary">{special.icon}</div>
                    </div>
                    <h3 className="font-bold text-xl mb-3">{special.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{special.description}</p>
                    {special.discount ? (
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-primary">{special.discount}</span>
                        <span className="text-muted-foreground text-sm ml-2">OFF</span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="text-2xl font-bold text-primary">R {formatPrice(special.salePrice)}</span>
                        <span className="text-sm text-muted-foreground line-through">R {formatPrice(special.originalPrice)}</span>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {special.validUntil}
                    </p>
                  </div>
                  <div className="p-6 border-t border-border">
                    <Link href="/book">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest">
                        BOOK THIS DEAL
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-stone-50 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-foreground mb-4">Want a Custom Package?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us to create a tailored package that suits your needs and budget.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest px-8">
                GET IN TOUCH
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
