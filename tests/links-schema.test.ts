import { describe, it, expect } from 'vitest';
import { LINK_GROUPS } from '../src/data/links';

describe('LINK_GROUPS data', () => {
  it('has non-empty groups with required fields', () => {
    expect(Array.isArray(LINK_GROUPS)).toBe(true);
    for (const g of LINK_GROUPS) {
      expect(typeof g.id).toBe('string');
      expect(typeof g.title).toBe('string');
      expect(Array.isArray(g.links)).toBe(true);
      for (const item of g.links) {
        expect(typeof item.id).toBe('string');
        expect(typeof item.title).toBe('string');
        expect(typeof item.href).toBe('string');
      }
    }
  });
});
