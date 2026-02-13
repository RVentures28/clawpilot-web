import Link from 'next/link';
import { Card } from '../components/card';

export default function Landing() {
  return (
    <main className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Operator-as-a-Service
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight lg:text-5xl">
            Launch your AI Operator in <span className="text-white">30 seconds</span>
            <span className="text-white/40">—no API keys, no setup.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            ClawPilot is a minimal SaaS that ships outcomes—not chat bubbles. Pick an operator, run a workflow, get a clean
            result you can copy, export, or save.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/app"
              className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white/90 shadow-soft hover:bg-white/15"
            >
              Open ClawPilot
            </Link>
            <Link
              href="/operator/ecom"
              className="rounded-xl px-5 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white"
            >
              See Ecom Operator →
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-bg-panel/60 p-4">
              <div className="text-sm font-semibold">No API keys</div>
              <div className="mt-1 text-xs text-white/55">We handle the stack & cost control.</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-bg-panel/60 p-4">
              <div className="text-sm font-semibold">Outcome first</div>
              <div className="mt-1 text-xs text-white/55">Structured results, not prompt chaos.</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-bg-panel/60 p-4">
              <div className="text-sm font-semibold">Built to run</div>
              <div className="mt-1 text-xs text-white/55">Tasks, budgets, and guardrails.</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
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
      </section>

      <section className="rounded-2xl border border-white/10 bg-bg-panel/50 p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40">Pricing</div>
            <div className="mt-2 text-lg font-semibold">49€ platform + usage-based Operator Spend</div>
            <p className="mt-2 text-sm text-white/60">
              No credit confusion. Set a max spend per run. Pay only for real work executed.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-bg-panel/60 p-5">
            <div className="text-sm font-semibold">Starter</div>
            <div className="mt-1 text-2xl font-semibold">49€ <span className="text-sm text-white/40">/mo</span></div>
            <div className="mt-3 text-sm text-white/60">1 operator at a time • workspace • templates</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-bg-panel/60 p-5">
            <div className="text-sm font-semibold">Pro</div>
            <div className="mt-1 text-2xl font-semibold">99€ <span className="text-sm text-white/40">/mo</span></div>
            <div className="mt-3 text-sm text-white/60">faster execution • more operators • higher limits</div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-bg-panel/50 p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40">How it feels</div>
            <div className="mt-2 text-lg font-semibold">Stripe × Linear × Apple</div>
            <p className="mt-2 text-sm text-white/60">
              Calm panels, whitespace, premium output screens. No sidebar chaos.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40">Not a wrapper</div>
            <div className="mt-2 text-lg font-semibold">A workforce, not a toolbox</div>
            <p className="mt-2 text-sm text-white/60">
              Operators run workflows. You get deliverables.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40">Next</div>
            <div className="mt-2 text-lg font-semibold">Task queue + usage metering</div>
            <p className="mt-2 text-sm text-white/60">
              Budget caps, transparent spend, and saved artifacts.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-xs text-white/40">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} ClawPilot</div>
          <div className="flex items-center gap-4">
            <span className="text-white/30">RVentures</span>
            <Link className="hover:text-white/70" href="/app">
              App
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
