import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../../lib/supabaseServer';
import { runTask } from '../../../lib/taskRunner';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const operator = String(body.operator || '');
    const action = String(body.action || '');
    const input = (body.input || {}) as Record<string, string>;
    const user_id = String(body.user_id || '');

    if (!user_id) return NextResponse.json({ ok: false, error: 'Missing user_id' }, { status: 400 });
    if (!operator || !action) return NextResponse.json({ ok: false, error: 'Missing operator/action' }, { status: 400 });

    const supabase = getSupabaseAdmin();

    // create task
    const { data: task, error: insErr } = await supabase
      .from('tasks')
      .insert({ user_id, operator, action, input, status: 'running' })
      .select('*')
      .single();

    if (insErr) throw new Error(insErr.message);

    // run
    let result;
    try {
      result = runTask(operator, action, input);
    } catch (e: any) {
      await supabase.from('tasks').update({ status: 'failed', error: e?.message ?? String(e) }).eq('id', task.id);
      throw e;
    }

    // save artifact
    const { data: artifact, error: artErr } = await supabase
      .from('artifacts')
      .insert({ user_id, task_id: task.id, title: result.title, content: result })
      .select('*')
      .single();
    if (artErr) throw new Error(artErr.message);

    await supabase.from('tasks').update({ status: 'done' }).eq('id', task.id);

    return NextResponse.json({ ok: true, taskId: task.id, artifactId: artifact.id, result });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? String(e) }, { status: 500 });
  }
}
