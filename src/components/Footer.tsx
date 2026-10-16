import Wordmark from './Wordmark';
import { PREVIEW } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Wordmark light className="text-2xl" />
            <p className="mt-3 text-[11px] uppercase tracking-label text-[#C9B3B5]">Skin thrives in its climate</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.16em] text-ivory/70">
            <a href="#climate" className="hover:text-ivory">
              The idea
            </a>
            <a href="#collection" className="hover:text-ivory">
              Collection
            </a>
            <a href="#quiz" className="hover:text-ivory">
              Find yours
            </a>
            <a href="#top" className="hover:text-ivory">
              Back to top ↑
            </a>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-xs text-ivory/45 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} CLYMAE. All rights reserved.</p>
          <p>
            {PREVIEW && 'Preview site: products are not yet on sale. '}
            Cosmetic products. Recommendations are guidance, not medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
