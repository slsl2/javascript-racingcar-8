import { Random } from '@woowacourse/mission-utils';

export function canMove() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  if (randomNumber >= 4) {
    return true;
  }
  return false;
}
