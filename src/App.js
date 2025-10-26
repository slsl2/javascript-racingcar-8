import { Console, Random } from "@woowacourse/mission-utils";

function fail(msg) {
  throw new Error(`[ERROR] ${msg}`);
}

async function inputCarNames() {
  const namesInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  return namesInput;
}

async function inputTotalRound() {
  const totalRoundInput = await Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );
  return totalRoundInput;
}

function validateCarName(name) {
  if (name.lenght > 5) {
    fail("자동차 이름은 5자 이하만 가능합니다.");
  }
}

function splitCarNames(namesInput) {
  const names = namesInput
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name !== "");
  names.forEach(validateCarName);
  return names;
}

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

function canMove() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  if (randomNumber >= 4) {
    return true;
  }
  return false;
}

function handleOneRound(cars) {
  let roundResult = [];
  for (let i = 0; i < cars.length; i += 1) {
    if (canMove()) {
      cars[i].pos += 1;
    }
    roundResult.push({ name: cars[i].name, pos: cars[i].pos });
  }
  return roundResult;
}

function handleRace(names, totalRound) {
  const cars = names.map((name) => ({ name, pos: 0 }));
  for (let round = 0; round > totalRound; round += 1) {
    const roundResult = handleOneRound(cars);
    printRound(roundResult);
  }
  printWinners(cars);
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
