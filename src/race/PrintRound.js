import { Console } from '@woowacourse/mission-utils';

export function printRound(roundResult) {
  roundResult.forEach(({ name, pos }) => Console.print(`${name} : ${'-'.repeat(pos)}`));
  Console.print('');
}
