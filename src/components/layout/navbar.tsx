"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  {
    name: "Experience",
    href: "#",
    children: [
      { name: "About Us", href: "/about" },
      { name: "Accommodation", href: "/rooms" },
      { name: "Spa & Wellness", href: "/spa" },
      { name: "Dining", href: "/restaurant" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  { name: "Explore", href: "/explore" },
  { name: "Events", href: "/events" },
  { name: "Specials", href: "/offers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const pathname = usePathname();
  const isHomeHero = pathname === "/" && !isScrolled;
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      if (currentY > 80) {
        if (currentY > lastScrollY.current) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5",
        isHidden && "hidden"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo - circular/oval */}
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 relative z-10 transition-opacity duration-300",
            isHomeHero && "opacity-0 pointer-events-none"
          )}
        >
          <Image
            src="/images/magalies-logo.svg"
            alt="Magalies Mountain Lodge"
            width={160}
            height={40}
            className="h-11 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium px-4 py-2 transition-colors hover:text-primary",
                    isHomeHero ? "text-white hover:text-white/80" : "text-black"
                  )}
                >
                  {link.name}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeDropdown === link.name && (
                  <div className="absolute top-full left-0 bg-white shadow-xl border border-border/50 rounded-xl py-2 min-w-[220px] mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-foreground hover:bg-stone-50 hover:text-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium px-4 py-2 transition-colors hover:text-primary",
                  isHomeHero ? "text-white hover:text-white/80" : "text-black"
                )}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+27123456789"
            className={cn(
              "flex items-center justify-center w-11 h-11 rounded-full transition-colors",
              isHomeHero ? "text-white hover:bg-white/10" : "text-black hover:bg-stone-100"
            )}
          >
            <Phone className="w-5 h-5" />
          </a>
          <Link href="/book">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full tracking-widest font-semibold px-8">
              BOOK NOW
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+27123456789"
            className={cn("p-2", isHomeHero ? "text-white" : "text-black")}
          >
            <Phone className="w-5 h-5" />
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("lg:hidden w-11 h-11", isHomeHero ? "text-white" : "text-black")}
                />
              }
            >
              <Menu className="h-7 w-7" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background p-0 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=right]:data-ending-style:translate-x-full data-[side=right]:data-starting-style:translate-x-full">
              <div className="p-6 border-b border-border">
                <Image
                  src="/images/magalies-logo.svg"
                  alt="Magalies Mountain Lodge"
                  width={140}
                  height={35}
                  className="h-12 w-auto"
                />
              </div>
              <nav className="flex flex-col p-6">
                {NAV_LINKS.map((link) =>
                  link.children ? (
                    <div key={link.name} className="py-3 border-b border-border">
                      <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">{link.name}</p>
                      <div className="flex flex-col gap-1 pl-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors py-3 border-b border-border"
                    >
                      {link.name}
                    </Link>
                  )
                )}
                <Link href="/book" onClick={() => setIsOpen(false)}>
                  <Button className="mt-6 w-full bg-primary text-white rounded-full tracking-widest h-12">
                    BOOK NOW
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
