// CLYMAE diagnostic engine — evaluates climate zone, skin feel and
// lifestyle modifiers, and prescribes one of the 4 launch moisturizers.

import { getProduct, type Product, type SkuId } from '../data/products';

export type Zone = 'A' | 'B' | 'C' | 'D'; // A Humid-Heat · B Arid-Heat · C Cold-Arid · D Temperate
export type SkinFeel = 'oily' | 'normal' | 'dry';

export interface Modifiers {
  highAc: boolean; // >8 hours daily in AC / heating
  hardWater: boolean; // borewell / hard water
  commute: boolean; // open two-wheeler commuter
}

export interface QuizInputs {
  zone: Zone;
  skinFeel: SkinFeel;
  modifiers: Modifiers;
}

export interface Prescription {
  skuId: SkuId;
  gate: 1 | 2 | 3 | 4;
  product: Product;
  tips: string[];
}

export function calculatePrescription({ zone, skinFeel, modifiers }: QuizInputs): Prescription {
  let skuId: SkuId;
  let gate: Prescription['gate'];

  if (zone === 'C') {
    // Gate 1: environmental stress override
    skuId = 'SKU-04';
    gate = 1;
  } else if (zone === 'A' && (skinFeel === 'oily' || skinFeel === 'normal')) {
    // Gate 2: thermal & sebum congestion
    skuId = 'SKU-01';
    gate = 2;
  } else if (zone === 'B' || modifiers.highAc || (zone === 'A' && skinFeel === 'dry')) {
    // Gate 3: artificial micro-desert
    skuId = 'SKU-02';
    gate = 3;
  } else {
    // Gate 4: temperate baseline fallback
    skuId = 'SKU-03';
    gate = 4;
  }

  const tips: string[] = [];
  if (modifiers.highAc && skuId !== 'SKU-02')
    tips.push('Long hours in AC dry skin out — apply on slightly damp skin and reapply mid-day.');
  if (modifiers.hardWater)
    tips.push('Hard water leaves mineral residue — use a gentle, low-pH cleanser and rinse well.');
  if (modifiers.commute)
    tips.push('Wind and pollution on the commute — cleanse when you get home and never skip sunscreen.');

  return { skuId, gate, product: getProduct(skuId), tips };
}
