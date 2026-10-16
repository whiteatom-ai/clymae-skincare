// ─────────────────────────────────────────────────────────────
// CLYMAE product catalogue — the single source of truth.
// To go live: replace the marketplace URLs and prices below.
// ─────────────────────────────────────────────────────────────

export type SkuId = 'SKU-01' | 'SKU-02' | 'SKU-03' | 'SKU-04';

export interface Product {
  id: SkuId;
  number: string;
  name: string;
  climate: string;
  climateShort: string;
  skin: string;
  format: string;
  texture: string;
  actives: string[];
  rationale: string;
  size: string;
  price: string;
  tint: string; // card background, matches packaging
  ink: string; // accent text on the tint
  links: { amazon: string; nykaa: string; flipkart: string };
}

export const PRODUCTS: Product[] = [
  {
    id: 'SKU-01',
    number: '01',
    name: 'Zero-Weight Water Gel',
    climate: 'Humid heat · coastal · monsoon',
    climateShort: 'Humid',
    skin: 'Oily & normal skin',
    format: 'Translucent hydrogel, matte finish',
    texture: '0% oils, 0% waxes',
    actives: ['Multi-weight Hyaluronic Acid', '5% Glycerin', '1% Panthenol'],
    rationale:
      'High humidity traps sweat and sebum on the skin, which can congest pores. This oil-free gel draws moisture from the air and dries down completely, so nothing heavy sits on your skin or holds in heat.',
    size: '50 g',
    price: '₹ —',
    tint: '#DCE8F0',
    ink: '#2F5470',
    links: {
      amazon: 'https://www.amazon.in/',
      nykaa: 'https://www.nykaa.com/',
      flipkart: 'https://www.flipkart.com/',
    },
  },
  {
    id: 'SKU-02',
    number: '02',
    name: 'Balancing Fluid Milk',
    climate: 'Dry heat · air-conditioned days',
    climateShort: 'Arid heat',
    skin: 'All skin types in dry air',
    format: 'Ultra-fluid milk (oil-in-water)',
    texture: 'Weightless, fast-absorbing',
    actives: ['2.0% Squalane', '0.5% Ceramide Complex'],
    rationale:
      'Hot, dry winds and long hours in air-conditioning pull water out of skin fast. Squalane and micro-ceramides form a light, breathable seal that keeps hydration in without a greasy feel.',
    size: '50 ml',
    price: '₹ —',
    tint: '#DDE5D3',
    ink: '#4A5E3A',
    links: {
      amazon: 'https://www.amazon.in/',
      nykaa: 'https://www.nykaa.com/',
      flipkart: 'https://www.flipkart.com/',
    },
  },
  {
    id: 'SKU-03',
    number: '03',
    name: 'Ceramide Comfort Lotion',
    climate: 'Temperate · mild · balanced',
    climateShort: 'Temperate',
    skin: 'Normal to dry skin',
    format: 'Medium-weight cream (oil-in-water)',
    texture: 'Soft, smooth, everyday',
    actives: ['2:1:1 Ceramides · Cholesterol · Fatty Acids', '3.0% Shea Butter'],
    rationale:
      'Mild climates need steady upkeep rather than rescue. The 2:1:1 lipid ratio mirrors your skin’s own barrier, replenishing what everyday life wears away.',
    size: '50 ml',
    price: '₹ —',
    tint: '#F1DEC9',
    ink: '#8A5A33',
    links: {
      amazon: 'https://www.amazon.in/',
      nykaa: 'https://www.nykaa.com/',
      flipkart: 'https://www.flipkart.com/',
    },
  },
  {
    id: 'SKU-04',
    number: '04',
    name: 'SOS Rescue Butter',
    climate: 'Cold · winter · high altitude',
    climateShort: 'Cold',
    skin: 'Dry, tight & sensitive skin',
    format: 'Dense balm (water-in-oil)',
    texture: 'Rich, cocooning',
    actives: ['10% Shea Butter', '5% Petrolatum', '2.0% Allantoin'],
    rationale:
      'Freezing air slows your skin’s own lipid production and causes tiny cracks in the barrier. In the cold, this overrides everything else: a dense water-in-oil balm that shields and repairs.',
    size: '50 g',
    price: '₹ —',
    tint: '#ECEAE6',
    ink: '#3E4652',
    links: {
      amazon: 'https://www.amazon.in/',
      nykaa: 'https://www.nykaa.com/',
      flipkart: 'https://www.flipkart.com/',
    },
  },
];

export const getProduct = (id: SkuId) => PRODUCTS.find((p) => p.id === id)!;
