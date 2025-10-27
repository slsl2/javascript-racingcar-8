import { describe, test, expect, jest } from '@jest/globals';
import { Random } from '@woowacourse/mission-utils';
import { canMove } from '../src/race/CanMove';

describe('canMove', () => {
  test('랜덤값이 4 이상이면 true 반환 테스트', () => {
    jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(5);
    expect(canMove()).toBe(true);
  });

  test('랜덤값이 4 미만이면 false 반환 테스트', () => {
    jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(2);
    expect(canMove()).toBe(false);
  });
});
