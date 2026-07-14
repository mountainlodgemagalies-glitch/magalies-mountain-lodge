import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { PartyPopper, Users, Wine, Music, Cake, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Functions",
  description: "Host your next event at Magalies Mountain Lodge. From private parties to year-end functions, we make every occasion special.",
};

const EVENT_TYPES = [
  { icon: <PartyPopper className="w-8 h-8" />, title: "Private Parties", desc: "Celebrate life's milestones in a stunning mountain setting." },
  { icon: <Users className="w-8 h-8" />, title: "Year-End Functions", desc: "Reward your team with an unforgettable corporate event." },
  { icon: <Wine className="w-8 h-8" />, title: "Beverage Tastings", desc: "Wine and craft beer tasting experiences." },
  { icon: <Music className="w-8 h-8" />, title: "Live Entertainment", desc: "Music and performances under the stars." },
  { icon: <Cake className="w-8 h-8" />, title: "Birthday Celebrations", desc: "Milestone birthdays deserve a special venue." },
  { icon: <Calendar className="w-8 h-8" />, title: "Custom Events", desc: "We'll tailor any event to your vision." },
];

export default function EventsPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/images/magalies-mountain-lodge-4.jpg"
          alt="Events at Magalies Mountain Lodge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-3">Celebrate</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Events & Functions</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Make every occasion extraordinary at Magalies Mountain Lodge.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Event, Our Passion</h2>
            <p className="text-muted-foreground text-lg">
              Whether it&apos;s an intimate gathering or a grand celebration, our events team will ensure every detail is perfect. With flexible venues, stunning mountain views, and exceptional catering, Magalies is the ideal setting for your next event.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {EVENT_TYPES.map((event, i) => (
              <AnimatedSection key={event.title} delay={i * 0.1}>
                <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow text-center h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    {event.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-stone-50 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Host Your Event?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get in touch with our events team to discuss your requirements, schedule a venue tour, and receive a customised proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest px-8">
                  REQUEST A PROPOSAL
                </Button>
              </Link>
              <a href="tel:+27123456789">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none tracking-widest px-8">
                  CALL US
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
