import { describe, it, expect } from 'vitest';
import { solution } from './solution.js';

describe('solution', () => {
  it('should return the input', () => {
    expect(solution(1)).toBe(1);
  });

  it('should handle strings', () => {
    expect(solution('hello')).toBe('hello');
  });
});
