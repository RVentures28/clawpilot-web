'use client';

import { useState } from 'react';
import { Button } from '../../../../components/button';
import { Input, Label } from '../../../../components/input';
import { ResultRenderer } from '../../../../components/results/result-renderer';
import { runMock } from '../../../../lib/mockEngine';

export default function Discover() {
  const [niche, setNiche] = useState('');
  const [result, setResult] = useState<null | { title: string; blocks: any[] }>(null);

  return (
    <main className="grid gap-6 lg:grid-cols-[420px_1fr]">
      <div className="rounded-2xl border border-white/10 bg-bg-panel/70 p-6 shadow-soft">
        <div className="text-xs uppercase tracking-widest text-white/40">Ecom</div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Discover Product</h1>
        <p className="mt-2 text-sm text-white/60">Fast angles → then build ads.</p>

        <div className="mt-6">
          <Label>Niche / Keyword</Label>
          <Input value={niche} onChange={setNiche} placeholder="e.g. fitness gadgets" />
        </div>

        <div className="mt-6 flex gap-2">
          <Button onClick={() => setResult(runMock('ecom_discover', { niche }))}>Run</Button>
          <Button className="bg-transparent" onClick={() => setResult(null)}>
            Clear
          </Button>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/50">
          Next: connect real engine + cost meter. For now this is a UI+flow placeholder.
        </div>
      </div>

      {result ? <ResultRenderer title={result.title} blocks={result.blocks} /> : null}
    </main>
  );
}
