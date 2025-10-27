import { describe, test, expect, jest } from '@jest/globals';
import { Console } from '@woowacourse/mission-utils';
import { inputTotalRound } from '../src/input/InputTotalRound.js';

describe('inputTotalRound', () => {
  test('Console.readLineAsync가 호출되는지 테스트', async () => {
    const mockReadLine = jest.spyOn(Console, 'readLineAsync').mockResolvedValue('7');

    await inputTotalRound();

    expect(mockReadLine).toHaveBeenCalledTimes(1);
    expect(mockReadLine).toHaveBeenCalledWith('시도할 횟수는 몇 회인가요?\n');

    mockReadLine.mockRestore();
  });

  test('입력값이 그대로 반환되는지 테스트', async () => {
    jest.spyOn(Console, 'readLineAsync').mockResolvedValue('7');

    const result = await inputTotalRound();
    expect(result).toBe('7');
  });
});
