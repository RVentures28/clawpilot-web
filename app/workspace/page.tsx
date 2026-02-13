export default function Workspace() {
  return (
    <main>
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Workspace</h1>
        <p className="mt-2 max-w-2xl text-white/60">
          Saved results will live here. Next step: connect Supabase tables + RLS.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-bg-panel/70 p-6">
        <div className="text-sm text-white/60">No saved results yet.</div>
      </div>
    </main>
  );
}
