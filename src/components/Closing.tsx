import Image from 'next/image';
import { PREVIEW } from '@/data/site';

const STORES = [
  { label: 'Amazon', href: 'https://www.amazon.in/' },
  { label: 'Nykaa', href: 'https://www.nykaa.com/' },
  { label: 'Flipkart', href: 'https://www.flipkart.com/' },
];

export default function Closing() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:gap-20 md:px-8 md:py-28">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/images/brand-card.webp"
            alt="CLYMAE brand card embossed on textured paper over marble"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="label">Through every season</p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight md:text-5xl">
            Your climate changes.
            <br />
            <em>So can your moisturizer.</em>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-slate">
            Monsoon in Mumbai, winter in Delhi, a weekend in the hills — when the weather turns, so do your skin’s
            needs. Retake the quiz whenever your air changes.
          </p>
          <a href="#quiz" className="btn-line mt-9">
            ↺ Retake the quiz
          </a>

          <div className="mt-14 border-t border-line pt-8">
            <p className="label text-slate">{PREVIEW ? 'Launching soon on' : 'Available on'}</p>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-8 gap-y-2 font-serif text-3xl font-light md:text-4xl">
              {STORES.map((s) =>
                PREVIEW ? (
                  <span key={s.label} className="text-ink/80">
                    {s.label}
                  </span>
                ) : (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink transition-colors hover:text-mauve"
                  >
                    {s.label}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
