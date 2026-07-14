export interface JsonLdHotel {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  image: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  telephone: string;
  email: string;
  priceRange: string;
  starRating: {
    "@type": string;
    ratingValue: number;
  };
  amenityFeature: { name: string; value: boolean }[];
}

export function generateHotelJsonLd(): JsonLdHotel {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Magalies Mountain Lodge & Body Spa",
    description:
      "A premium 3-star mountain retreat in the Magaliesberg, South Africa. Strictly adults only. Luxury accommodation, spa, dining, and mountain experiences.",
    url: "https://magalieslodge.co.za",
    image: "https://magalieslodge.co.za/images/images/magalies-mountain-lodge.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Susan Street, Kameeldrift West",
      addressLocality: "Pretoria",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.6,
      longitude: 28.2,
    },
    telephone: "+27-12-345-6789",
    email: "info@magalieslodge.co.za",
    priceRange: "R1450 - R2450",
    starRating: {
      "@type": "Rating",
      ratingValue: 3,
    },
    amenityFeature: [
      { name: "Free WiFi", value: true },
      { name: "Spa", value: true },
      { name: "Restaurant", value: true },
      { name: "Swimming Pool", value: true },
      { name: "Mountain View", value: true },
      { name: "Air Conditioning", value: true },
      { name: "Free Parking", value: true },
    ],
  };
}

export interface JsonLdRestaurant {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  servesCuisine: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
  };
  telephone: string;
  openingHoursSpecification: {
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
}

export function generateRestaurantJsonLd(): JsonLdRestaurant {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Magalies Mountain Lodge Restaurant",
    description:
      "Traditional South African cuisine prepared with fresh, local ingredients in a warm mountain setting.",
    url: "https://magalieslodge.co.za/restaurant",
    servesCuisine: "South African",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Susan Street, Kameeldrift West",
      addressLocality: "Pretoria",
      addressCountry: "ZA",
    },
    telephone: "+27-12-345-6789",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "21:00",
      },
    ],
  };
}

export interface JsonLdFAQ {
  "@context": string;
  "@type": string;
  mainEntity: {
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }[];
}

export function generateFAQJsonLd(
  faqs: { q: string; a: string }[]
): JsonLdFAQ {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export interface JsonLdBreadcrumb {
  "@context": string;
  "@type": string;
  itemListElement: {
    "@type": string;
    position: number;
    name: string;
    item: string;
  }[];
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
): JsonLdBreadcrumb {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
