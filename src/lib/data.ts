import { createClient } from "@/lib/supabase/server";

export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price_per_night: number;
  max_guests: number;
  bed_type: string | null;
  view_type: string | null;
  image_url: string | null;
  amenities: { name: string; icon?: string }[];
  features: string[];
  is_popular: boolean;
}

export async function getRooms(): Promise<Room[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("is_active", true)
    .order("price_per_night", { ascending: true });

  if (error || !data) return [];
  return data;
}

export async function getRoomBySlug(slug: string): Promise<Room | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  return data;
}

export interface SpaTreatment {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string | null;
  duration_minutes: number;
  price: number;
  is_popular: boolean;
}

export async function getSpaTreatments(): Promise<SpaTreatment[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("spa_treatments")
    .select("*")
    .eq("is_active", true)
    .order("category");

  if (error || !data) return [];
  return data;
}

export interface Promotion {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  price: number;
  original_price: number | null;
  valid_until: string;
  total_available: number | null;
  total_booked: number;
  promo_code: string | null;
}

export async function getActivePromotions(): Promise<Promotion[]> {
  const supabase = await createClient();
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from("promotions")
    .select("*")
    .eq("is_active", true)
    .gt("valid_until", now)
    .order("valid_until");

  if (error || !data) return [];
  return data;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  author_name: string;
  cover_image_url: string | null;
  tags: string[];
  published_at: string;
  read_time_minutes: number;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return data;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error || !data) return null;
  return data;
}

export interface Testimonial {
  id: string;
  guest_name: string;
  guest_location: string | null;
  rating: number;
  text: string;
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_approved", true)
    .eq("is_featured", true)
    .order("created_at", { ascending: false })
    .limit(6);

  if (error || !data) return [];
  return data;
}
