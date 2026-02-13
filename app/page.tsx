import { SupabaseStatus } from './supabase-status';

export default function Page() {
  return (
    <main style={{ padding: 24, maxWidth: 820 }}>
      <h1 style={{ marginTop: 0 }}>ClawPilot</h1>
      <p>Base deployment is live. Next: connect Supabase + start shipping features.</p>

      <h2>Supabase connection</h2>
      <SupabaseStatus />

      <hr style={{ margin: '24px 0' }} />

      <h3>Environment variables needed in Vercel</h3>
      <ul>
        <li><code>NEXT_PUBLIC_SUPABASE_URL</code></li>
        <li><code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code></li>
      </ul>
    </main>
  );
}
