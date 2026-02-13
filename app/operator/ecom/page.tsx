import { Card } from '@/components/card';

export default function EcomOperator() {
  return (
    <main>
      <div className="mb-10">
        <div className="text-xs uppercase tracking-widest text-white/40">Operator</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Ecom</h1>
        <p className="mt-2 max-w-2xl text-white/60">
          Pick an action. You’ll get structured results — no chat clutter.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Discover Product" desc="Find a winning angle fast." href="/operator/ecom/discover" />
        <Card title="Generate Ads" desc="Hooks, copy, angles — ready to launch." href="/operator/ecom/ads" />
        <Card title="Analyze Competitor" desc="Positioning + messaging snapshot." href="/operator/ecom/competitor" />
      </div>
    </main>
  );
}
