import { handleOneRound } from './HandleOneRound.js';
import { printRound } from './PrintRound.js';
import { printWinners } from './PrintWinners.js';

export function handleRace(names, totalRound) {
  const cars = names.map((name) => ({ name, pos: 0 }));
  for (let round = 0; round < totalRound; round += 1) {
    const roundResult = handleOneRound(cars);
    printRound(roundResult);
  }
  printWinners(cars);
}
