export function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-xs uppercase tracking-widest text-white/50">{children}</div>;
}

export function Input({
  value,
  onChange,
  placeholder,
  className = ''
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={
        'mt-2 w-full rounded-xl border border-white/10 bg-bg-panel2/70 px-4 py-3 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-white/25 ' +
        className
      }
    />
  );
}

export function Textarea({
  value,
  onChange,
  placeholder,
  rows = 5
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-bg-panel2/70 px-4 py-3 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-white/25"
    />
  );
}
