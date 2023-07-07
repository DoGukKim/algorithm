// title: 피로도
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = input.split(" ").map(Number);
const [A, B, C, M] = input;

// [피로도, 성과]
let result = [0, 0];

for (let i = 0; i < 24; i++) {
  if (result[0] + A > M) {
    // 휴식

    if (result[0] - C < 0) {
      // 피로도가 음수로 되면 0처리
      result[0] = 0;
      continue;
    }

    result[0] -= C;
    continue;
  }

  // 노동
  result[0] += A;
  result[1] += B;
}

console.log(result[1]);
