"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { BookingWidget } from "@/components/booking/booking-widget";
import { StickyBookingBar } from "@/components/booking/sticky-booking-bar";
import { FlashSpecials } from "@/components/sections/flash-specials";
import { FeaturedRooms } from "@/components/sections/featured-rooms";
import { SpaPreview } from "@/components/sections/spa-preview";
import { RestaurantPreview } from "@/components/sections/restaurant-preview";
import { MountainExperiences } from "@/components/sections/mountain-experiences";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";
import { AwardsSection } from "@/components/sections/awards";
import { InstagramFeed } from "@/components/sections/instagram-feed";

const HERO_MEDIA = [
  {
    src: "/images/images/pool.avif",
    alt: "Pool courtyard at Magalies Mountain Lodge",
  },
  {
    src: "/images/images/magalies-mountain-lodge.jpg",
    alt: "Magalies Mountain Lodge exterior",
  },
  {
    src: "/images/images/magalies-mountain-lodge-4.jpg",
    alt: "Garden and lodge seating at Magalies Mountain Lodge",
  },
  {
    src: "/images/images/magalies-is-peaceful.jpg",
    alt: "Peaceful retreat setting at Magalies Mountain Lodge",
  },
];

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {HERO_MEDIA.map((item, index) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="hero-slide object-cover"
            style={{ animationDelay: `${index * 5}s` }}
          />
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      <div className="hero-vignette absolute inset-0 z-10" />

      {/* Logo - matches navbar position */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="pt-5"
          >
            <Image
              src="/images/magalies-logo.svg"
              alt="Magalies Mountain Lodge and Body Spa"
              width={160}
              height={40}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Content - Left Side */}
      <div className="relative z-20 flex h-full flex-col justify-between pt-28 pb-8 px-5 sm:px-6 md:justify-center md:pt-0 md:pb-0 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          {/* Accent Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-3 sm:mb-4"
          >
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
              <span className="w-8 sm:w-10 h-px bg-white/40" />
              Magalies Mountain Lodge & Spa
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[2.5rem] font-light leading-[0.95] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]"
          >
            Rest.
            <br />
            Renew.
            <br />
            <span className="text-white/70">Reconnect.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 max-w-md text-xs sm:text-sm font-light leading-relaxed text-white/60 md:text-base md:mt-6"
          >
            A quiet adults-only mountain retreat with poolside calm, spa rituals,
            and warm lodge hospitality.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:gap-4 md:mt-8"
          >
            <Link href="/book">
              <Button
                size="lg"
                className="h-11 bg-primary px-7 text-[11px] sm:h-12 sm:px-8 sm:text-xs md:h-14 md:px-10 md:text-sm font-semibold uppercase tracking-[0.25em] text-white hover:bg-primary/90 transition-colors"
              >
                Book Your Stay
              </Button>
            </Link>
            <Link href="/explore">
              <Button
                size="lg"
                variant="outline"
                className="h-11 border-white/40 bg-white/5 px-7 text-[11px] sm:h-12 sm:px-8 sm:text-xs md:h-14 md:px-10 md:text-sm font-medium uppercase tracking-[0.25em] text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all"
              >
                Explore
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Booking Widget - vertical, pinned at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="lg:hidden mt-6"
        >
          <BookingWidget variant="hero-mobile" />
        </motion.div>
      </div>

      {/* Booking Widget - Floating Right (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute top-1/2 -translate-y-1/2 z-30 hidden lg:block"
        style={{ right: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))" }}
      >
        <BookingWidget variant="hero" />
      </motion.div>

      {/* Scroll Indicator - Desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Intro */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-4">
              Welcome
            </span>
            <h2 className="text-3xl md:text-4xl text-foreground mb-6">
              A Sanctuary in the Mountains
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nestled in the breathtaking Magaliesberg Mountains, our exclusive lodge offers a sanctuary for adults seeking to escape the rush of city life.
              With no children and no pets allowed, we guarantee an atmosphere of absolute peace, luxury, and rejuvenation.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold tracking-widest hover:text-primary/80 transition-colors text-sm uppercase">
              Discover Our Story
              <span className="transform hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <AwardsSection />
      <FlashSpecials />
      <FeaturedRooms />
      <SpaPreview />
      <RestaurantPreview />
      <MountainExperiences />
      <Testimonials />
      <InstagramFeed />
      <CTASection />
      <StickyBookingBar />
    </>
  );
}
