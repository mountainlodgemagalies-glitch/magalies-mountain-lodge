"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-primary/5 py-16 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">We&apos;d Love to Hear From You</span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
          Get in touch with our team for reservations, enquiries, or any questions.
        </p>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: <MapPin className="w-5 h-5" />, title: "Location", lines: ["3 Susan Street, Kameeldrift West", "Pretoria, South Africa"] },
                  { icon: <Phone className="w-5 h-5" />, title: "Phone", lines: ["+27 (0) 12 345 6789"], href: "tel:+27123456789" },
                  { icon: <Mail className="w-5 h-5" />, title: "Email", lines: ["info@magalieslodge.co.za"], href: "mailto:info@magalieslodge.co.za" },
                  { icon: <Clock className="w-5 h-5" />, title: "Reception Hours", lines: ["Mon - Sun: 07:00 - 22:00", "Check-in: 14:00 | Check-out: 10:00"] },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.lines.map((line) =>
                        item.href ? (
                          <a key={line} href={item.href} className="text-muted-foreground hover:text-primary transition-colors block">
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-muted-foreground">{line}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://wa.me/27825512681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+27123456789"
                  className="flex items-center gap-2 bg-primary text-white px-5 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-card p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Name</label>
                      <Input placeholder="Your Name" className="rounded-none focus-visible:ring-primary h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email</label>
                      <Input type="email" placeholder="your@email.com" className="rounded-none focus-visible:ring-primary h-12" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone</label>
                    <Input type="tel" placeholder="+27..." className="rounded-none focus-visible:ring-primary h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Subject</label>
                    <Input placeholder="How can we help?" className="rounded-none focus-visible:ring-primary h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message</label>
                    <textarea
                      className="flex min-h-[120px] w-full border border-border bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest h-12 mt-4">
                    <Send className="w-4 h-4 mr-2" />
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-96 bg-stone-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.1!2d28.2!3d-25.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzAwLjAiUyAyOMKwMTInMDAuMCJF!5e0!3m2!1sen!2sza!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
