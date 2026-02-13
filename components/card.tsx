import Link from 'next/link';

export function Card({
  title,
  desc,
  href,
  badge
}: {
  title: string;
  desc: string;
  href: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative rounded-2xl border border-white/10 bg-bg-panel/70 p-6 shadow-soft transition hover:border-white/20 hover:bg-bg-panel"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold tracking-tight">{title}</div>
          <div className="mt-1 text-sm text-white/60">{desc}</div>
        </div>
        {badge ? (
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
            {badge}
          </div>
        ) : null}
      </div>
      <div className="mt-6 text-sm text-white/60 group-hover:text-white/80">Open →</div>
    </Link>
  );
}
