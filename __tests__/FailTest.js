import { describe, test, expect } from '@jest/globals';
import { fail } from '../src/utils/Fail.js';

describe('fail 함수', () => {
  test('에러 메시지가 [ERROR] 형식으로 출력되는지 테스트', () => {
    expect(() => fail('자동차 이름은 5자 이하만 가능합니다.')).toThrow(
      '자동차 이름은 5자 이하만 가능합니다.',
    );
  });
});
