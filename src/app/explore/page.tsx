import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MapPin, Camera, Bird, Mountain, TreePine, Compass, Binoculars } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore the Magaliesberg",
  description: "Discover natural beauty and thrilling attractions surrounding Magalies Mountain Lodge. Hiking, bird watching, local attractions, and more.",
};

const ATTRACTIONS = [
  {
    title: "Hartbeespoort Dam",
    distance: "15 km",
    description: "A picturesque dam with cableway, restaurants, markets, and water activities.",
    icon: <Compass className="w-6 h-6" />,
  },
  {
    title: "Hartbeespoort Aquarium",
    distance: "10 km",
    description: "Explore fascinating marine and freshwater life, perfect for a relaxed afternoon.",
    icon: <Binoculars className="w-6 h-6" />,
  },
  {
    title: "Cheetah Park",
    distance: "12 km",
    description: "See magnificent cheetahs up close in a natural setting.",
    icon: <Camera className="w-6 h-6" />,
  },
  {
    title: "Magaliesberg Canopy Tour",
    distance: "8 km",
    description: "Zip through the treetops on an exhilarating canopy tour.",
    icon: <TreePine className="w-6 h-6" />,
  },
  {
    title: "Sterkfontein Caves",
    distance: "45 km",
    description: "Visit the Cradle of Humankind, a UNESCO World Heritage Site.",
    icon: <Mountain className="w-6 h-6" />,
  },
  {
    title: "Lion & Safari Park",
    distance: "35 km",
    description: "Encounter lions, giraffes, and other wildlife on a game drive.",
    icon: <Bird className="w-6 h-6" />,
  },
];

const LODGE_ACTIVITIES = [
  { title: "Hiking Trails", desc: "Explore the ancient Magaliesberg on foot." },
  { title: "Bird Watching", desc: "Over 300 species in the Moot Valley." },
  { title: "Photography", desc: "Capture stunning mountain landscapes." },
  { title: "Nature Walks", desc: "Guided walks through indigenous forests." },
  { title: "Sunrise & Sunset", desc: "Watch the mountains glow from our deck." },
  { title: "Stargazing", desc: "Clear mountain skies for spectacular views." },
];

export default function ExplorePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/images/magalies-mountain-lodge-5.jpg"
          alt="Explore the Magaliesberg"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-3">Discover</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Explore Magalies</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Discover the natural beauty and thrilling attractions surrounding our mountain lodge.
          </p>
        </div>
      </section>

      {/* At the Lodge */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">At the Lodge</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Step right out of your room and into nature. The Magaliesberg is your playground.
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {LODGE_ACTIVITIES.map((act, i) => (
              <AnimatedSection key={act.title} delay={i * 0.1}>
                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{act.title}</h3>
                  <p className="text-muted-foreground text-sm">{act.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Nearby Attractions */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nearby Attractions</h2>
            <p className="text-muted-foreground text-lg">Explore the wonders of the Magaliesberg region</p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ATTRACTIONS.map((attr, i) => (
              <AnimatedSection key={attr.title} delay={i * 0.1}>
                <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="h-48 bg-stone-100 relative flex items-center justify-center">
                    <div className="text-primary/30">{attr.icon && <attr.icon.type className="w-16 h-16" />}</div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {attr.distance}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{attr.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{attr.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Find Us</h2>
          </AnimatedSection>
          <div className="w-full h-96 bg-stone-200 rounded-lg flex items-center justify-center relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.1!2d28.2!3d-25.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzAwLjAiUyAyOMKwMTInMDAuMCJF!5e0!3m2!1sen!2sza!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
