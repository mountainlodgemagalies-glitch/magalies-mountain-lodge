import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { UtensilsCrossed, Wine, Coffee, Sun, ChefHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurant & Dining",
  description: "Savour traditional South African cuisine at Magalies Mountain Lodge. Breakfast, lunch, dinner, and private dining experiences.",
};

const MEAL_TIMES = [
  { icon: <Coffee className="w-6 h-6" />, name: "Breakfast", time: "07:00 - 10:00", desc: "Full English & Continental" },
  { icon: <Sun className="w-6 h-6" />, name: "Lunch", time: "12:00 - 15:00", desc: "Light meals & lunch packs" },
  { icon: <UtensilsCrossed className="w-6 h-6" />, name: "Dinner", time: "18:00 - 21:00", desc: "3-course dining experience" },
  { icon: <Wine className="w-6 h-6" />, name: "Bar", time: "11:00 - 23:00", desc: "Cocktails, wine & spirits" },
];

const MENU_HIGHLIGHTS = [
  { name: "Bobotie", desc: "Traditional Cape Malay spiced mince with egg topping", price: "R 185" },
  { name: "Oxtail Potjiekos", desc: "Slow-cooked oxtail in a three-legged pot with root vegetables", price: "R 225" },
  { name: "Grilled Karoo Lamb", desc: "Herb-crusted lamb chops with rosemary jus and seasonal vegetables", price: "R 245" },
  { name: "Line Fish of the Day", desc: "Fresh line fish prepared to your liking with lemon butter", price: "R 195" },
  { name: "Malva Pudding", desc: "Traditional South African apricot sponge with custard", price: "R 95" },
  { name: "Koeksisters", desc: "Traditional syrup-coated dough treats", price: "R 65" },
];

export default function RestaurantPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/images/magalies-mountain-lodge-gameroom.jpg"
          alt="Dining at Magalies Mountain Lodge"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-3">Fine Dining</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Restaurant</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Savour traditional South African cuisine prepared with passion and fresh, local ingredients.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto mb-20">
            <AnimatedSection className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/images/magalies-mountain-lodge-lounge.jpg"
                  alt="Restaurant Interior"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection className="w-full lg:w-1/2" delay={0.2}>
              <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Taste the Tradition</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Culinary Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our restaurant offers a warm, inviting atmosphere perfect for romantic dinners or relaxing meals after a day of exploration. We specialise in hearty, traditional South African dishes that bring comfort to the soul.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our kitchen team sources the freshest local ingredients to create dishes that celebrate the rich culinary heritage of South Africa. From our famous potjiekos to our decadent malva pudding, every dish tells a story.
              </p>
              <div className="flex items-center gap-3">
                <ChefHat className="w-6 h-6 text-primary" />
                <p className="text-sm font-semibold text-foreground">Private dining & functions available</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Meal Times */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Opening Hours</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            {MEAL_TIMES.map((meal, i) => (
              <AnimatedSection key={meal.name} delay={i * 0.1}>
                <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {meal.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{meal.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-1">{meal.time}</p>
                  <p className="text-muted-foreground text-xs">{meal.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Menu Highlights */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Menu Highlights</h2>
            <p className="text-muted-foreground">A taste of what awaits you</p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4" />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-4">
            {MENU_HIGHLIGHTS.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.05}>
                <div className="flex items-center justify-between p-4 bg-white border border-border hover:shadow-md transition-shadow">
                  <div>
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="text-lg font-bold text-primary shrink-0 ml-4">{item.price}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserve Your Table</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Join us for an unforgettable dining experience in the heart of the Magaliesberg.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+27123456789">
                <Button className="bg-white text-primary hover:bg-white/90 rounded-none tracking-widest px-8">
                  CALL TO RESERVE
                </Button>
              </a>
              <Link href="/day-visits">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-none tracking-widest px-8 bg-transparent">
                  VIEW DAY PACKAGES
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
