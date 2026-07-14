"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronDown } from "lucide-react";

export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNearFooter(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  const show = isVisible && !nearFooter && pathname !== "/book";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-0 right-0 z-50 px-4 hidden md:block"
        >
          <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl p-4 flex items-center justify-between gap-6">
            <div className="flex-1 flex items-center gap-6">
              <div className="flex-1 min-w-[150px]">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5 block font-semibold">
                  Check In
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full border-b border-border bg-transparent py-1 pr-6 text-xs font-semibold outline-none text-foreground focus:border-primary"
                  />
                  <CalendarDays className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/75" />
                </div>
              </div>

              <div className="flex-1 min-w-[150px]">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5 block font-semibold">
                  Check Out
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full border-b border-border bg-transparent py-1 pr-6 text-xs font-semibold outline-none text-foreground focus:border-primary"
                  />
                  <CalendarDays className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/75" />
                </div>
              </div>

              <div className="w-[120px]">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5 block font-semibold">
                  Guests
                </label>
                <div className="relative">
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full border-b border-border bg-transparent py-1 pr-6 text-xs font-semibold outline-none appearance-none text-foreground focus:border-primary"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/75 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <Button className="bg-primary hover:bg-primary/90 text-white tracking-widest font-semibold px-8 h-10 text-xs">
                BOOK NOW
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
