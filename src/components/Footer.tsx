import Wordmark from './Wordmark';

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Wordmark light className="text-2xl" />
            <p className="mt-3 text-[11px] uppercase tracking-label text-[#C9B3B5]">Skin thrives in its climate</p>
          </div>
          <div className="flex gap-8 text-[11px] uppercase tracking-[0.16em] text-ivory/70">
            <a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
              Amazon
            </a>
            <a href="https://www.nykaa.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
              Nykaa
            </a>
            <a href="https://www.flipkart.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
              Flipkart
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-xs text-ivory/45 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} CLYMAE. All rights reserved.</p>
          <p>Cosmetic products. Recommendations are guidance, not medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
