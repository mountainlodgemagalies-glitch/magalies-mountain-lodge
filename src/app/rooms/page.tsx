import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Wifi, Coffee, Bath, Wind, Ban, Tv } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Accommodation",
  description: "Luxury accommodation at Magalies Mountain Lodge. Choose from our range of beautifully appointed rooms with mountain views. Strictly adults only.",
};

const ROOMS = [
  {
    id: "luxury-suite",
    name: "Luxury Mountain Suite",
    description: "An elegant suite offering panoramic views of the Magaliesberg mountains. Features a private balcony and a deep soaking tub. The ultimate in mountain luxury.",
    price: 2450,
    image: "/images/images/magalies-mountain-lodge-room.jpg",
    features: ["Mountain View", "Private Balcony", "King Bed", "Soaking Tub"],
    amenities: [
      { icon: <Wifi className="w-4 h-4" />, name: "Free Wi-Fi" },
      { icon: <Ban className="w-4 h-4" />, name: "No Smoking" },
      { icon: <Coffee className="w-4 h-4" />, name: "Coffee Station" },
      { icon: <Bath className="w-4 h-4" />, name: "En-suite" },
      { icon: <Wind className="w-4 h-4" />, name: "Air Con" },
      { icon: <Tv className="w-4 h-4" />, name: "DSTV" },
    ],
    popular: true,
  },
  {
    id: "executive-room",
    name: "Executive Garden Room",
    description: "Nestled in our lush gardens, this room offers tranquility and direct access to the main lodge facilities and pool. Perfect for a relaxing retreat.",
    price: 1850,
    image: "/images/images/magalies-mountain-lodge-room-1.jpg",
    features: ["Garden View", "Patio", "Queen Bed"],
    amenities: [
      { icon: <Wifi className="w-4 h-4" />, name: "Free Wi-Fi" },
      { icon: <Ban className="w-4 h-4" />, name: "No Smoking" },
      { icon: <Coffee className="w-4 h-4" />, name: "Coffee Station" },
      { icon: <Bath className="w-4 h-4" />, name: "En-suite" },
      { icon: <Wind className="w-4 h-4" />, name: "Air Con" },
      { icon: <Tv className="w-4 h-4" />, name: "DSTV" },
    ],
  },
  {
    id: "standard-room",
    name: "Classic Mountain Room",
    description: "Comfortable and elegant, with all the essentials for a peaceful mountain stay. Enjoy stunning views from the comfort of your room.",
    price: 1450,
    image: "/images/images/magalies-mountain-lodge-room-2.jpg",
    features: ["Mountain View", "Queen Bed", "Shared Patio"],
    amenities: [
      { icon: <Wifi className="w-4 h-4" />, name: "Free Wi-Fi" },
      { icon: <Ban className="w-4 h-4" />, name: "No Smoking" },
      { icon: <Coffee className="w-4 h-4" />, name: "Coffee Station" },
      { icon: <Bath className="w-4 h-4" />, name: "En-suite" },
      { icon: <Tv className="w-4 h-4" />, name: "DSTV" },
    ],
  },
];

export default function RoomsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary/5 py-16 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Your Room Awaits</span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Accommodation</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
          Experience luxury in the heart of nature. Our strictly adults-only lodge guarantees a peaceful and rejuvenating stay.
        </p>
      </section>

      {/* Room List */}
      <div className="py-24 md:py-36 bg-background">
        <div className="container mx-auto px-4 max-w-6xl space-y-32 md:space-y-48">
          {ROOMS.map((room, i) => (
            <AnimatedSection key={room.id} delay={i * 0.15}>
              <div className="bg-transparent border-0 overflow-hidden group">
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className="w-full lg:w-1/2 relative aspect-[3/2] overflow-hidden bg-stone-100">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
                    />
                    {room.popular && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-primary text-white text-[9px] uppercase tracking-[0.25em] px-3 py-1 font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.features.map((f) => (
                          <span key={f} className="text-[9px] uppercase tracking-[0.2em] text-primary font-medium">
                            {f}
                          </span>
                        ))}
                      </div>
                      <h2 className="font-heading text-3xl lg:text-4xl font-normal text-foreground mb-4 tracking-wide">{room.name}</h2>
                      <p className="text-muted-foreground leading-relaxed text-sm font-light mb-6">{room.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-8 border-t border-b border-stone-200/60 py-6">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-foreground/80">
                          <span className="text-primary shrink-0">{amenity.icon}</span>
                          <span className="font-light">{amenity.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-end justify-between gap-4 mt-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-0.5">Rate per night</span>
                        <span className="text-2xl font-bold text-foreground">R {formatPrice(room.price)}</span>
                      </div>
                      <Link href="/book">
                        <Button className="bg-primary hover:bg-primary/95 text-white rounded-none tracking-widest px-8 py-6 text-xs uppercase font-semibold">
                          BOOK SUITE
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Upsell */}
      <section className="py-16 md:py-24 bg-stone-50 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Enhance Your Stay</span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Add a Spa Treatment</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Add a spa treatment or a private dining experience to your room reservation and truly pamper yourself.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/spa">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none tracking-widest px-8">
                  EXPLORE SPA PACKAGES
                </Button>
              </Link>
              <Link href="/offers">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest px-8">
                  VIEW SPECIALS
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
