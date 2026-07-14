"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & David",
    location: "Johannesburg",
    rating: 5,
    text: "An absolutely magical escape. The mountain views from our suite were breathtaking, and the spa treatments were world-class. We left feeling completely renewed.",
    date: "June 2025",
  },
  {
    id: 2,
    name: "Michelle van der Berg",
    location: "Pretoria",
    rating: 5,
    text: "The perfect adults-only retreat. No noise, no chaos - just pure tranquility. The restaurant serves the most incredible traditional South African cuisine. Will definitely return.",
    date: "May 2025",
  },
  {
    id: 3,
    name: "James & Anna",
    location: "Cape Town",
    rating: 5,
    text: "We chose Magalies for our anniversary and it exceeded every expectation. The couples spa package was divine, and the private dining experience under the stars was unforgettable.",
    date: "April 2025",
  },
  {
    id: 4,
    name: "Thabo Molefe",
    location: "Centurion",
    rating: 5,
    text: "A hidden gem in the Magaliesberg. The hiking trails are spectacular, the birdlife is incredible, and the lodge staff make you feel like family. A true South African treasure.",
    date: "March 2025",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Guest Experiences</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">What Our Guests Say</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location} &middot; {testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
