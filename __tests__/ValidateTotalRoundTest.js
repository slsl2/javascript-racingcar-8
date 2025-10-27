import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { validateTotalRound } from '../src/utils/ValidateTotalRound.js';
import { fail } from '../src/utils/Fail.js';

jest.mock('../src/utils/Fail', () => ({
  fail: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('validateTotalRound', () => {
  test('빈 문자열일 경우 테스트', () => {
    fail.mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateTotalRound('')).toThrow();
    expect(fail).toHaveBeenCalledWith('이동 횟수가 입력되지 않았습니다.');
  });

  test('숫자가 아닐 경우 테스트', () => {
    fail.mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateTotalRound('abc')).toThrow();
    expect(fail).toHaveBeenCalledWith('이동 횟수는 숫자만 입력 가능합니다.');
  });

  test('양수 정수가 아닐 경우 테스트', () => {
    fail.mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateTotalRound('0')).toThrow();
    expect(fail).toHaveBeenCalledWith('이동 횟수는 양수인 정수만 입력 가능합니다.');

    jest.clearAllMocks();
    fail.mockImplementation(() => {
      throw new Error();
    });
    expect(() => validateTotalRound('-1')).toThrow();
    expect(fail).toHaveBeenCalledWith('이동 횟수는 양수인 정수만 입력 가능합니다.');

    jest.clearAllMocks();
    fail.mockImplementation(() => {
      throw new Error();
    });
    expect(() => validateTotalRound('1.5')).toThrow();
    expect(fail).toHaveBeenCalledWith('이동 횟수는 양수인 정수만 입력 가능합니다.');
  });

  test('정상 입력 테스트', () => {
    const result = validateTotalRound('3');
    expect(result).toBe(3);
  });
});
