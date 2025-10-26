import { Console, Random } from "@woowacourse/mission-utils";

// 에러 발생시키는 함수
function fail(msg) {
  throw new Error(`[ERROR] ${msg}`);
}

// 이름 입력 받는 함수
async function inputCarNames() {
  const namesInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  return namesInput;
}

// 이동 횟수 입력 받는 함수
async function inputTotalRound() {
  const totalRoundInput = await Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );
  return totalRoundInput;
}

// 이름 유효성 검사
function validateCarName(name) {
  if (name < 5) {
    fail("자동차 이름은 5자 이하만 가능합니다.");
  }
}

// 무작위 값 구해서 4 이상일 경우 전진 (true)
function canMove() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  if (randomNumber >= 4) {
    return true;
  }
  return false;
}

// 이동 횟수 입력값 유효성 검사
function validateTotalRound(totalRoundInput) {
  if (totalRoundInput === "") {
    fail("이동 횟수가 입력되지 않았습니다.");
  }
  const totalRound = Number(totalRoundInput);
  if (Number.isNaN(totalRound)) {
    fail("이동 횟수는 숫자만 입력 가능합니다.");
  }
  if (!Number.isInteger(totalRound) || totalRound <= 0) {
    fail("이동 횟수는 양수인 정수만 입력 가능합니다.");
  }
  return totalRound;
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
