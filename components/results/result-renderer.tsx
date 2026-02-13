import { Button } from '../button';

export type RenderBlock =
  | { kind: 'title'; text: string }
  | { kind: 'text'; text: string }
  | { kind: 'bullets'; items: string[] };

export function ResultRenderer({
  title,
  blocks
}: {
  title: string;
  blocks: RenderBlock[];
}) {
  const plain = [title]
    .concat(
      blocks.map((b) => {
        if (b.kind === 'title') return `\n${b.text}\n`;
        if (b.kind === 'text') return b.text;
        return b.items.map((x) => `- ${x}`).join('\n');
      })
    )
    .join('\n');

  return (
    <div className="rounded-2xl border border-white/10 bg-bg-panel/70 p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-white/40">Result</div>
          <h2 className="mt-2 text-xl font-semibold tracking-tight">{title}</h2>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={async () => {
              await navigator.clipboard.writeText(plain);
            }}
          >
            Copy
          </Button>
          <Button
            onClick={() => {
              const blob = new Blob([plain], { type: 'text/plain;charset=utf-8' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'clawpilot-result.txt';
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            Export
          </Button>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {blocks.map((b, idx) => {
          if (b.kind === 'title') {
            return (
              <div key={idx} className="text-sm font-semibold text-white/85">
                {b.text}
              </div>
            );
          }
          if (b.kind === 'text') {
            return (
              <div key={idx} className="text-sm leading-relaxed text-white/70">
                {b.text}
              </div>
            );
          }
          return (
            <ul key={idx} className="list-disc space-y-2 pl-5 text-sm text-white/70">
              {b.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
