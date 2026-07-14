import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyBookButton } from "@/components/booking/sticky-book-button";
import { LiveChat } from "@/components/ui/live-chat";
import JsonLd from "@/components/seo/json-ld";
import "./globals.css";

const saolDisplay = localFont({
  src: [
    { path: "../../public/fonts/SaolDisplay-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/SaolDisplay-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-saol-display",
  display: "swap",
});

const grotaSansAlt = localFont({
  src: [
    { path: "../../public/fonts/grota-sans-alt-light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/grota-sans-alt-regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/grota-sans-alt-medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/grota-sans-alt-semi-bold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/grota-sans-alt-bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-grota-sans-alt",
  display: "swap",
});

const grotaSans = localFont({
  src: [
    { path: "../../public/fonts/grota-sans-light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/grota-sans-regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/grota-sans-medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/grota-sans-semi-bold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/grota-sans-bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-grota-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Magalies Mountain Lodge | Premium Mountain Retreat & Spa",
    template: "%s | Magalies Mountain Lodge",
  },
  description:
    "Experience tranquility and elegance at Magalies Mountain Lodge & Body Spa. A luxury mountain retreat in the Magaliesberg, South Africa. Strictly adults only.",
  keywords: [
    "Magalies Lodge",
    "Mountain Retreat",
    "Spa",
    "Adults Only",
    "Luxury Accommodation",
    "South Africa",
    "Pretoria Getaway",
    "Magaliesberg",
    "Mountain Spa",
    "Romantic Escape",
    "Wellness Retreat",
  ],
  authors: [{ name: "Magalies Mountain Lodge" }],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://magalieslodge.co.za",
    siteName: "Magalies Mountain Lodge",
    title: "Magalies Mountain Lodge | Premium Mountain Retreat & Spa",
    description:
      "Experience tranquility and elegance at Magalies Mountain Lodge & Body Spa. A luxury mountain retreat.",
    images: [
      {
        url: "/images/images/magalies-mountain-lodge.jpg",
        width: 1200,
        height: 630,
        alt: "Magalies Mountain Lodge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magalies Mountain Lodge | Premium Mountain Retreat & Spa",
    description:
      "Experience tranquility and elegance at Magalies Mountain Lodge & Body Spa.",
    images: ["/images/images/magalies-mountain-lodge.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${saolDisplay.variable} ${grotaSansAlt.variable} ${grotaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <JsonLd />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <StickyBookButton />
        <LiveChat />
      </body>
    </html>
  );
}
