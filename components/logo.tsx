import Image from 'next/image';

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <div
      className={
        'relative h-8 w-8 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-soft ' +
        className
      }
      aria-label="ClawPilot"
      title="ClawPilot"
    >
      <Image
        src="/brand/logo-mark.svg"
        alt="ClawPilot"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

export function LogoWordmark() {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-[15px] font-semibold tracking-tight">ClawPilot</span>
      <span className="text-[12px] text-white/40">by RVentures</span>
    </div>
  );
}
