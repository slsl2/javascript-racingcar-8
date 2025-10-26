import { fail } from './Fail';

export function validateCarName(name) {
  if (name.length > 5) {
    fail('자동차 이름은 5자 이하만 가능합니다.');
  }
}

export function validateTotalRound(totalRoundInput) {
  if (totalRoundInput === '') {
    fail('이동 횟수가 입력되지 않았습니다.');
  }
  const totalRound = Number(totalRoundInput);
  if (Number.isNaN(totalRound)) {
    fail('이동 횟수는 숫자만 입력 가능합니다.');
  }
  if (!Number.isInteger(totalRound) || totalRound <= 0) {
    fail('이동 횟수는 양수인 정수만 입력 가능합니다.');
  }
  return totalRound;
}
