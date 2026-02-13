'use client';

import { useEffect, useState } from 'react';
import { getSupabaseClient } from '../lib/supabaseClient';

export function SupabaseStatus() {
  const [status, setStatus] = useState<'checking' | 'ok' | 'missing-env' | 'error'>('checking');
  const [detail, setDetail] = useState<string>('');

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) {
      setStatus('missing-env');
      setDetail('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY');
      return;
    }

    const supabase = getSupabaseClient();
    // cheap call to verify client can be constructed; auth.getSession hits local storage and network as needed
    supabase.auth
      .getSession()
      .then(() => {
        setStatus('ok');
        setDetail('Supabase client initialized');
      })
      .catch((e) => {
        setStatus('error');
        setDetail(e?.message ?? String(e));
      });
  }, []);

  const color = status === 'ok' ? 'green' : status === 'missing-env' ? 'orange' : status === 'error' ? 'crimson' : 'gray';

  return (
    <div style={{ padding: 12, border: `1px solid ${color}`, borderRadius: 8 }}>
      <div>
        Status: <b style={{ color }}>{status}</b>
      </div>
      {detail ? <div style={{ marginTop: 6, opacity: 0.85 }}>{detail}</div> : null}
    </div>
  );
}
