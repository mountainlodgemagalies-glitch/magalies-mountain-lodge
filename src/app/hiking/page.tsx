import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Mountain, TreePine, Bird, Compass, Footprints, Sunrise } from "lucide-react";

export const metadata: Metadata = {
  title: "Hiking & Nature Trails",
  description: "Explore the Magaliesberg Mountains with our curated hiking trails. From gentle walks to challenging mountain hikes.",
};

const TRAILS = [
  {
    title: "Moot Valley Walk",
    difficulty: "Easy",
    duration: "1-2 hours",
    description: "A gentle stroll through the valley, perfect for bird watching and enjoying the indigenous vegetation.",
    icon: <TreePine className="w-6 h-6" />,
  },
  {
    title: "Mountain Ridge Trail",
    difficulty: "Moderate",
    duration: "3-4 hours",
    description: "A rewarding hike along the ridge with panoramic views of the surrounding mountains and valleys.",
    icon: <Mountain className="w-6 h-6" />,
  },
  {
    title: "Sunrise Summit",
    difficulty: "Challenging",
    duration: "4-5 hours",
    description: "Start before dawn and reach the summit for a breathtaking Magaliesberg sunrise experience.",
    icon: <Sunrise className="w-6 h-6" />,
  },
  {
    title: "Birding Trail",
    difficulty: "Easy",
    duration: "2-3 hours",
    description: "A guided walk focusing on the incredible birdlife of the Magaliesberg region.",
    icon: <Bird className="w-6 h-6" />,
  },
];

const TIPS = [
  "Start early to avoid the midday heat",
  "Bring at least 1.5L of water per person",
  "Wear sturdy hiking shoes",
  "Apply sunscreen and wear a hat",
  "Carry a charged phone for emergencies",
  "Respect wildlife and stay on marked trails",
];

export default function HikingPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/images/magalies-mountain-lodge-5.jpg"
          alt="Hiking in the Magaliesberg"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-3">Into Nature</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Hiking & Trails</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Step out of the lodge and into the ancient Magaliesberg Mountains.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Trails</h2>
            <p className="text-muted-foreground text-lg">
              The Magaliesberg is one of the oldest mountain ranges in the world. Explore its beauty through our curated hiking experiences suitable for all fitness levels.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {TRAILS.map((trail, i) => (
              <AnimatedSection key={trail.title} delay={i * 0.1}>
                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      {trail.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{trail.title}</h3>
                      <div className="flex gap-3 mb-3">
                        <span className="text-xs bg-secondary px-2 py-1 rounded">{trail.difficulty}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Footprints className="w-3 h-3" /> {trail.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{trail.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-primary" /> Hiking Tips
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TIPS.map((tip) => (
                  <div key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book a Guided Hike</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Our experienced guides will take you through the best trails the Magaliesberg has to offer.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-none tracking-widest px-10 h-12">
                ENQUIRE NOW
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
