import { describe, test, expect, jest } from '@jest/globals';
import { Console } from '@woowacourse/mission-utils';
import { printRound } from '../src/race/PrintRound.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: { print: jest.fn() },
}));

describe('printRound', () => {
  test('각 자동차의 이름과 (-) 개수를 올바르게 출력하고, 밑에 빈 줄을 출력', () => {
    // given
    const roundResult = [
      { name: 'tobi', pos: 4 },
      { name: 'wooki', pos: 3 },
      { name: 'podol', pos: 5 },
    ];

    // when
    printRound(roundResult);

    // then
    expect(Console.print).toHaveBeenNthCalledWith(1, 'tobi : ----');
    expect(Console.print).toHaveBeenNthCalledWith(2, 'wooki : ---');
    expect(Console.print).toHaveBeenNthCalledWith(3, 'podol : -----');
    expect(Console.print).toHaveBeenNthCalledWith(4, '');
    expect(Console.print).toHaveBeenCalledTimes(4);
  });
});
