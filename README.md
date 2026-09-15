# Chunkin Junk JS Removal — website

Marketing site + quote-request form for Chunkin Junk JS Removal (North DFW / North Texas junk removal). React + Vite + Tailwind v4, quote submissions save to Supabase.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in your Supabase project's URL and anon/publishable key (Settings > API in the Supabase dashboard). A `.env.local` with the real values is already set up for this project — it's gitignored, so it never gets pushed to GitHub.

## Database setup (one-time)

In your Supabase project's SQL editor, run `supabase/schema.sql`. This creates the `leads` table the quote form writes to, with row-level security so the public key can only insert new leads — not read, edit, or delete anyone else's.

To see submitted leads, open the Supabase dashboard's Table Editor (signed in as the project owner) and look at the `leads` table.

## Deploying to Vercel

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com](https://vercel.com), click **Add New → Project**, and import this GitHub repo. Vercel auto-detects the Vite build — no config needed.
3. Before deploying, add two environment variables in the Vercel project settings (Settings > Environment Variables):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   (same values as your `.env.local`)
4. Click **Deploy**. Vercel builds and hosts it on a `*.vercel.app` URL.
5. To use your own domain: once you've bought one (Vercel can sell you one directly, or use any registrar), go to the Vercel project's **Settings > Domains**, add the domain, and follow the DNS instructions shown there.

## Notes

- The hero background photo is hotlinked from Unsplash. It's fine to leave as-is, but swap in your own job-site photo whenever you have one — just replace the URL in `src/App.tsx` (`Hero` component).
- "Licensed & Insured" appears in the hero and footer — only keep this if it's actually true for the business.
- The 5 reviews on the page are real Thumbtack reviews. The star average shown is calculated from just these 5. Add more reviews to the `reviews` array in `src/App.tsx` as you collect them.
- This project was exported from Figma Make. If you make further design changes there, re-export and either push the new files here yourself or hand them to Claude to merge in (the Figma-specific dev-server plugins were stripped from `vite.config.ts` since they need Figma Make's own tooling and aren't needed for a plain Vite build/deploy).
