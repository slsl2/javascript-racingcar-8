import { validateCarName } from '../utils/ValidateCarName';

export function splitCarNames(namesInput) {
  const names = namesInput
    .split(',')
    .map((name) => name.trim())
    .filter((name) => name !== '');
  names.forEach(validateCarName);
  return names;
}
