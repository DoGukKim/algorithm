// Title: 연산자 끼워넣기
// Time: O(4^n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));
const numbers = input[0];
const operator = input[1];
const calcMap = {
  0: (a, b) => a + b,
  1: (a, b) => a - b,
  2: (a, b) => a * b,
  3: (a, b) => {
    if (a < 0) {
      return -Math.floor(-a / b);
    }

    return Math.floor(a / b);
  },
};

let result = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];

dfs(numbers[0], 1);
console.log(`${result[0]}\n${result[1]}`);

function dfs(num, level) {
  if (level === n) {
    if (result[0] < num) result[0] = num;
    if (result[1] > num) result[1] = num;
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (!operator[i]) continue;

    operator[i]--;
    dfs(calcMap[i](num, numbers[level]), level + 1);
    operator[i]++;
  }
}
