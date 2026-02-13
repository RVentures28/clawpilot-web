'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type Toast = { id: string; title: string; message?: string };

const Ctx = createContext<{
  toasts: Toast[];
  push: (t: Omit<Toast, 'id'>) => void;
  remove: (id: string) => void;
} | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const remove = useCallback((id: string) => {
    setToasts((x) => x.filter((t) => t.id !== id));
  }, []);

  const push = useCallback((t: Omit<Toast, 'id'>) => {
    const id = crypto.randomUUID();
    setToasts((x) => [{ id, ...t }, ...x].slice(0, 3));
    setTimeout(() => remove(id), 2600);
  }, [remove]);

  const value = useMemo(() => ({ toasts, push, remove }), [toasts, push, remove]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <div className="fixed right-5 top-20 z-50 space-y-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="w-[300px] rounded-2xl border border-white/10 bg-bg-panel/85 p-4 text-sm shadow-soft backdrop-blur"
          >
            <div className="font-semibold tracking-tight">{t.title}</div>
            {t.message ? <div className="mt-1 text-white/60">{t.message}</div> : null}
          </div>
        ))}
      </div>
    </Ctx.Provider>
  );
}

export function useToast() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('ToastProvider missing');
  return ctx;
}
