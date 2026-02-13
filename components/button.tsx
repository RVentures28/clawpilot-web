export function Button({
  children,
  onClick,
  disabled,
  className = '',
  type = 'button'
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={
        'rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 shadow-soft transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50 ' +
        className
      }
    >
      {children}
    </button>
  );
}
