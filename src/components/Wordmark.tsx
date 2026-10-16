// CLYMAE wordmark — the "A" is drawn as an open Λ with a small mauve bar, as on the brand card.
export default function Wordmark({ className = '', light = false }: { className?: string; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-baseline font-sans font-light tracking-brand ${light ? 'text-ivory' : 'text-ink'} ${className}`}
      aria-label="CLYMAE"
    >
      <span aria-hidden>CLYM</span>
      <span aria-hidden className="relative">
        Λ
        <span className="absolute bottom-[0.12em] left-1/2 h-[0.07em] w-[0.32em] -translate-x-1/2 bg-mauve" />
      </span>
      <span aria-hidden>E</span>
    </span>
  );
}
