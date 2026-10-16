import { PRODUCTS } from '@/data/products';
import ProductCard from './ProductCard';

export default function Collection() {
  return (
    <section id="collection" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="label">The collection</p>
          <h2 className="mt-4 font-serif text-4xl font-light md:text-5xl">
            Four climates. <em>Four formulas.</em>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-slate">
          Fragrance-free adaptive moisturizers, from weightless gel to rescue balm. Sold on Amazon, Nykaa and
          Flipkart.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
