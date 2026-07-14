"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal } from "lucide-react";

const AWARDS = [
  { icon: <Trophy className="w-8 h-8" />, title: "Guest favourite 2024", org: "Travel Platform" },
  { icon: <Star className="w-8 h-8" />, title: "Top Rated Lodge", org: "South Africa" },
  { icon: <Medal className="w-8 h-8" />, title: "Excellence Award", org: "Hospitality SA" },
  { icon: <Award className="w-8 h-8" />, title: "Best Spa Experience", org: "Magalies Region" },
];

export function AwardsSection() {
  return (
    <section className="py-12 md:py-16 bg-stone-50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 text-center"
            >
              <div className="text-primary">{award.icon}</div>
              <div className="text-left">
                <p className="text-sm font-bold text-foreground">{award.title}</p>
                <p className="text-xs text-muted-foreground">{award.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
