import { describe, test, expect } from '@jest/globals';
import { splitCarNames } from '../src/input/SplitCarNames.js';

describe('splitCarNames', () => {
  test('문자열-배열 변환 테스트', () => {
    const result = splitCarNames('tobi, wooki, podol');
    expect(result).toEqual(['tobi', 'wooki', 'podol']);
  });

  test('문자열-배열 변환, 공백 제거 테스트', () => {
    const result = splitCarNames(' tobi ,wooki,   podol ');
    expect(result).toEqual(['tobi', 'wooki', 'podol']);
  });
});
