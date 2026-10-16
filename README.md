# CLYMAE — Climate-Personalized Skincare

A single-page showcase site for the four CLYMAE moisturizers, with a three-question quiz that picks the right one. Purchases happen on Amazon, Nykaa and Flipkart; this site only links out.

Built with Next.js 14, TypeScript and Tailwind CSS.

## Edit products, prices and buy links

Everything lives in **`src/data/products.ts`**. For each SKU, replace:

- `price`: currently `'₹ —'`
- `links.amazon` / `links.nykaa` / `links.flipkart`: currently the store homepages

The footer store links are in `src/components/Footer.tsx`. Point them at your brand store pages.

## The quiz algorithm

`src/lib/engine.ts` → `calculatePrescription({ zone, skinFeel, modifiers })` runs four gates in order:

| Gate | Condition | Result |
|---|---|---|
| 1 | Zone C (cold-arid) | SKU 04 SOS Rescue Butter |
| 2 | Zone A + oily/normal | SKU 01 Zero-Weight Water Gel |
| 3 | Zone B, or 8h+ AC, or Zone A + dry | SKU 02 Balancing Fluid Milk |
| 4 | Everything else (temperate) | SKU 03 Ceramide Comfort Lotion |

The hard-water and commute answers add routine tips to the result.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # checks every algorithm path
npm run build   # production build
```

## Deploy

1. Push this repo to GitHub.
2. On vercel.com, go to **Add New → Project**, import the repo and click **Deploy**. No settings are needed.

## Structure

```
src/
  app/          layout (fonts, SEO), page, global styles
  components/   Nav, Hero, Thesis, Collection, ProductCard, ShopLinks, Quiz, Footer, Wordmark
  data/         products.ts (single source of product content)
  lib/          engine.ts (quiz algorithm) + engine.test.ts
public/images/  product lineup and brand card
```
