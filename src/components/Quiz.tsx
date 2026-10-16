'use client';

import { useRef, useState } from 'react';
import { calculatePrescription, type Modifiers, type SkinFeel, type Zone } from '@/lib/engine';
import ShopLinks from './ShopLinks';

const ZONES: { id: Zone; title: string; hint: string }[] = [
  { id: 'A', title: 'Humid & hot', hint: 'Mumbai, Chennai, Kolkata, coastal, monsoon' },
  { id: 'B', title: 'Dry & hot', hint: 'Delhi, Jaipur, north Indian summer' },
  { id: 'C', title: 'Cold & dry', hint: 'North Indian winter, hills, high altitude' },
  { id: 'D', title: 'Mild & balanced', hint: 'Bengaluru, Pune, pleasant most of the year' },
];

const SKIN: { id: SkinFeel; title: string; hint: string }[] = [
  { id: 'oily', title: 'Oily', hint: 'Shiny, especially on the T-zone' },
  { id: 'normal', title: 'Comfortable', hint: 'Neither shiny nor tight' },
  { id: 'dry', title: 'Dry or tight', hint: 'Rough, flaky or pulls after washing' },
];

const MODS: { id: keyof Modifiers; title: string; hint: string }[] = [
  { id: 'highAc', title: '8+ hours in AC or heating', hint: 'Office, home or car, most days' },
  { id: 'hardWater', title: 'Hard or borewell water', hint: 'White residue on taps and buckets' },
  { id: 'commute', title: 'Open two-wheeler commute', hint: 'Daily wind, sun and pollution' },
];

const NO_MODS: Modifiers = { highAc: false, hardWater: false, commute: false };

function Option({
  title,
  hint,
  selected,
  onClick,
  multi,
}: {
  title: string;
  hint: string;
  selected: boolean;
  onClick: () => void;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex w-full items-center gap-5 border px-5 py-5 text-left transition-colors duration-200 md:px-6 ${
        selected ? 'border-ink bg-ink text-ivory' : 'border-line bg-ivory hover:border-ink'
      }`}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center border ${multi ? '' : 'rounded-full'} ${
          selected ? 'border-ivory' : 'border-ink/40'
        }`}
      >
        {selected && <span className={`h-2 w-2 bg-ivory ${multi ? '' : 'rounded-full'}`} />}
      </span>
      <span>
        <span className="block font-serif text-xl md:text-2xl">{title}</span>
        <span className={`mt-0.5 block text-sm ${selected ? 'text-ivory/70' : 'text-slate'}`}>{hint}</span>
      </span>
    </button>
  );
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [zone, setZone] = useState<Zone | null>(null);
  const [skin, setSkin] = useState<SkinFeel | null>(null);
  const [mods, setMods] = useState<Modifiers>(NO_MODS);
  const top = useRef<HTMLDivElement>(null);

  const go = (n: number) => {
    setStep(n);
    top.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const reset = () => {
    setZone(null);
    setSkin(null);
    setMods(NO_MODS);
    go(0);
  };

  const result = step === 3 && zone && skin ? calculatePrescription({ zone, skinFeel: skin, modifiers: mods }) : null;

  return (
    <section id="quiz" className="border-t border-line bg-cream/60">
      <div ref={top} className="mx-auto max-w-3xl scroll-mt-16 px-5 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <p className="label">Find your moisturizer</p>
          <h2 className="mt-4 font-serif text-4xl font-light md:text-5xl">
            Three questions. <em>One match.</em>
          </h2>
          {step < 3 && (
            <div className="mt-8 flex items-center justify-center gap-2" aria-label={`Question ${step + 1} of 3`}>
              {[0, 1, 2].map((i) => (
                <span key={i} className={`h-[3px] w-10 transition-colors ${i <= step ? 'bg-ink' : 'bg-line'}`} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-12">
          {step === 0 && (
            <div key="q1" className="rise">
              <h3 className="mb-6 text-center font-serif text-2xl md:text-3xl">Where do you spend most of your days?</h3>
              <div className="space-y-3">
                {ZONES.map((z) => (
                  <Option
                    key={z.id}
                    title={z.title}
                    hint={z.hint}
                    selected={zone === z.id}
                    onClick={() => {
                      setZone(z.id);
                      setTimeout(() => go(1), 220);
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div key="q2" className="rise">
              <h3 className="mb-6 text-center font-serif text-2xl md:text-3xl">By mid-afternoon, your skin feels…</h3>
              <div className="space-y-3">
                {SKIN.map((s) => (
                  <Option
                    key={s.id}
                    title={s.title}
                    hint={s.hint}
                    selected={skin === s.id}
                    onClick={() => {
                      setSkin(s.id);
                      setTimeout(() => go(2), 220);
                    }}
                  />
                ))}
              </div>
              <button onClick={() => go(0)} className="label mt-8 block w-full text-center text-slate hover:text-ink">
                ← Back
              </button>
            </div>
          )}

          {step === 2 && (
            <div key="q3" className="rise">
              <h3 className="mb-2 text-center font-serif text-2xl md:text-3xl">Do any of these apply to you?</h3>
              <p className="mb-6 text-center text-sm text-slate">Choose all that apply — or none.</p>
              <div className="space-y-3">
                {MODS.map((m) => (
                  <Option
                    key={m.id}
                    multi
                    title={m.title}
                    hint={m.hint}
                    selected={mods[m.id]}
                    onClick={() => setMods((prev) => ({ ...prev, [m.id]: !prev[m.id] }))}
                  />
                ))}
              </div>
              <div className="mt-8 flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
                <button onClick={() => go(1)} className="label text-slate hover:text-ink">
                  ← Back
                </button>
                <button onClick={() => go(3)} className="btn-dark w-full sm:w-auto">
                  See my match
                </button>
              </div>
            </div>
          )}

          {result && (
            <div key="result" className="rise">
              <div className="p-7 md:p-12" style={{ background: result.product.tint }}>
                <p className="text-[11px] uppercase tracking-label" style={{ color: result.product.ink }}>
                  Your match · No. {result.product.number}
                </p>
                <h3 className="mt-4 font-serif text-4xl font-light leading-tight md:text-5xl">{result.product.name}</h3>
                <p className="mt-2 text-slate">{result.product.format}</p>

                <div className="mt-8 grid gap-8 border-t border-ink/10 pt-8 md:grid-cols-[1.4fr_1fr]">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate">Why this works for you</p>
                    <p className="mt-3 leading-relaxed">{result.product.rationale}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate">Key actives</p>
                    <ul className="mt-3 space-y-1.5">
                      {result.product.actives.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {result.tips.length > 0 && (
                  <div className="mt-8 border-t border-ink/10 pt-8">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate">Also for your routine</p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                      {result.tips.map((t) => (
                        <li key={t}>— {t}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-10">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-slate">
                    Buy {result.product.size} · {result.product.price}
                  </p>
                  <ShopLinks product={result.product} />
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
                <button onClick={reset} className="label text-ink hover:text-mauve">
                  ↺ Retake the quiz
                </button>
                <a href="#collection" className="label text-ink hover:text-mauve">
                  See all four →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
