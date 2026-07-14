"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BLOG_POSTS = [
  {
    id: "magaliesberg-hiking-guide",
    title: "The Ultimate Guide to Hiking the Magaliesberg",
    excerpt: "Discover the best trails, from gentle valley walks to challenging summit hikes. Our complete guide covers everything you need to know.",
    category: "Nature",
    date: "June 15, 2025",
    author: "Magalies Team",
    image: "/images/images/magalies-mountain-lodge-5.jpg",
    readTime: "8 min read",
  },
  {
    id: "benefits-of-mountain-retreats",
    title: "Why Mountain Retreats Are Good for Your Soul",
    excerpt: "Research shows that time in the mountains reduces stress, improves sleep, and boosts creativity. Here's why you need a mountain escape.",
    category: "Wellness",
    date: "May 28, 2025",
    author: "Dr. Wellness",
    image: "/images/images/magalies-is-peaceful.jpg",
    readTime: "5 min read",
  },
  {
    id: "south-african-cuisine",
    title: "Traditional South African Cuisine: A Culinary Journey",
    excerpt: "From potjiekos to bobotie, explore the rich flavours of South African cooking and how our restaurant celebrates local cuisine.",
    category: "Food",
    date: "May 10, 2025",
    author: "Chef Magalies",
    image: "/images/images/magalies-mountain-lodge-gameroom.jpg",
    readTime: "6 min read",
  },
  {
    id: "romantic-escape-ideas",
    title: "10 Romantic Escape Ideas for Couples",
    excerpt: "Looking for inspiration for your next romantic getaway? Here are our top suggestions for creating unforgettable memories together.",
    category: "Travel",
    date: "April 22, 2025",
    author: "Magalies Team",
    image: "/images/images/magalies-mountain-lodge-3.jpg",
    readTime: "4 min read",
  },
  {
    id: "bird-watching-magaliesberg",
    title: "Bird Watching in the Magaliesberg: A Guide to the Best Spots",
    excerpt: "The Magaliesberg is home to over 300 bird species. Learn where to find the most spectacular birdlife in the region.",
    category: "Nature",
    date: "April 5, 2025",
    author: "Bird Watcher",
    image: "/images/images/magalies-mountain-lodge-1.jpg",
    readTime: "7 min read",
  },
  {
    id: "spa-wellness-tips",
    title: "How to Maximise Your Spa Experience",
    excerpt: "Get the most out of your spa visit with these expert tips on preparation, during treatments, and post-spa care.",
    category: "Spa",
    date: "March 18, 2025",
    author: "Spa Therapist",
    image: "/images/images/magalies-mountain-lodge-4.jpg",
    readTime: "5 min read",
  },
];

const CATEGORIES = ["All", "Nature", "Wellness", "Food", "Travel", "Spa"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="bg-primary/5 py-16 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-primary block mb-3">Stories & Guides</span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
          Discover tips, stories, and inspiration for your next mountain escape.
        </p>
      </section>

      {/* Search & Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-border bg-white text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-wider transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-white border-0 text-xs">{post.category}</Badge>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  <Link href={`/blog/${post.id}`} className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
