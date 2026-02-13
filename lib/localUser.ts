export function getLocalUserId() {
  if (typeof window === 'undefined') return 'server';
  const k = 'clawpilot_local_user_id';
  let v = window.localStorage.getItem(k);
  if (!v) {
    v = crypto.randomUUID();
    window.localStorage.setItem(k, v);
  }
  return v;
}
