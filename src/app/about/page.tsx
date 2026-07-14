import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Shield, Heart, Leaf, Award, Users, TreePine } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the story behind Magalies Mountain Lodge & Body Spa. A premium 3-star mountain retreat in the heart of the Magaliesberg, South Africa.",
};

const VALUES = [
  { icon: <Shield className="w-6 h-6" />, title: "Exclusivity", desc: "Strictly adults only for a peaceful, uninterrupted retreat." },
  { icon: <Heart className="w-6 h-6" />, title: "Hospitality", desc: "Warm, personalised service that makes every guest feel at home." },
  { icon: <Leaf className="w-6 h-6" />, title: "Nature", desc: "Deep respect for the natural beauty of the Magaliesberg." },
  { icon: <Award className="w-6 h-6" />, title: "Excellence", desc: "Continuous pursuit of the highest standards in every detail." },
  { icon: <Users className="w-6 h-6" />, title: "Community", desc: "Supporting local suppliers and the surrounding community." },
  { icon: <TreePine className="w-6 h-6" />, title: "Sustainability", desc: "Committed to eco-friendly practices and conservation." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/images/magalies-mountain-lodge-5.jpg"
          alt="About Magalies Mountain Lodge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-3">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Magalies</h1>
          <div className="w-16 h-1 bg-white/40 mx-auto" />
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
            <AnimatedSection className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/images/magalies-mountain-lodge-lounge.jpg"
                  alt="Lodge Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection className="w-full lg:w-1/2" delay={0.2}>
              <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Since Day One</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">A Mountain Sanctuary</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Magalies Mountain Lodge & Body Spa was born from a deep love for the Magaliesberg Mountains and a vision to create a sanctuary where adults can escape the noise of everyday life and reconnect with nature, each other, and themselves.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Situated in the tranquil Moot Valley, just a short drive from Pretoria, our lodge offers the perfect blend of rustic mountain charm and modern luxury. Every detail has been thoughtfully curated to ensure an experience of pure relaxation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a strictly adults-only establishment, we guarantee an atmosphere of tranquility that is increasingly rare in today&apos;s world. Whether you&apos;re here for a romantic escape, a wellness retreat, or simply to breathe in the mountain air, Magalies is your haven.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {VALUES.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.1}>
                <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-shadow text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {val.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                  <p className="text-muted-foreground text-sm">{val.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-3">Experience It Yourself</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Mountain Escape Awaits</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Discover why guests return to Magalies Mountain Lodge again and again.
            </p>
            <Link href="/book">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-none tracking-widest px-10 h-12">
                BOOK YOUR STAY
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
