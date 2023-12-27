// title: 게임을 만든 동준이
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map(Number);

let result = 0;
for (let i = input.length - 2; i >= 1; i--) {
  const next = input[i + 1];
  const cur = input[i];
  if (cur < next) continue;

  if (cur >= next) {
    const dropCount = Math.abs(cur - next) + 1;
    input[i] -= dropCount;
    result += dropCount;
  }
}

console.log(result);
