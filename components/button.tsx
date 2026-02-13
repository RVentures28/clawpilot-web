'use client';

export function Button({
  children,
  onClick,
  disabled,
  className = '',
  type = 'button',
  loading
}: {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  loading?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick as any}
      disabled={disabled || loading}
      className={
        'inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 shadow-soft transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50 ' +
        className
      }
    >
      {loading ? (
        <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white/70" />
      ) : null}
      {children}
    </button>
  );
}
