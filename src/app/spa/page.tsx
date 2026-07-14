import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Sparkles, Leaf, Heart, Gift, Clock } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Spa & Wellness",
  description: "Indulge in luxurious spa treatments at Magalies Mountain Lodge Body Spa. Massages, facials, couples retreats, and gift vouchers.",
};

const TREATMENTS = [
  { category: "Massages", items: [
    { name: "Full Body Massage", duration: "60 min", price: 650 },
    { name: "Deep Tissue Massage", duration: "60 min", price: 750 },
    { name: "Hot Stone Massage", duration: "75 min", price: 850 },
    { name: "Neck, Back & Shoulder", duration: "45 min", price: 450 },
    { name: "Aromatherapy Massage", duration: "60 min", price: 700 },
  ]},
  { category: "Facials", items: [
    { name: "Classic Facial", duration: "45 min", price: 450 },
    { name: "Luxury Anti-Ageing Facial", duration: "60 min", price: 650 },
    { name: "Hydrating Facial", duration: "45 min", price: 500 },
    { name: "Deep Cleansing Facial", duration: "50 min", price: 550 },
  ]},
  { category: "Packages", items: [
    { name: "Mountain Retreat Full Day", duration: "Full Day", price: 2800, popular: true },
    { name: "Couples Escape", duration: "Half Day", price: 2400, popular: true },
    { name: "Quick Rejuvenate", duration: "45 min", price: 850 },
    { name: "Pamper Package", duration: "3 Hours", price: 1600 },
  ]},
];

const GIFT_VOUCHERS = [
  { value: 500, label: "R 500" },
  { value: 1000, label: "R 1,000" },
  { value: 1500, label: "R 1,500" },
  { value: 2000, label: "R 2,000" },
  { value: 2500, label: "R 2,500" },
  { value: 3000, label: "R 3,000" },
];

export default function SpaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/images/magalies-mountain-lodge-3.jpg"
          alt="Magalies Mountain Lodge Body Spa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-3">Body Spa</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Spa & Wellness</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Immerse yourself in our serene Body Spa. Let our expert therapists melt away your stress.
          </p>
        </div>
      </section>

      {/* Treatment Menu */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          {TREATMENTS.map((section, si) => (
            <AnimatedSection key={section.category} delay={si * 0.1} className="mb-16 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                {section.category === "Massages" && <Leaf className="w-6 h-6 text-primary" />}
                {section.category === "Facials" && <Sparkles className="w-6 h-6 text-primary" />}
                {section.category === "Packages" && <Heart className="w-6 h-6 text-primary" />}
                {section.category}
              </h2>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline justify-between py-4 border-b border-stone-200/60 hover:bg-stone-50/40 px-2 transition-colors duration-300 group"
                  >
                    <div className="flex-1 pr-8">
                      <div className="flex items-center gap-3">
                        <h3 className="font-normal text-lg text-foreground tracking-wide">{item.name}</h3>
                        {item.popular && (
                          <span className="text-[9px] uppercase tracking-widest text-primary border border-primary/30 px-2 py-0.5 font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1 font-light">
                        <Clock className="w-3.5 h-3.5" /> {item.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-8 shrink-0">
                      <span className="text-base font-bold text-foreground">R {formatPrice(item.price)}</span>
                      <Link href="/book">
                        <span className="text-primary hover:text-primary-hover font-semibold tracking-widest text-xs uppercase transition-colors duration-300">
                          Book
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Gift Vouchers */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Gift Vouchers</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Give the gift of relaxation. Purchase a spa gift voucher securely online via PayFast.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 max-w-3xl mx-auto mb-8">
              {GIFT_VOUCHERS.map((v) => (
                <button
                  key={v.value}
                  className="bg-white border-2 border-border hover:border-primary p-4 text-center transition-colors group"
                >
                  <span className="text-lg font-bold text-foreground group-hover:text-primary">{v.label}</span>
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest px-8">
              PURCHASE VOUCHER
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Day Visitors */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading text-4xl mb-6 text-white">Day Visitors Welcome</h2>
            <p className="text-white/60 mb-8 text-lg">
              You do not need to be a staying guest to enjoy our spa facilities. Day visitors are welcome to book treatments and purchase gift vouchers online securely via PayFast.
            </p>
            <Link href="/day-visits">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-foreground rounded-none tracking-widest px-8">
                VIEW DAY PACKAGES
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
