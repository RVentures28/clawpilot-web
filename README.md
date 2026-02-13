# clawpilot-web

Minimal Next.js app for ClawPilot (RVentures28).

## Local dev

1) Install deps

```bash
npm i
```

2) Create `.env.local`

```bash
cp .env.example .env.local
```

3) Fill values:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4) Run

```bash
npm run dev
```

## Deploy (Vercel)

Add the same env vars in Vercel project settings.
