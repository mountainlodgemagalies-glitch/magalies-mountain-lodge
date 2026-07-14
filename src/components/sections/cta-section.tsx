"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 block mb-4">Rest. Renew. Reconnect.</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 max-w-3xl mx-auto">
            Your Mountain Escape Awaits
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Book your stay at Magalies Mountain Lodge and discover the perfect blend of luxury, nature, and tranquility.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-none tracking-widest text-lg px-10 h-14">
                BOOK YOUR STAY
              </Button>
            </Link>
            <Link href="/spa">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white rounded-none tracking-widest text-lg px-10 h-14 bg-transparent">
                EXPLORE SPA
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
