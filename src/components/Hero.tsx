import Image from 'next/image';

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
      <div className="rise mx-auto max-w-3xl text-center">
        <p className="label">Climate-personalized skincare</p>
        <h1 className="mt-6 font-serif text-[2.75rem] font-light leading-[1.05] sm:text-6xl md:text-7xl">
          Skin thrives in
          <br />
          <em className="font-normal">its climate.</em>
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-slate md:text-lg">
          Four moisturizers, each made for the air you live in — humid, dry heat, cold or temperate.
          Answer three questions and we’ll tell you which one is yours.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#quiz" className="btn-dark w-full sm:w-auto">
            Find my moisturizer
          </a>
          <a href="#collection" className="btn-line w-full sm:w-auto">
            View the collection
          </a>
        </div>
      </div>

      <div className="rise mt-16 overflow-hidden md:mt-20" style={{ animationDelay: '0.15s' }}>
        <Image
          src="/images/clymae-lineup.jpg"
          alt="The four CLYMAE moisturizers: Zero-Weight Water Gel, Balancing Fluid Milk, Ceramide Comfort Lotion and SOS Rescue Butter"
          width={1024}
          height={683}
          priority
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
