import { Console, Random } from "@woowacourse/mission-utils";

// 에러 발생시키는 함수
function fail(msg) {
  throw new Error(`[ERROR] ${msg}`);
}

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

// 이름 유효성 검사
function validateCarName(name) {
  if (name < 5) {
    fail("자동차 이름은 5자 이하만 가능합니다.");
  }
}

// 무작위 값 구해서 4 이상일 경우 전진 (true)
function getRandomNumber() {
  const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
  if (RANDOM_NUMBER >= 4) {
    return true;
  }
  return false;
}

class App {
  async run() {
    try {
      inputCarNames();
      inputTotalRound();
    } catch (error) {
      Console.print(
        error.message ||
          "[ERROR] 알 수 없는 오류가 발생했습니다. 다시 시도해 주세요."
      );
      throw error;
    }
  }
}

export default App;
