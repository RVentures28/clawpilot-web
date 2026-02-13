'use client';

import { useState } from 'react';
import { Button } from '../../../../components/button';
import { Input, Label } from '../../../../components/input';
import { ResultRenderer } from '../../../../components/results/result-renderer';
import { runMock } from '../../../../lib/mockEngine';

export default function Competitor() {
  const [brand, setBrand] = useState('');
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<null | { title: string; blocks: any[] }>(null);

  return (
    <main className="grid gap-6 lg:grid-cols-[420px_1fr]">
      <div className="rounded-2xl border border-white/10 bg-bg-panel/70 p-6 shadow-soft">
        <div className="text-xs uppercase tracking-widest text-white/40">Ecom</div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Analyze Competitor</h1>
        <p className="mt-2 text-sm text-white/60">Positioning + messaging snapshot.</p>

        <div className="mt-6">
          <Label>Brand</Label>
          <Input value={brand} onChange={setBrand} placeholder="e.g. Gymshark" />
        </div>
        <div className="mt-4">
          <Label>URL (optional)</Label>
          <Input value={url} onChange={setUrl} placeholder="https://..." />
        </div>

        <div className="mt-6 flex gap-2">
          <Button onClick={() => setResult(runMock('ecom_competitor', { brand, url }))}>Run</Button>
          <Button className="bg-transparent" onClick={() => setResult(null)}>
            Clear
          </Button>
        </div>
      </div>

      {result ? <ResultRenderer title={result.title} blocks={result.blocks} /> : null}
    </main>
  );
}
