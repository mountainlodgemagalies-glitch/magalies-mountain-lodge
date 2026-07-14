"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronDown } from "lucide-react";

export function BookingWidget({ variant = "default" }: { variant?: "default" | "hero" | "hero-mobile" | "inline" }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const isHero = variant === "hero";
  const isHeroMobile = variant === "hero-mobile";

  if (isHero) {
    return (
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50 w-full max-w-[280px]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-5">Book Your Stay</p>
        <div className="space-y-4">
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5 block">Check In</label>
            <div className="relative">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border-b border-border bg-transparent py-2 pr-7 text-sm text-foreground outline-none focus:border-primary"
              />
              <CalendarDays className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
            </div>
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5 block">Check Out</label>
            <div className="relative">
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border-b border-border bg-transparent py-2 pr-7 text-sm text-foreground outline-none focus:border-primary"
              />
              <CalendarDays className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
            </div>
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5 block">Guests</label>
            <div className="relative">
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border-b border-border bg-transparent py-2 pr-7 text-sm text-foreground outline-none appearance-none focus:border-primary"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 pointer-events-none" />
            </div>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white tracking-widest font-semibold text-xs h-11 mt-2">
            CHECK AVAILABILITY
          </Button>
        </div>
      </div>
    );
  }

  if (isHeroMobile) {
    return (
      <div className="bg-white/95 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-white/40 w-full max-w-xs">
        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary mb-3">Book Your Stay</p>
        <div className="space-y-2.5">
          <div>
            <label className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-0.5">Check In</label>
            <div className="relative">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border-b border-border bg-transparent py-1.5 pr-6 text-xs text-foreground outline-none focus:border-primary"
              />
              <CalendarDays className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50" />
            </div>
          </div>
          <div>
            <label className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-0.5">Check Out</label>
            <div className="relative">
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border-b border-border bg-transparent py-1.5 pr-6 text-xs text-foreground outline-none focus:border-primary"
              />
              <CalendarDays className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50" />
            </div>
          </div>
          <div>
            <label className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-0.5">Guests</label>
            <div className="relative">
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border-b border-border bg-transparent py-1.5 pr-6 text-xs text-foreground outline-none appearance-none focus:border-primary"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground/50 pointer-events-none" />
            </div>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white text-[10px] font-semibold px-3 h-9 mt-1">
            CHECK AVAILABILITY
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 shadow-xl border-t-4 border-primary w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-stretch gap-4">
        <div className="flex-1">
          <label className="text-xs uppercase tracking-widest mb-1 block text-muted-foreground">Check In</label>
          <div className="relative">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full border-b-2 bg-transparent py-2 pr-8 text-sm font-semibold outline-none border-border text-foreground focus:border-primary"
            />
            <CalendarDays className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        <div className="flex-1">
          <label className="text-xs uppercase tracking-widest mb-1 block text-muted-foreground">Check Out</label>
          <div className="relative">
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full border-b-2 bg-transparent py-2 pr-8 text-sm font-semibold outline-none border-border text-foreground focus:border-primary"
            />
            <CalendarDays className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        <div className="flex-1">
          <label className="text-xs uppercase tracking-widest mb-1 block text-muted-foreground">Guests</label>
          <div className="relative">
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full border-b-2 bg-transparent py-2 pr-8 text-sm font-semibold outline-none appearance-none border-border text-foreground focus:border-primary"
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        <div className="flex items-end">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest font-semibold px-8 h-12 w-full md:w-auto">
            CHECK AVAILABILITY
          </Button>
        </div>
      </div>
    </div>
  );
}
