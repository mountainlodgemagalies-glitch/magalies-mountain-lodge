"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const INSTAGRAM_POSTS = [
  { src: "/images/images/magalies-mountain-lodge.jpg", alt: "Mountain Lodge" },
  { src: "/images/images/magalies-mountain-lodge-room.jpg", alt: "Luxury Room" },
  { src: "/images/images/magalies-mountain-lodge-3.jpg", alt: "Spa Experience" },
  { src: "/images/images/magalies-mountain-lodge-lounge.jpg", alt: "Lounge Area" },
  { src: "/images/images/magalies-is-peaceful.jpg", alt: "Peaceful Setting" },
  { src: "/images/images/magalies-mountain-lodge-5.jpg", alt: "Mountain View" },
];

export function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">@magalieslodge</span>
        <h2 className="text-3xl md:text-4xl text-foreground">Follow Our Journey</h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {INSTAGRAM_POSTS.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative aspect-square overflow-hidden group cursor-pointer"
          >
            <Image
              src={post.src}
              alt={post.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="https://instagram.com/magalieslodge"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-b-2 border-primary text-primary font-semibold tracking-widest hover:text-primary/80 transition-colors pb-1 text-sm"
        >
          FOLLOW ON INSTAGRAM
        </Link>
      </div>
    </section>
  );
}
