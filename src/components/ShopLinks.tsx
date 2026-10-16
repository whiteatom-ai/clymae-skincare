import type { Product } from '@/data/products';
import { PREVIEW } from '@/data/site';

const STORES = [
  { key: 'amazon', label: 'Amazon' },
  { key: 'nykaa', label: 'Nykaa' },
  { key: 'flipkart', label: 'Flipkart' },
] as const;

export default function ShopLinks({ product, className = '' }: { product: Product; className?: string }) {
  if (PREVIEW) {
    return (
      <div className={className}>
        <div className="grid grid-cols-3 gap-2" aria-disabled>
          {STORES.map((s) => (
            <span
              key={s.key}
              className="cursor-not-allowed border border-dashed border-ink/40 py-3 text-center text-[11px] uppercase tracking-[0.14em] text-ink/50"
            >
              {s.label}
            </span>
          ))}
        </div>
        <p className="mt-2.5 text-center text-xs text-ink/60">Coming soon. Not on sale yet.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`}>
      {STORES.map((s) => (
        <a
          key={s.key}
          href={product.links[s.key]}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-ink/80 bg-ivory/60 py-3 text-center text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-ivory"
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
