import type { RenderBlock } from '../components/results/result-renderer';

export type MockAction = 'ecom_discover' | 'ecom_ads' | 'ecom_competitor';

export function runMock(action: MockAction, input: Record<string, string>) {
  const now = new Date().toLocaleString();

  if (action === 'ecom_discover') {
    const niche = input.niche || 'general';
    return {
      title: `Discover Product — ${niche}`,
      blocks: [
        { kind: 'text', text: `Generated at ${now}. This is placeholder logic; next step: real engine + research tools.` },
        { kind: 'title', text: '3 angles to test' },
        {
          kind: 'bullets',
          items: [
            `Angle A: “Fast win” in ${niche}`,
            `Angle B: “Premium simplification” in ${niche}`,
            `Angle C: “Before/after transformation” in ${niche}`
          ]
        },
        { kind: 'title', text: 'Next actions' },
        { kind: 'bullets', items: ['Generate ads for Angle A', 'Analyze top competitor messaging'] }
      ] satisfies RenderBlock[]
    };
  }

  if (action === 'ecom_ads') {
    const product = input.product || 'your product';
    const angle = input.angle || 'premium';
    return {
      title: `Generate Ads — ${product}`,
      blocks: [
        { kind: 'text', text: `Angle: ${angle}. Placeholder output.` },
        { kind: 'title', text: 'Hooks' },
        {
          kind: 'bullets',
          items: [
            `Stop scrolling — ${product} fixes the ${angle} problem.`,
            `If you’re tired of the usual, try this ${product}.`,
            `The ${angle} upgrade you’ll feel in 5 minutes.`
          ]
        },
        { kind: 'title', text: 'Primary text' },
        {
          kind: 'bullets',
          items: [
            `${product} is built for people who want ${angle} results — without the hassle.`,
            `Simple setup. Clean outcome. Try it today.`
          ]
        },
        { kind: 'title', text: 'Headlines' },
        { kind: 'bullets', items: ['Upgrade your day', 'Clean results, fast', 'Built for wins'] }
      ] satisfies RenderBlock[]
    };
  }

  const brand = input.brand || input.url || 'competitor';
  return {
    title: `Analyze Competitor — ${brand}`,
    blocks: [
      { kind: 'text', text: 'Placeholder snapshot: next step is structured scraping + offer parsing.' },
      { kind: 'title', text: 'What they likely sell' },
      { kind: 'bullets', items: ['Core promise', 'Primary audience', 'Offer hooks'] },
      { kind: 'title', text: 'Messaging map' },
      { kind: 'bullets', items: ['Pain → Solution', 'Proof → CTA', 'Objection handling'] }
    ] satisfies RenderBlock[]
  };
}
