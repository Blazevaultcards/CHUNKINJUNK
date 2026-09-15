-- Run this once in your Supabase project's SQL editor (Database > SQL Editor).
-- Creates the table the quote form writes to, with row-level security so
-- the public (anon) key can only INSERT — never read, update, or delete
-- other people's submissions.

create table if not exists leads (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  name text,
  phone text,
  email text,
  address text,
  job_type text,
  message text,
  preferred_contact text
);

alter table leads enable row level security;

create policy "public can insert leads"
  on leads
  for insert
  to anon
  with check (true);

-- To read submitted leads, use the Supabase dashboard's Table Editor
-- (signed in as the project owner), not the public anon key.
