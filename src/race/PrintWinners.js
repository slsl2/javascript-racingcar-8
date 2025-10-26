import { Console } from '@woowacourse/mission-utils';

export function printWinners(cars) {
  const maxPos = Math.max(...cars.map(({ pos }) => pos));
  const winners = cars.filter(({ pos }) => pos === maxPos).map(({ name }) => name);
  Console.print(`최종 우승자 : ${winners.join(', ')}`);
}
