export function LogoMark({ className = '' }: { className?: string }) {
  // Placeholder mark: we'll replace with plane+claw SVG once you approve direction.
  return (
    <div
      className={
        'h-8 w-8 rounded-xl border border-white/10 bg-white/5 shadow-soft backdrop-blur ' +
        className
      }
      aria-label="ClawPilot"
      title="ClawPilot"
    />
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
