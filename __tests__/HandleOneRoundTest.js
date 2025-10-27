import { describe, test, expect, jest } from '@jest/globals';
import { handleOneRound } from '../src/race/HandleOneRound';
import { canMove } from '../src/race/CanMove';

jest.mock('../src/race/CanMove', () => ({
  canMove: jest.fn(),
}));

describe('handleOneRound', () => {
  test('canMove가 true일 때는 pos가 1씩 증가, false일 때는 유지', () => {
    canMove.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const cars = [
      { name: 'tobi', pos: 3 },
      { name: 'wooki', pos: 2 },
    ];

    const result = handleOneRound(cars);

    expect(result).toEqual([
      { name: 'tobi', pos: 4 },
      { name: 'wooki', pos: 2 },
    ]);
  });
});
