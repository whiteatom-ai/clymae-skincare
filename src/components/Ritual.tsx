import Image from 'next/image';

export default function Ritual() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
      <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <div className="relative aspect-[10/7] overflow-hidden">
          <Image
            src="/images/lifestyle.webp"
            alt="Hands warming a drop of CLYMAE moisturizer in morning light"
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="label">The ritual</p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight md:text-5xl">
            One step.
            <br />
            <em>Made for your air.</em>
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-slate">
            No ten-step routines. Pick the one moisturizer built for where you live, and let it do its work —
            morning and night.
          </p>
          <a href="#quiz" className="btn-dark mt-9">
            Find yours in 30 seconds
          </a>
        </div>
      </div>
    </section>
  );
}
