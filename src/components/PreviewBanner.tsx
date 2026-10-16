import { PREVIEW, PREVIEW_MESSAGE } from '@/data/site';

export default function PreviewBanner() {
  if (!PREVIEW) return null;
  return (
    <div role="note" className="bg-mauve px-5 py-2 text-center text-[12px] leading-snug text-ivory">
      <span className="mr-2 font-medium uppercase tracking-[0.18em]">{PREVIEW_MESSAGE.title}</span>
      <span className="text-ivory/90">{PREVIEW_MESSAGE.body}</span>
    </div>
  );
}
