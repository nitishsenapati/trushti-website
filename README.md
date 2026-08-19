# TRUSHTI — Products You Desire

A premium D2C brand website for TRUSHTI, built with Next.js 14 (App Router), TypeScript and Tailwind CSS. Panda Spark, TRUSHTI's first product, ships as the hero product inside a brand architecture designed to grow into Home Décor, Kitchen Essentials and Daily Utility.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — TRUSHTI website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy

The site is a standard Next.js app and deploys as-is to Vercel, Netlify, or any Node host:

```bash
npm run build
npm start
```

On Vercel: import the GitHub repo and deploy — no extra configuration needed.

## What's real vs. placeholder

Following the brief's "do not invent information" rule, a few fields are intentionally left blank rather than filled with fake data. Search for `null` in these files and fill them in when the real information is ready:

- **`data/site.ts`** — contact email/phone/address, social links, shipping estimates, legal/GST details.
- **`data/products.ts`** — Panda Spark's price (`price: null`) and SKU. The UI shows "Price coming soon" / a disabled "Notify Me" state until a price is set. Product claims (Streak-Free Shine, Crystal Clear Results, Safe & Gentle Formula) and usage steps were taken directly from the supplied packaging artwork.
- **Product gallery** — only one real product photo was supplied. `data/products.ts` has four more placeholder slots (front/back packaging, lifestyle, in-use) that render as clearly marked empty tiles on the product page until real photos are added.
- **Reviews** — empty by design; the UI shows "Be the first to review Panda Spark" until genuine reviews exist.
- **Policy pages** (privacy, terms, shipping, refund) — structured with section headers, content marked "to be added."
- **Checkout** — the full form flow (contact → shipping → payment) is built, but no payment gateway is wired up; it clearly states this rather than faking a successful payment.

## Adding a new product

Everything reads from `data/products.ts` and `data/categories.ts` — no component hardcodes Panda Spark. To add a product:

1. Add an entry to the `products` array in `data/products.ts` with a unique `slug`.
2. Assign it to a `category` (`"home-decor" | "kitchen-essentials" | "daily-utility"`).
3. It automatically appears in `/shop`, its collection page, and gets its own page at `/products/<slug>` — no other code changes required.

## Project structure

```
app/                  Routes (App Router)
components/
  layout/              Navbar, MobileMenu, Footer, scroll-reveal
  sections/            Homepage sections (Hero, FeaturedProduct, etc.)
  product/              Product card, gallery, info, FAQ, reviews
  category/              Category card, grid, collection view
  cart/                  Cart drawer + cart line item
  ui/                    Button, PageHeader, EmptyState, etc.
data/                  products.ts, categories.ts, site.ts (all editable config)
lib/                   Cart context, formatting, metadata helpers
public/
  brand/                TRUSHTI logo + background texture
  products/              Panda Spark product photography
```

## Design tokens

Colors and type are defined in `tailwind.config.ts`, derived from the supplied TRUSHTI logo (navy, powder blue, slate) and Panda Spark's own packaging (the cobalt "spark" accent used only in Panda Spark contexts, keeping the master brand and product-brand visually distinct per the brand architecture).

## Notes

- Built and reviewed without a live `npm install` in the authoring environment (no network access there) — dependencies are pinned to stable versions, but run `npm run build` locally before deploying to catch anything environment-specific.
- Images use `next/image`; run `npm run build` to confirm optimized output for your hosting target.
