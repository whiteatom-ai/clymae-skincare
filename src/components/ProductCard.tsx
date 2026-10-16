'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/data/products';
import ShopLinks from './ShopLinks';

export default function ProductCard({ product: p }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group flex flex-col" style={{ background: p.tint }}>
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={p.image}
          alt={`CLYMAE ${p.name}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <span
          className="absolute left-5 top-4 font-serif text-4xl font-light"
          style={{ color: p.ink }}
          aria-hidden
        >
          {p.number}
        </span>
        <span
          className="absolute right-5 top-6 text-[10px] uppercase tracking-[0.16em]"
          style={{ color: p.ink }}
        >
          {p.climateShort}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-7 pt-6 md:px-7">
        <h3 className="font-serif text-[1.65rem] leading-tight">{p.name}</h3>
        <p className="mt-1.5 text-sm text-ink/70">{p.climate}</p>

        <dl className="mt-6 space-y-4 border-t border-ink/10 pt-5 text-sm">
          <div className="flex items-center gap-4">
            <Image
              src={p.swatch}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-ink/10"
            />
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-ink/60">Texture</dt>
              <dd className="mt-0.5">{p.format}</dd>
            </div>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.18em] text-ink/60">Key actives</dt>
            <dd className="mt-1 leading-relaxed">{p.actives.join(' · ')}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.18em] text-ink/60">Best for</dt>
            <dd className="mt-1">{p.skin}</dd>
          </div>
        </dl>

        <div className="mt-auto pt-7">
          <div className="mb-4 flex items-baseline justify-between text-sm">
            <span className="text-ink/60">{p.size}</span>
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
      </div>
    </article>
  );
}
