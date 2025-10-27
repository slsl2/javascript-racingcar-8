import { describe, test, expect, jest } from '@jest/globals';
import { handleRace } from '../src/race/HandleRace.js';
import { handleOneRound } from '../src/race/HandleOneRound.js';
import { printRound } from '../src/race/PrintRound.js';
import { printWinners } from '../src/race/PrintWinners.js';

jest.mock('../src/race/HandleOneRound', () => ({
  handleOneRound: jest.fn().mockReturnValue([{ name: 'tobi', pos: 1 }]),
}));
jest.mock('../src/race/PrintRound', () => ({
  printRound: jest.fn(),
}));
jest.mock('../src/race/PrintWinners', () => ({
  printWinners: jest.fn(),
}));

describe('handleRace', () => {
  test('내부 함수 호출 횟수 및 흐름 테스트', () => {
    const names = ['tobi', 'wooki', 'podol'];
    const totalRound = 3;

    handleRace(names, totalRound);

    expect(handleOneRound).toHaveBeenCalledTimes(3);
    expect(printRound).toHaveBeenCalledTimes(3);

    expect(printWinners).toHaveBeenCalledTimes(1);
  });
});
