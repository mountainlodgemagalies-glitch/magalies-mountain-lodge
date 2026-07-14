"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Leaf, Heart, Gift } from "lucide-react";

const SPA_HIGHLIGHTS = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Full Body Massage",
    price: "From R 650",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Luxury Facial",
    price: "From R 550",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Couples Retreat",
    price: "From R 2,400",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Gift Vouchers",
    price: "From R 500",
  },
];

export function SpaPreview() {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/images/magalies-mountain-lodge-3.jpg"
                alt="Magalies Mountain Lodge Spa"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg hidden md:block shadow-xl">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm opacity-80">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Body Spa</span>
            <h2 className="text-3xl md:text-4xl text-foreground mb-6">
              Renew Your Body & Soul
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our expert therapists offer a range of treatments designed to restore balance and tranquility.
              From soothing massages to rejuvenating facials, every treatment is tailored to your needs.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-12">
              {SPA_HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="text-primary shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-base font-normal tracking-wide text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground font-light">{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/spa">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest px-8">
                  EXPLORE SPA
                </Button>
              </Link>
              <Link href="/book">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none tracking-widest px-8">
                  BOOK TREATMENT
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
