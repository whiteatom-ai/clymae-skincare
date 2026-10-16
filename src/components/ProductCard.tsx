'use client';

import { useState } from 'react';
import type { Product } from '@/data/products';
import ShopLinks from './ShopLinks';

export default function ProductCard({ product: p }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex flex-col p-7 md:p-8" style={{ background: p.tint }}>
      <div className="flex items-baseline justify-between">
        <span className="font-serif text-5xl font-light" style={{ color: p.ink }}>
          {p.number}
        </span>
        <span className="text-[11px] uppercase tracking-[0.16em]" style={{ color: p.ink }}>
          {p.climateShort}
        </span>
      </div>

      <h3 className="mt-10 font-serif text-[1.75rem] leading-tight">{p.name}</h3>
      <p className="mt-2 text-sm text-slate">{p.climate}</p>

      <dl className="mt-7 space-y-3 border-t border-ink/10 pt-6 text-sm">
        <div>
          <dt className="text-[10px] uppercase tracking-[0.18em] text-slate">Texture</dt>
          <dd className="mt-1">{p.format}</dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.18em] text-slate">Key actives</dt>
          <dd className="mt-1 leading-relaxed">{p.actives.join(' · ')}</dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.18em] text-slate">Best for</dt>
          <dd className="mt-1">{p.skin}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-8">
        <div className="mb-4 flex items-baseline justify-between text-sm">
          <span className="text-slate">{p.size}</span>
          <span>{p.price}</span>
        </div>
        {open ? (
          <ShopLinks product={p} />
        ) : (
          <button onClick={() => setOpen(true)} className="btn-dark w-full">
            Shop
          </button>
        )}
      </div>
    </article>
  );
}
