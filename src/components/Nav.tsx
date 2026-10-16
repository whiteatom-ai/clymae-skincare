import Wordmark from './Wordmark';

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ivory/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="text-lg md:text-xl">
          <Wordmark />
        </a>
        <div className="flex items-center gap-6 md:gap-10">
          <a href="#climate" className="label hidden text-ink hover:text-mauve md:inline">
            The idea
          </a>
          <a href="#collection" className="label hidden text-ink hover:text-mauve sm:inline">
            Collection
          </a>
          <a href="#quiz" className="btn-dark px-5 py-2.5">
            Find yours
          </a>
        </div>
      </nav>
    </header>
  );
}
