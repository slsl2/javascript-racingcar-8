import { handleOneRound } from './HandleOneRound';
import { printRound } from './PrintRound';
import { printWinners } from './PrintWinners';

export function handleRace(names, totalRound) {
  const cars = names.map((name) => ({ name, pos: 0 }));
  for (let round = 0; round < totalRound; round += 1) {
    const roundResult = handleOneRound(cars);
    printRound(roundResult);
  }
  printWinners(cars);
}
