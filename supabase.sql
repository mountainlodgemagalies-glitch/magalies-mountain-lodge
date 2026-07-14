-- ============================================
-- MAGALIES MOUNTAIN LODGE - COMPLETE SCHEMA
-- Supabase PostgreSQL
-- ============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================
-- 1. USERS (extends auth.users)
-- ============================================
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  email text unique not null,
  phone text,
  avatar_url text,
  role text default 'guest' check (role in ('guest', 'admin', 'staff')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

alter table public.profiles enable row level security;

create policy "Profiles viewable by owner" on public.profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Users can insert own profile" on public.profiles
  for insert with check (auth.uid() = id);

-- ============================================
-- 2. ROOMS
-- ============================================
create table public.rooms (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  slug text unique not null,
  description text,
  long_description text,
  price_per_night numeric not null,
  max_guests integer default 2,
  bed_type text, -- 'king', 'queen', 'twin'
  room_size_sqm numeric,
  view_type text, -- 'mountain', 'garden', 'pool'
  image_url text,
  gallery_urls text[], -- array of image URLs
  amenities jsonb default '[]'::jsonb,
  features text[],
  is_active boolean default true,
  is_popular boolean default false,
  nightsbridge_room_id text, -- for integration
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

alter table public.rooms enable row level security;

create policy "Rooms are viewable by everyone" on public.rooms
  for select using (is_active = true);

create policy "Admins can manage rooms" on public.rooms
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ============================================
-- 3. RESERVATIONS
-- ============================================
create table public.reservations (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete set null,
  guest_name text not null,
  guest_email text not null,
  guest_phone text,
  room_id uuid references public.rooms(id),
  check_in date not null,
  check_out date not null,
  guests_count integer default 2,
  total_amount numeric,
  special_requests text,
  status text default 'pending' check (status in ('pending', 'confirmed', 'checked_in', 'checked_out', 'cancelled')),
  payment_status text default 'pending' check (payment_status in ('pending', 'deposit_paid', 'paid', 'refunded')),
  nightsbridge_reservation_id text,
  notes text, -- admin notes
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

alter table public.reservations enable row level security;

create policy "Users can view own reservations" on public.reservations
  for select using (auth.uid() = user_id);

create policy "Users can create reservations" on public.reservations
  for insert with check (auth.uid() = user_id);

create policy "Admins can manage all reservations" on public.reservations
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ============================================
-- 4. SPA TREATMENTS
-- ============================================
create table public.spa_treatments (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  slug text unique not null,
  category text not null check (category in ('massage', 'facial', 'package', 'couples', 'other')),
  description text,
  duration_minutes integer not null,
  price numeric not null,
  image_url text,
  is_active boolean default true,
  is_popular boolean default false,
  created_at timestamp with time zone default now()
);

alter table public.spa_treatments enable row level security;

create policy "Spa treatments viewable by everyone" on public.spa_treatments
  for select using (is_active = true);

create policy "Admins can manage spa treatments" on public.spa_treatments
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ============================================
-- 5. SPA BOOKINGS
-- ============================================
create table public.spa_bookings (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete set null,
  treatment_id uuid references public.spa_treatments(id),
  guest_name text not null,
  guest_email text not null,
  guest_phone text,
  booking_date date not null,
  booking_time time not null,
  status text default 'pending' check (status in ('pending', 'confirmed', 'completed', 'cancelled')),
  payment_status text default 'pending' check (payment_status in ('pending', 'paid', 'refunded')),
  notes text,
  created_at timestamp with time zone default now()
);

alter table public.spa_bookings enable row level security;

create policy "Users can view own spa bookings" on public.spa_bookings
  for select using (auth.uid() = user_id);

create policy "Users can create spa bookings" on public.spa_bookings
  for insert with check (auth.uid() = user_id);

create policy "Admins can manage all spa bookings" on public.spa_bookings
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ============================================
-- 6. PROMOTIONS (Flash Specials)
-- ============================================
create table public.promotions (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  image_url text,
  price numeric not null,
  original_price numeric,
  valid_until timestamp with time zone not null,
  total_available integer,
  total_booked integer default 0,
  is_active boolean default true,
  promo_code text,
  created_at timestamp with time zone default now()
);

alter table public.promotions enable row level security;

create policy "Active promotions viewable by everyone" on public.promotions
  for select using (is_active = true and valid_until > now());

create policy "Admins can manage promotions" on public.promotions
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ============================================
-- 7. PURCHASES (Ledger for Spa/Vouchers/Specials)
-- ============================================
create table public.purchases (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete set null,
  item_type text not null check (item_type in ('spa', 'promotion', 'voucher', 'reservation')),
  item_id uuid,
  amount numeric not null,
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed', 'refunded')),
  payfast_pf_payment_id text,
  payfast_metadata jsonb,
  created_at timestamp with time zone default now()
);

alter table public.purchases enable row level security;

create policy "Users can view own purchases" on public.purchases
  for select using (auth.uid() = user_id);

create policy "Users can create purchases" on public.purchases
  for insert with check (auth.uid() = user_id);

create policy "Admins can view all purchases" on public.purchases
  for select using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ============================================
-- 8. BLOG POSTS
-- ============================================
create table public.blog_posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  category text,
  author_name text default 'Magalies Team',
  cover_image_url text,
  tags text[],
  is_published boolean default false,
  published_at timestamp with time zone,
  read_time_minutes integer,
  meta_title text,
  meta_description text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

alter table public.blog_posts enable row level security;

create policy "Published posts viewable by everyone" on public.blog_posts
  for select using (is_published = true);

create policy "Admins can manage blog posts" on public.blog_posts
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ============================================
-- 9. GALLERY
-- ============================================
create table public.gallery_images (
  id uuid default gen_random_uuid() primary key,
  image_url text not null,
  alt_text text,
  category text,
  sort_order integer default 0,
  is_active boolean default true,
  created_at timestamp with time zone default now()
);

alter table public.gallery_images enable row level security;

create policy "Active gallery images viewable by everyone" on public.gallery_images
  for select using (is_active = true);

create policy "Admins can manage gallery" on public.gallery_images
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ============================================
-- 10. MESSAGES / CONTACT FORM
-- ============================================
create table public.messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  is_read boolean default false,
  replied_at timestamp with time zone,
  created_at timestamp with time zone default now()
);

alter table public.messages enable row level security;

create policy "Admins can manage messages" on public.messages
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ============================================
-- 11. TESTIMONIALS
-- ============================================
create table public.testimonials (
  id uuid default gen_random_uuid() primary key,
  guest_name text not null,
  guest_location text,
  rating integer check (rating between 1 and 5) default 5,
  text text not null,
  is_featured boolean default false,
  is_approved boolean default false,
  reservation_id uuid references public.reservations(id),
  created_at timestamp with time zone default now()
);

alter table public.testimonials enable row level security;

create policy "Approved testimonials viewable by everyone" on public.testimonials
  for select using (is_approved = true);

create policy "Admins can manage testimonials" on public.testimonials
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ============================================
-- 12. NEWSLETTER SUBSCRIBERS
-- ============================================
create table public.newsletter (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  is_active boolean default true,
  subscribed_at timestamp with time zone default now(),
  unsubscribed_at timestamp with time zone
);

alter table public.newsletter enable row level security;

create policy "Anyone can subscribe" on public.newsletter
  for insert with check (true);

create policy "Subscribers can unsubscribe" on public.newsletter
  for update using (true);

-- ============================================
-- 13. RESTAURANT RESERVATIONS
-- ============================================
create table public.restaurant_reservations (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete set null,
  guest_name text not null,
  guest_email text not null,
  guest_phone text,
  reservation_date date not null,
  reservation_time time not null,
  party_size integer not null default 2,
  special_requests text,
  status text default 'pending' check (status in ('pending', 'confirmed', 'seated', 'completed', 'cancelled')),
  created_at timestamp with time zone default now()
);

alter table public.restaurant_reservations enable row level security;

create policy "Users can view own restaurant reservations" on public.restaurant_reservations
  for select using (auth.uid() = user_id);

create policy "Anyone can create restaurant reservations" on public.restaurant_reservations
  for insert with check (true);

create policy "Admins can manage restaurant reservations" on public.restaurant_reservations
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ============================================
-- 14. VOUCHERS
-- ============================================
create table public.vouchers (
  id uuid default gen_random_uuid() primary key,
  code text unique not null,
  amount numeric not null,
  balance numeric not null,
  purchaser_user_id uuid references auth.users(id) on delete set null,
  recipient_name text,
  recipient_email text,
  status text default 'active' check (status in ('active', 'used', 'expired')),
  valid_until timestamp with time zone,
  purchase_id uuid references public.purchases(id),
  created_at timestamp with time zone default now()
);

alter table public.vouchers enable row level security;

create policy "Voucher owners can view their vouchers" on public.vouchers
  for select using (auth.uid() = purchaser_user_id);

create policy "Admins can manage vouchers" on public.vouchers
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ============================================
-- INDEXES for performance
-- ============================================
create index idx_reservations_dates on public.reservations(check_in, check_out);
create index idx_reservations_status on public.reservations(status);
create index idx_reservations_user on public.reservations(user_id);
create index idx_rooms_active on public.rooms(is_active);
create index idx_promotions_active on public.promotions(is_active, valid_until);
create index idx_blog_posts_published on public.blog_posts(is_published, published_at);
create index idx_blog_posts_slug on public.blog_posts(slug);
create index idx_spa_treatments_category on public.spa_treatments(category);
create index idx_gallery_category on public.gallery_images(category);
create index idx_messages_unread on public.messages(is_read);
create index idx_purchases_user on public.purchases(user_id);
create index idx_vouchers_code on public.vouchers(code);

-- ============================================
-- FUNCTIONS
-- ============================================

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', '')
  );
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Update updated_at timestamp
create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create or replace trigger update_profiles_updated_at
  before update on public.profiles
  for each row execute function public.update_updated_at();

create or replace trigger update_rooms_updated_at
  before update on public.rooms
  for each row execute function public.update_updated_at();

create or replace trigger update_reservations_updated_at
  before update on public.reservations
  for each row execute function public.update_updated_at();

create or replace trigger update_blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.update_updated_at();
