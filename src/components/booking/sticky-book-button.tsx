"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function StickyBookButton() {
  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const pathname = usePathname();
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
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

  const show = visible && !nearFooter && pathname !== "/book";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <Link
            href="/book"
            className="flex items-center justify-center w-full h-14 bg-primary hover:bg-primary/90 text-white tracking-widest font-semibold text-sm transition-colors"
          >
            BOOK NOW
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
