import { canMove } from './CanMove.js';

export function handleOneRound(cars) {
  let roundResult = [];
  for (let i = 0; i < cars.length; i += 1) {
    if (canMove()) {
      cars[i].pos += 1;
    }
    const { name, pos } = cars[i];
    roundResult.push({ name, pos });
  }
  return roundResult;
}
