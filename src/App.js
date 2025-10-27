import { Console } from '@woowacourse/mission-utils';
import { inputCarNames } from './input/InputCarNames.js';
import { inputTotalRound } from './input/InputTotalRound.js';
import { splitCarNames } from './input/SplitCarNames.js';
import { validateTotalRound } from './utils/ValidateTotalRound.js';
import { handleRace } from './race/HandleRace.js';

class App {
  async run() {
    try {
      const namesInput = await inputCarNames();
      const totalRoundInput = await inputTotalRound();
      const names = splitCarNames(namesInput);
      const totalRound = validateTotalRound(totalRoundInput);
      Console.print('\n실행 결과');
      handleRace(names, totalRound);
    } catch (error) {
      Console.print(error.message || '[ERROR] 알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.');
      throw error;
    }
  }
}

export default App;
