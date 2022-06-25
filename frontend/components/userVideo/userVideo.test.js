import { expect, test } from 'vitest';

export function add(...args) {
  return args.reduce((a, b) => a + b, 0);
}

test('userVideo', () => {
  expect(1).toBe(1);
  expect(add(2)).toBe(2);
  expect(add(1,2,3)).toBe(6);
});