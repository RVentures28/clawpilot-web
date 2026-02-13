'use client';

import { useState } from 'react';
import { Button } from '../../../../components/button';
import { Input, Label, Textarea } from '../../../../components/input';
import { ResultRenderer } from '../../../../components/results/result-renderer';
import { runMock } from '../../../../lib/mockEngine';

export default function Ads() {
  const [product, setProduct] = useState('');
  const [angle, setAngle] = useState('');
  const [notes, setNotes] = useState('');
  const [result, setResult] = useState<null | { title: string; blocks: any[] }>(null);

  return (
    <main className="grid gap-6 lg:grid-cols-[420px_1fr]">
      <div className="rounded-2xl border border-white/10 bg-bg-panel/70 p-6 shadow-soft">
        <div className="text-xs uppercase tracking-widest text-white/40">Ecom</div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Generate Ads</h1>
        <p className="mt-2 text-sm text-white/60">Hooks + copy + angles.</p>

        <div className="mt-6">
          <Label>Product</Label>
          <Input value={product} onChange={setProduct} placeholder="e.g. posture corrector" />
        </div>
        <div className="mt-4">
          <Label>Angle</Label>
          <Input value={angle} onChange={setAngle} placeholder="e.g. premium / fast win / transformation" />
        </div>
        <div className="mt-4">
          <Label>Notes (optional)</Label>
          <Textarea value={notes} onChange={setNotes} placeholder="Any constraints, tone, platform..." rows={4} />
        </div>

        <div className="mt-6 flex gap-2">
          <Button onClick={() => setResult(runMock('ecom_ads', { product, angle, notes }))}>Run</Button>
          <Button className="bg-transparent" onClick={() => setResult(null)}>
            Clear
          </Button>
        </div>
      </div>

      {result ? <ResultRenderer title={result.title} blocks={result.blocks} /> : null}
    </main>
  );
}
