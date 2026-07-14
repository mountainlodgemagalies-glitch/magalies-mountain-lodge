import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Heart, Camera, Music, Utensils, Flower2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Weddings",
  description: "Say 'I do' at Magalies Mountain Lodge. A breathtaking mountain venue for your dream wedding in the Magaliesberg.",
};

const FEATURES = [
  { icon: <Heart className="w-6 h-6" />, title: "Romantic Venue", desc: "Mountain backdrop for your special day" },
  { icon: <Camera className="w-6 h-6" />, title: "Photo Opportunities", desc: "Stunning natural settings" },
  { icon: <Utensils className="w-6 h-6" />, title: "Catering", desc: "Customised wedding menus" },
  { icon: <Music className="w-6 h-6" />, title: "Entertainment", desc: "Dance floor and音响" },
  { icon: <Flower2 className="w-6 h-6" />, title: "Décor", desc: "In-house and external options" },
  { icon: <Star className="w-6 h-6" />, title: "Accommodation", desc: "On-site rooms for guests" },
];

export default function WeddingsPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/images/magalies-mountain-lodge-3.jpg"
          alt="Weddings at Magalies Mountain Lodge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-3">Forever Begins Here</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Weddings</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Say &ldquo;I do&rdquo; surrounded by the majestic beauty of the Magaliesberg Mountains.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto mb-24">
            <AnimatedSection className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/images/magalies-is-peaceful.jpg"
                  alt="Wedding Venue"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection className="w-full lg:w-1/2" delay={0.2}>
              <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Your Dream Wedding</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Venue Like No Other
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Imagine exchanging vows with the Magaliesberg Mountains as your witness. Our venue offers a breathtaking natural backdrop, elegant spaces, and a dedicated events team to bring your wedding vision to life.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From intimate ceremonies to grand celebrations, we offer flexible packages tailored to your style and budget. Your dream wedding starts at Magalies.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest px-8">
                  PLAN YOUR WEDDING
                </Button>
              </Link>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Wedding Features</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FEATURES.map((feat, i) => (
              <AnimatedSection key={feat.title} delay={i * 0.1}>
                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {feat.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{feat.title}</h3>
                  <p className="text-muted-foreground text-sm">{feat.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-3">Let&apos;s Create Magic</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Planning Your Wedding</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Contact our wedding coordinator to schedule a venue tour and discuss your dream celebration.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-none tracking-widest px-10 h-12">
                CONTACT US
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
