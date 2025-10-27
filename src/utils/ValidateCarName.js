import { fail } from './Fail';

export function validateCarName(name) {
  if (name.length > 5) {
    fail('자동차 이름은 5자 이하만 가능합니다.');
  }
}
