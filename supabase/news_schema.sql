create table if not exists public.news_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  status text not null default 'active' check (status in ('active', 'hidden')),
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.news_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category_id uuid references public.news_categories(id) on delete set null,
  published_at timestamptz,
  cover_image_url text,
  cover_image_path text,
  content_html text not null,
  excerpt text,
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'published', 'hidden')),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists news_posts_status_published_at_idx
  on public.news_posts (status, published_at desc, created_at desc);

create index if not exists news_posts_featured_idx
  on public.news_posts (featured, status, published_at desc);

create index if not exists news_posts_category_idx
  on public.news_posts (category_id, status, published_at desc);

-- Re-use the existing set_updated_at trigger function
drop trigger if exists set_news_posts_updated_at on public.news_posts;

create trigger set_news_posts_updated_at
before update on public.news_posts
for each row
execute function public.set_updated_at();

alter table public.news_categories enable row level security;
alter table public.news_posts enable row level security;

-- Policies for news_categories
drop policy if exists "Categories are readable by everyone" on public.news_categories;
create policy "Categories are readable by everyone"
on public.news_categories
for select
using (true);

-- Policies for news_posts
drop policy if exists "Published news are readable by everyone" on public.news_posts;
create policy "Published news are readable by everyone"
on public.news_posts
for select
using (status = 'published');

drop policy if exists "CMS news access is public for now" on public.news_posts;
create policy "CMS news access is public for now"
on public.news_posts
for select
using (true);

-- Add to realtime publication
do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'news_posts'
  ) then
    alter publication supabase_realtime add table public.news_posts;
  end if;

  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'news_categories'
  ) then
    alter publication supabase_realtime add table public.news_categories;
  end if;
end
$$;

-- Create storage bucket for news images
insert into storage.buckets (id, name, public)
values ('news-images', 'news-images', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Public news images are readable" on storage.objects;
create policy "Public news images are readable"
on storage.objects
for select
using (bucket_id = 'news-images');
