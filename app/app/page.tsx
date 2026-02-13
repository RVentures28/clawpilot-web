import { Card } from '../components/card';

export default function Page() {
  return (
    <main>
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Choose your Operator</h1>
        <p className="mt-2 max-w-2xl text-white/60">
          Launch an outcome-driven AI Operator in seconds — no API keys, no setup.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card
          title="Freelancer"
          desc="Proposals, briefs, content — ship more client work in less time."
          href="/operator/freelancer"
          badge="Operator"
        />
        <Card
          title="Ecom"
          desc="Research → hooks → ad copy → creative angles — one calm flow."
          href="/operator/ecom"
          badge="MVP"
        />
        <Card
          title="Agency"
          desc="Outreach, offers, funnel summaries — scale without hiring."
          href="/operator/agency"
          badge="Operator"
        />
      </div>
    </main>
  );
}
