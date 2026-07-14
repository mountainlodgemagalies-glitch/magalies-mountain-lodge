import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Users, Projector, Wifi, Coffee, Utensils, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Conference & Corporate Retreats",
  description: "Host your next conference, team building, or corporate retreat at Magalies Mountain Lodge. Modern facilities surrounded by natural beauty.",
};

const FACILITIES = [
  { icon: <Projector className="w-6 h-6" />, title: "AV Equipment", desc: "Projector, screen, sound system" },
  { icon: <Users className="w-6 h-6" />, title: "Up to 60 Guests", desc: "Flexible seating configurations" },
  { icon: <Wifi className="w-6 h-6" />, title: "High-Speed Wi-Fi", desc: "Reliable connectivity throughout" },
  { icon: <Coffee className="w-6 h-6" />, title: "Catering", desc: "Breakfast, lunch, and refreshments" },
  { icon: <Utensils className="w-6 h-6" />, title: "Team Building", desc: "Outdoor activities and adventures" },
  { icon: <Car className="w-6 h-6" />, title: "Secure Parking", desc: "Ample on-site parking" },
];

export default function ConferencePage() {
  return (
    <div className="pt-20">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/images/magalies-mountain-lodge-4.jpg"
          alt="Conference Facilities at Magalies Mountain Lodge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-3">Corporate</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Conferences & Retreats</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Where productive meetings meet mountain tranquility.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto mb-24">
            <AnimatedSection className="w-full lg:w-1/2">
              <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Inspire Your Team</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meetings That Matter
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Break free from the boardroom. Our conference facilities offer a refreshing change of scenery that sparks creativity and collaboration. Surrounded by the Magaliesberg Mountains, your team will be inspired to think differently.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From intimate board meetings to larger conferences and team-building retreats, we provide flexible spaces, professional service, and seamless catering to make your event a success.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest px-8">
                  REQUEST A QUOTE
                </Button>
              </Link>
            </AnimatedSection>
            <AnimatedSection className="w-full lg:w-1/2" delay={0.2}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/images/magalies-mountain-lodge-2.jpg"
                  alt="Conference Setup"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Conference Facilities</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FACILITIES.map((fac, i) => (
              <AnimatedSection key={fac.title} delay={i * 0.1}>
                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {fac.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{fac.title}</h3>
                  <p className="text-muted-foreground text-sm">{fac.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-stone-50 text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Plan Your Event?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Contact our events team to discuss your requirements and receive a tailored proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest px-8">
                  GET IN TOUCH
                </Button>
              </Link>
              <Link href="/book">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none tracking-widest px-8">
                  BOOK ACCOMMODATION
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
