-- ClawPilot MVP schema (run in Supabase SQL Editor)

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  display_name text
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  operator text not null,
  action text not null,
  input jsonb not null default '{}'::jsonb,
  status text not null default 'queued', -- queued|running|done|failed
  error text,
  cost_estimate_cents int not null default 0,
  cost_actual_cents int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.artifacts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  task_id uuid references public.tasks(id) on delete set null,
  title text not null,
  content jsonb not null,
  created_at timestamptz not null default now()
);

-- RLS
alter table public.profiles enable row level security;
alter table public.tasks enable row level security;
alter table public.artifacts enable row level security;

create policy "profiles: self" on public.profiles
  for select using (auth.uid() = id);
create policy "profiles: self update" on public.profiles
  for update using (auth.uid() = id);
create policy "profiles: self insert" on public.profiles
  for insert with check (auth.uid() = id);

create policy "tasks: self" on public.tasks
  for select using (auth.uid() = user_id);
create policy "tasks: self insert" on public.tasks
  for insert with check (auth.uid() = user_id);
create policy "tasks: self update" on public.tasks
  for update using (auth.uid() = user_id);

create policy "artifacts: self" on public.artifacts
  for select using (auth.uid() = user_id);
create policy "artifacts: self insert" on public.artifacts
  for insert with check (auth.uid() = user_id);
create policy "artifacts: self update" on public.artifacts
  for update using (auth.uid() = user_id);
