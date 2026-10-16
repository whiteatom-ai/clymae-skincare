import Image from 'next/image';
import { getProduct, type SkuId } from '@/data/products';

const CLIMATES: { name: string; place: string; effect: string; image: string; sku: SkuId }[] = [
  {
    name: 'Humid heat',
    place: 'Mumbai · Chennai · monsoon',
    effect: 'Sweat and oil sit on skin and clog pores.',
    image: '/images/climate-humid.webp',
    sku: 'SKU-01',
  },
  {
    name: 'Dry heat',
    place: 'Delhi summer · AC offices',
    effect: 'Dry air pulls water out of skin, fast.',
    image: '/images/climate-dry.webp',
    sku: 'SKU-02',
  },
  {
    name: 'Temperate',
    place: 'Bengaluru · Pune',
    effect: 'Mild air — skin needs steady, daily upkeep.',
    image: '/images/climate-temperate.webp',
    sku: 'SKU-03',
  },
  {
    name: 'Cold & dry',
    place: 'North Indian winter · hills',
    effect: 'Cold slows natural oils; the barrier cracks.',
    image: '/images/climate-cold.webp',
    sku: 'SKU-04',
  },
];

export default function Thesis() {
  return (
    <section id="climate" className="bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <p className="label text-[#C9B3B5]">The idea</p>
          <div>
            <h2 className="font-serif text-4xl font-light leading-tight md:text-5xl">
              Your skin doesn’t have a type.
              <br />
              <em>It has a climate.</em>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-ivory/70">
              The same moisturizer that feels perfect in Bengaluru feels heavy in Mumbai and useless in a Delhi
              winter. Humidity, heat and cold change what your skin needs — so we made one formula for each.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {CLIMATES.map((c) => {
            const p = getProduct(c.sku);
            return (
              <div key={c.name}>
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/5]">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-90"
                  />
                </div>
                <span className="mt-6 block h-1 w-8" style={{ background: p.tint }} />
                <h3 className="mt-4 font-serif text-2xl">{c.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ivory/45">{c.place}</p>
                <p className="mt-3 text-sm leading-relaxed text-ivory/75">{c.effect}</p>
                <a href="#collection" className="mt-4 inline-block text-sm hover:text-[#C9B3B5]">
                  <span className="text-ivory/45">→ </span>
                  {p.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
