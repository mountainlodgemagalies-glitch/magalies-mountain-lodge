import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";

// In production, this would fetch from Supabase based on params.slug
const BLOG_POSTS: Record<string, {
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: string[];
}> = {
  "magaliesberg-hiking-guide": {
    title: "The Ultimate Guide to Hiking the Magaliesberg",
    category: "Nature",
    date: "June 15, 2025",
    author: "Magalies Team",
    readTime: "8 min read",
    image: "/images/images/magalies-mountain-lodge-5.jpg",
    content: [
      "The Magaliesberg Mountains are one of the oldest mountain ranges in the world, stretching over 120 kilometres across South Africa's Gauteng and North West provinces. For guests at Magalies Mountain Lodge, these ancient peaks are literally on your doorstep.",
      "Whether you're a seasoned hiker or a casual nature walker, the Magaliesberg offers trails for every fitness level. The region is home to incredible biodiversity, with over 300 bird species and a rich variety of indigenous flora.",
      "Our favourite trail is the Moot Valley Walk, a gentle 2-hour stroll that takes you through indigenous forest, past seasonal rock pools, and along ridges with panoramic views of the surrounding mountains. It's perfect for sunrise or sunset.",
      "For more adventurous hikers, the Mountain Ridge Trail offers a moderate 3-4 hour hike along the escarpment. The views from the top are absolutely breathtaking, especially during the golden hours.",
      "The Sunrise Summit is our most challenging trail, starting before dawn to reach the peak in time for a spectacular Magaliesberg sunrise. It's a 4-5 hour commitment but an experience you'll never forget.",
      "Always remember to bring plenty of water, wear sturdy shoes, and start early to avoid the midday heat. Our reception team can provide detailed trail maps and current conditions.",
    ],
  },
  "benefits-of-mountain-retreats": {
    title: "Why Mountain Retreats Are Good for Your Soul",
    category: "Wellness",
    date: "May 28, 2025",
    author: "Dr. Wellness",
    readTime: "5 min read",
    image: "/images/images/magalies-is-peaceful.jpg",
    content: [
      "In our hyperconnected, always-on world, the simple act of spending time in the mountains can have profound effects on both body and mind. Research consistently shows that mountain retreats offer measurable health benefits.",
      "Studies have found that spending time at higher altitudes can improve sleep quality, reduce stress hormones, and boost immune function. The cleaner mountain air, lower noise levels, and natural beauty all contribute to a sense of deep relaxation.",
      "At Magalies Mountain Lodge, our guests frequently report feeling calmer, more focused, and more creative after just a few days. The combination of our adults-only policy, stunning natural setting, and carefully curated experiences creates the perfect environment for renewal.",
      "The concept of 'forest bathing' or shinrin-yoku, practised in Japan for decades, has been shown to lower blood pressure, reduce cortisol levels, and improve mood. Our nature walks and hiking trails offer the perfect opportunity to experience this healing practice.",
      "Perhaps most importantly, a mountain retreat gives you permission to slow down. Without the constant stimulation of city life, your mind naturally settles, and you rediscover the joy of being present in the moment.",
    ],
  },
  "south-african-cuisine": {
    title: "Traditional South African Cuisine: A Culinary Journey",
    category: "Food",
    date: "May 10, 2025",
    author: "Chef Magalies",
    readTime: "6 min read",
    image: "/images/images/magalies-mountain-lodge-gameroom.jpg",
    content: [
      "South African cuisine is a rich tapestry of flavours, traditions, and cultures. At Magalies Mountain Lodge Restaurant, we celebrate this heritage through our menu, which showcases the best of local cooking.",
      "Our signature dish, the traditional potjiekos, is slow-cooked in a three-legged cast iron pot over an open flame. This centuries-old method of cooking produces tender, flavourful meals that bring comfort to the soul.",
      "The Cape Malay influence is evident in our bobotie, a fragrant spiced mince dish topped with a golden egg custard. It's a uniquely South African creation that tells the story of our diverse cultural heritage.",
      "For dessert, our malva pudding is legendary. This warm, spongy apricot cake, served with custard or ice cream, is the perfect ending to any meal. It's a recipe that has been passed down through generations.",
      "We source our ingredients locally wherever possible, supporting South African farmers and producers. Our wine list features carefully selected wines from the nearby Hartbeespoort and broader South African wine regions.",
      "Whether you're joining us for breakfast, lunch, or dinner, every meal at Magalies is an opportunity to taste the flavours of South Africa in a stunning mountain setting.",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.content[0],
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-3xl">
            <Badge className="bg-primary text-white border-0 mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <div className="prose prose-gray max-w-none">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK TO BLOG
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
