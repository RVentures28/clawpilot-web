import { runMock, type MockAction } from './mockEngine';

export function runTask(operator: string, action: string, input: Record<string, string>) {
  // MVP: map to mock engine. Next step: real engine (LLM/tools/queue)
  if (operator === 'ecom') {
    const map: Record<string, MockAction> = {
      discover: 'ecom_discover',
      ads: 'ecom_ads',
      competitor: 'ecom_competitor'
    };
    const a = map[action];
    if (!a) throw new Error(`Unknown ecom action: ${action}`);
    return runMock(a, input);
  }
  throw new Error(`Unknown operator: ${operator}`);
}
