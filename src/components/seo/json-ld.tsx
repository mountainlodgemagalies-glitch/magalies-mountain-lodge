import { generateHotelJsonLd, generateRestaurantJsonLd } from "@/lib/seo";

export default function JsonLd() {
  const hotel = generateHotelJsonLd();
  const restaurant = generateRestaurantJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurant) }}
      />
    </>
  );
}
