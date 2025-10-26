import { Console, Random } from "@woowacourse/mission-utils";

// 이름 입력 받는 함수
async function inputCarNames() {
  const NAMES_INPUT = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  return NAMES_INPUT;
}

// 이동 횟수 입력 받는 함수
async function inputTotalRound() {
  const TOTAL_ROUND_INPUT = await Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );
  return TOTAL_ROUND_INPUT;
}

class App {
  async run() {}
}

export default App;
