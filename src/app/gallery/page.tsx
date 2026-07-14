"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  { src: "/images/images/magalies-mountain-lodge.jpg", alt: "Lodge Exterior", category: "Lodge" },
  { src: "/images/images/magalies-mountain-lodge-room.jpg", alt: "Luxury Suite", category: "Rooms" },
  { src: "/images/images/magalies-mountain-lodge-room-1.jpg", alt: "Garden Room", category: "Rooms" },
  { src: "/images/images/magalies-mountain-lodge-room-2.jpg", alt: "Mountain Room", category: "Rooms" },
  { src: "/images/images/magalies-mountain-lodge-lounge.jpg", alt: "Lounge Area", category: "Lodge" },
  { src: "/images/images/magalies-mountain-lodge-3.jpg", alt: "Mountain View", category: "Nature" },
  { src: "/images/images/magalies-mountain-lodge-4.jpg", alt: "Pool Area", category: "Lodge" },
  { src: "/images/images/magalies-mountain-lodge-5.jpg", alt: "Scenic View", category: "Nature" },
  { src: "/images/images/magalies-is-peaceful.jpg", alt: "Peaceful Setting", category: "Nature" },
  { src: "/images/images/magalies-mountain-lodge-gameroom.jpg", alt: "Dining Area", category: "Dining" },
  { src: "/images/images/pool.avif", alt: "Swimming Pool", category: "Lodge" },
  { src: "/images/images/FLYER.jpg", alt: "Magalies Flyer", category: "Events" },
];

const CATEGORIES = ["All", "Lodge", "Rooms", "Nature", "Dining", "Events"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    if (direction === "next") {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    } else {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary/5 py-16 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Visual Journey</span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
          Explore the beauty of Magalies Mountain Lodge through our curated collection of images.
        </p>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-sm font-medium tracking-wider transition-colors rounded-none ${
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((img, i) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
              onClick={() => openLightbox(i)}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-start p-4">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
              className="absolute left-4 text-white/70 hover:text-white z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <div className="relative w-full max-w-4xl h-[70vh] mx-16" onClick={(e) => e.stopPropagation()}>
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-white text-sm">{filteredImages[lightboxIndex].alt}</p>
                <p className="text-white/50 text-xs mt-1">
                  {lightboxIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
              className="absolute right-4 text-white/70 hover:text-white z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
