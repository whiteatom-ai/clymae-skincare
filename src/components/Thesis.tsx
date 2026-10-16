import { PRODUCTS } from '@/data/products';

const CLIMATES = [
  { name: 'Humid heat', place: 'Mumbai · Chennai · monsoon', effect: 'Sweat and oil sit on skin and clog pores.' },
  { name: 'Dry heat', place: 'Delhi summer · AC offices', effect: 'Dry air pulls water out of skin, fast.' },
  { name: 'Temperate', place: 'Bengaluru · Pune', effect: 'Mild air — skin needs steady, daily upkeep.' },
  { name: 'Cold & dry', place: 'North Indian winter · hills', effect: 'Cold slows natural oils; the barrier cracks.' },
];
const ORDER = ['SKU-01', 'SKU-02', 'SKU-03', 'SKU-04'];

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

        <div className="mt-16 grid grid-cols-1 border-t border-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
          {CLIMATES.map((c, i) => {
            const p = PRODUCTS.find((x) => x.id === ORDER[i])!;
            return (
              <div
                key={c.name}
                className="border-b border-ivory/15 py-8 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:first:pl-0"
              >
                <span className="block h-1.5 w-8" style={{ background: p.tint }} />
                <h3 className="mt-5 font-serif text-2xl">{c.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ivory/45">{c.place}</p>
                <p className="mt-4 text-sm leading-relaxed text-ivory/75">{c.effect}</p>
                <p className="mt-5 text-sm">
                  <span className="text-ivory/45">→ </span>
                  {p.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
