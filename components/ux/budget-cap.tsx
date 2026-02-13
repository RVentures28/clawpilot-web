'use client';

import { Input, Label } from '../input';

export function BudgetCap({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
      <Label>Max spend (EUR) — optional</Label>
      <Input value={value} onChange={onChange} placeholder="e.g. 3" />
      <div className="mt-2 text-xs text-white/45">
        MVP placeholder. Later: accurate estimate + hard cap guardrails.
      </div>
    </div>
  );
}
