import Link from 'next/link';
import { LogoMark, LogoWordmark } from './logo';

export function Topbar() {
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark />
          <LogoWordmark />
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <Link href="/app" className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white">
            App
          </Link>
          <Link href="/workspace" className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white">
            Workspace
          </Link>
          <div className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/70 md:block">
            Status: <span className="text-white/80">Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}
