import { beforeEach, describe, test, expect, jest } from '@jest/globals';
import { validateCarName } from '../src/utils/ValidateCarName.js';
import { fail } from '../src/utils/Fail.js';

jest.mock('../src/utils/Fail', () => ({
  fail: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('validateCarName', () => {
  test('5자 초과 시에 fail 호출되는지 테스트', () => {
    validateCarName('teletobi');
    expect(fail).toHaveBeenCalledWith('자동차 이름은 5자 이하만 가능합니다.');
  });

  test('5자 이하일 경우에 fail 호출 안 되는지 테스트', () => {
    validateCarName('tobi');
    expect(fail).not.toHaveBeenCalled();
  });
});
