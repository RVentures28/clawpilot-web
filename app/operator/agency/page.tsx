import { Card } from '@/components/card';

export default function AgencyOperator() {
  return (
    <main>
      <div className="mb-10">
        <div className="text-xs uppercase tracking-widest text-white/40">Operator</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Agency</h1>
        <p className="mt-2 max-w-2xl text-white/60">
          Calm panels, outcome-first.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Lead Research" desc="Build a list + talking points." href="/operator/agency/leads" />
        <Card title="Cold Outreach" desc="Sequences + variants." href="/operator/agency/outreach" />
        <Card title="Offer Generator" desc="Create a compelling offer fast." href="/operator/agency/offer" />
      </div>
    </main>
  );
}
