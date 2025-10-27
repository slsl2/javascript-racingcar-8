import { describe, test, expect, jest } from '@jest/globals';
import { Console } from '@woowacourse/mission-utils';
import { inputCarNames } from '../src/input/InputCarNames.js';

describe('inputCarNames', () => {
  test('Console.readLineAsync가 호출되는지 테스트', async () => {
    const mockReadLine = jest
      .spyOn(Console, 'readLineAsync')
      .mockResolvedValue('tobi ,wooki, podol');

    await inputCarNames();

    expect(mockReadLine).toHaveBeenCalledTimes(1);
    expect(mockReadLine).toHaveBeenCalledWith(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    mockReadLine.mockRestore();
  });

  test('입력값이 그대로 반환되는지 테스트', async () => {
    jest.spyOn(Console, 'readLineAsync').mockResolvedValue('tobi ,wooki, podol');

    const result = await inputCarNames();
    expect(result).toBe('tobi ,wooki, podol');
  });
});
