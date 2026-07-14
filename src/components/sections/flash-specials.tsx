"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

interface FlashSpecial {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  validUntil: string;
  imageUrl: string;
  remainingSpots?: number;
}

const MOCK_SPECIALS: FlashSpecial[] = [
  {
    id: "1",
    title: "Weekend Wellness Escape",
    description: "2 nights luxury accommodation + full spa treatment + breakfast daily",
    originalPrice: 5200,
    salePrice: 3900,
    validUntil: "2026-07-20T23:59:59.000Z",
    imageUrl: "/images/images/magalies-mountain-lodge.jpg",
    remainingSpots: 3,
  },
  {
    id: "2",
    title: "Couples Retreat Special",
    description: "2 nights + couples massage + private dinner + breakfast daily",
    originalPrice: 6800,
    salePrice: 4950,
    validUntil: "2026-07-22T23:59:59.000Z",
    imageUrl: "/images/images/magalies-mountain-lodge-lounge.jpg",
    remainingSpots: 5,
  },
  {
    id: "3",
    title: "Midweek Mountain Break",
    description: "2 nights accommodation + spa voucher + breakfast daily",
    originalPrice: 4200,
    salePrice: 2999,
    validUntil: "2026-07-24T23:59:59.000Z",
    imageUrl: "/images/images/magalies-is-peaceful.jpg",
  },
];

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-2">
      {[
        { value: timeLeft.days, label: "D" },
        { value: timeLeft.hours, label: "H" },
        { value: timeLeft.minutes, label: "M" },
        { value: timeLeft.seconds, label: "S" },
      ].map((item) => (
        <div key={item.label} className="bg-primary text-white px-2 py-1 rounded text-xs font-bold min-w-[36px] text-center">
          <div>{String(item.value).padStart(2, "0")}</div>
          <div className="text-[10px] opacity-70">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export function FlashSpecials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-stone-900 to-stone-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-6 h-6 text-orange-400" />
            <span className="text-orange-400 font-bold tracking-widest text-sm uppercase">Flash Specials</span>
            <Flame className="w-6 h-6 text-orange-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">Limited Time Offers</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Exclusive deals that won&apos;t last. Book now and save on your mountain escape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {MOCK_SPECIALS.map((special, i) => (
            <motion.div
              key={special.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={special.imageUrl}
                  alt={special.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-red-600 text-white border-0 text-xs">
                    SAVE {Math.round(((special.originalPrice - special.salePrice) / special.originalPrice) * 100)}%
                  </Badge>
                </div>
                {special.remainingSpots && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-black/60 text-white border-0 text-xs">
                      {special.remainingSpots} spots left
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 text-foreground">{special.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{special.description}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">R {formatPrice(special.salePrice)}</span>
                  <span className="text-sm text-muted-foreground line-through">R {formatPrice(special.originalPrice)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <CountdownTimer targetDate={special.validUntil} />
                  </div>
                  <Link href="/book">
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-none tracking-wider">
                      Book <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
