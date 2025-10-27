import { describe, test, expect, jest } from '@jest/globals';
import { Console } from '@woowacourse/mission-utils';
import { printWinners } from '../src/race/PrintWinners.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: { print: jest.fn() },
}));

describe('printRound', () => {
  test('최종 우승자 출력 테스트', () => {
    // given
    const cars = [
      { name: 'tobi', pos: 4 },
      { name: 'wooki', pos: 3 },
      { name: 'podol', pos: 5 },
    ];

    // when
    printWinners(cars);

    // then
    expect(Console.print).toHaveBeenNthCalledWith(1, '최종 우승자 : podol');
  });
});
