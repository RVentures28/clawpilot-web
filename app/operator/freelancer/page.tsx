import { Card } from '@/components/card';

export default function FreelancerOperator() {
  return (
    <main>
      <div className="mb-10">
        <div className="text-xs uppercase tracking-widest text-white/40">Operator</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Freelancer</h1>
        <p className="mt-2 max-w-2xl text-white/60">
          Proposals, briefs, content — structured output.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Proposal Generator" desc="Win deals faster." href="/operator/freelancer/proposal" />
        <Card title="Brief → Summary" desc="Turn chaos into tasks." href="/operator/freelancer/brief" />
        <Card title="Content Drafts" desc="Draft posts, emails, pages." href="/operator/freelancer/content" />
      </div>
    </main>
  );
}
