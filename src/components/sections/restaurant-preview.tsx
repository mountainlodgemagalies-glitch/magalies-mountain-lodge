"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Wine, Coffee, Sun } from "lucide-react";

const MEAL_TIMES = [
  { icon: <Coffee className="w-5 h-5" />, name: "Breakfast", time: "07:00 - 10:00" },
  { icon: <Sun className="w-5 h-5" />, name: "Lunch", time: "12:00 - 15:00" },
  { icon: <UtensilsCrossed className="w-5 h-5" />, name: "Dinner", time: "18:00 - 21:00" },
  { icon: <Wine className="w-5 h-5" />, name: "Bar", time: "11:00 - 23:00" },
];

export function RestaurantPreview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/images/magalies-mountain-lodge-gameroom.jpg"
                alt="Magalies Mountain Lodge Restaurant"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Dining</span>
            <h2 className="text-3xl md:text-4xl text-foreground mb-6">
              A Culinary Experience
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Savour traditional South African cuisine prepared with passion and fresh, local ingredients.
              Our restaurant offers a warm, inviting atmosphere perfect for any occasion.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {MEAL_TIMES.map((meal, i) => (
                <motion.div
                  key={meal.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-border"
                >
                  <div className="text-primary shrink-0">{meal.icon}</div>
                  <div>
                    <p className="text-sm font-semibold">{meal.name}</p>
                    <p className="text-xs text-muted-foreground">{meal.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/restaurant">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest px-8">
                VIEW MENU & RESERVE
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
