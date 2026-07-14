"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wifi, Coffee, Bath, Wind, Eye } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const ROOMS = [
  {
    id: "luxury-suite",
    name: "Luxury Mountain Suite",
    description: "Panoramic mountain views, private balcony, and a deep soaking tub.",
    price: 2450,
    image: "/images/images/magalies-mountain-lodge-room.jpg",
    features: ["Mountain View", "Private Balcony", "King Bed"],
    amenities: ["Wi-Fi", "Coffee Station", "En-suite", "Air Con"],
  },
  {
    id: "executive-room",
    name: "Executive Garden Room",
    description: "Nestled in lush gardens with direct access to the pool and lodge facilities.",
    price: 1850,
    image: "/images/images/magalies-mountain-lodge-room-1.jpg",
    features: ["Garden View", "Patio", "Queen Bed"],
    amenities: ["Wi-Fi", "Coffee Station", "En-suite", "Air Con"],
  },
  {
    id: "standard-room",
    name: "Classic Mountain Room",
    description: "Comfortable and elegant, with all the essentials for a peaceful mountain stay.",
    price: 1450,
    image: "/images/images/magalies-mountain-lodge-room-2.jpg",
    features: ["Mountain View", "Queen Bed", "Shared Patio"],
    amenities: ["Wi-Fi", "Coffee Station", "En-suite"],
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  "Wi-Fi": <Wifi className="w-3.5 h-3.5" />,
  "Coffee Station": <Coffee className="w-3.5 h-3.5" />,
  "En-suite": <Bath className="w-3.5 h-3.5" />,
  "Air Con": <Wind className="w-3.5 h-3.5" />,
};

export function FeaturedRooms() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Our Rooms</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">Luxury Accommodation</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each room is designed for comfort and tranquility, offering stunning views of the Magaliesberg Mountains.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {ROOMS.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group bg-transparent overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-stone-100">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 flex gap-1.5 z-10">
                  {room.features.slice(0, 2).map((f) => (
                    <span key={f} className="text-[9px] uppercase tracking-[0.2em] bg-white/90 backdrop-blur-md text-foreground px-2.5 py-1 font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-2 block">
                  Accommodation
                </span>
                <h3 className="font-heading text-2xl font-normal mb-3 text-foreground tracking-wide group-hover:text-primary transition-colors duration-300">
                  {room.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  {room.description}
                </p>
                <div className="mt-auto pt-4 border-t border-stone-200/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">Rate per night</span>
                    <span className="text-lg font-bold text-foreground">R {formatPrice(room.price)}</span>
                  </div>
                  <Link href="/rooms" className="text-primary hover:text-primary-hover font-semibold tracking-widest text-xs uppercase flex items-center gap-1.5 transition-colors duration-300">
                    Explore Suite <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/rooms">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none tracking-widest px-8">
              VIEW ALL ROOMS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
