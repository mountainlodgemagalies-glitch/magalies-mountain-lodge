"use client";

import { MapPin, Mountain, Bird, Camera, Trees, Sunrise } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EXPERIENCES = [
  {
    icon: <Mountain className="w-8 h-8" />,
    title: "Mountain Hiking",
    description: "Explore ancient Magaliesberg trails with breathtaking views.",
  },
  {
    icon: <Bird className="w-8 h-8" />,
    title: "Bird Watching",
    description: "Over 300 bird species in the Moot Valley region.",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photography",
    description: "Capture stunning landscapes and wildlife moments.",
  },
  {
    icon: <Trees className="w-8 h-8" />,
    title: "Nature Walks",
    description: "Guided walks through indigenous forests and rock pools.",
  },
  {
    icon: <Sunrise className="w-8 h-8" />,
    title: "Sunrise & Sunset",
    description: "Watch the Magaliesberg glow from our mountain deck.",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Local Attractions",
    description: "Cheetah Park, Hartbeespoort Dam, and more nearby.",
  },
];

export function MountainExperiences() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-stone-800 to-stone-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/images/magalies-mountain-lodge-5.jpg')] bg-cover bg-center" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-3">Discover</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">Mountain Experiences</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Immerse yourself in the natural beauty of the Magaliesberg Mountains.
          </p>
          <div className="w-16 h-1 bg-white/30 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/15 transition-colors group"
            >
              <div className="text-white/70 group-hover:text-white mb-4 transition-colors">{exp.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{exp.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/explore">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-none tracking-widest px-8">
              EXPLORE ALL ACTIVITIES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
