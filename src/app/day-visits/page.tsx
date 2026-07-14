import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Sparkles, Utensils, TreePine, Camera, Sun, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Day Visits",
  description: "Enjoy a day at Magalies Mountain Lodge. Spa treatments, dining, and mountain experiences without an overnight stay.",
};

const DAY_PACKAGES = [
  {
    title: "Spa Day Visitor",
    price: "From R 1,200",
    description: "Enjoy spa treatments and use of our relaxation facilities. Includes a light lunch.",
    icon: <Sparkles className="w-8 h-8" />,
    features: ["Spa Treatment", "Light Lunch", "Pool Access", "Relaxation Areas"],
  },
  {
    title: "Dining Experience",
    price: "From R 450",
    description: "Join us for a memorable meal in our mountain restaurant. Breakfast, lunch, or dinner.",
    icon: <Utensils className="w-8 h-8" />,
    features: ["3-Course Meal", "Mountain Views", "Welcome Drink", "Dessert"],
  },
  {
    title: "Mountain Explorer",
    price: "From R 350",
    description: "Guided hiking and nature experience with packed lunch and refreshments.",
    icon: <TreePine className="w-8 h-8" />,
    features: ["Guided Hike", "Packed Lunch", "Refreshments", "Trail Map"],
  },
];

export default function DayVisitsPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/images/magalies-mountain-lodge-1.jpg"
          alt="Day Visits at Magalies Mountain Lodge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-3">Day Visitor</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Day Visits</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Experience Magalies without an overnight stay. Day visitors are always welcome.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Day Packages</h2>
            <p className="text-muted-foreground text-lg">
              You don&apos;t need to be a staying guest to enjoy our facilities. Choose from our curated day packages and spend a day in paradise.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {DAY_PACKAGES.map((pkg, i) => (
              <AnimatedSection key={pkg.title} delay={i * 0.15}>
                <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="p-8 text-center flex-1">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                      {pkg.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-2">{pkg.title}</h3>
                    <p className="text-primary font-bold text-lg mb-4">{pkg.price}</p>
                    <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>
                    <ul className="space-y-2 text-left max-w-[200px] mx-auto">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 border-t border-border">
                    <Link href="/contact">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest">
                        ENQUIRE NOW
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-foreground mb-6">Good to Know</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {[
                { icon: <Sun className="w-5 h-5" />, title: "Day Visits Welcome", desc: "No booking required for dining. Spa and activities by appointment." },
                { icon: <Shield className="w-5 h-5" />, title: "Adults Only", desc: "Our lodge is strictly adults only. No children or pets permitted." },
                { icon: <Camera className="w-5 h-5" />, title: "Photography", desc: "Capture the beauty. Photography permits available on request." },
                { icon: <Utensils className="w-5 h-5" />, title: "Walk-ins Welcome", desc: "Restaurant walk-ins welcome subject to availability." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="text-primary shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
