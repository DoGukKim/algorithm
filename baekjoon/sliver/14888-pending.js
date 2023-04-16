let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));
const numbers = input[0];
const operator = input[1];
const operatorMap = {
  0: "+",
  1: "-",
  2: "*",
  3: "/",
};

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

dfs(numbers[0], 1);
console.log(max, min);
function dfs(cur, level) {
  if (level === n) {
    if (cur < min) min = cur;
    if (cur > max) max = cur;
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (operator[i] === 0) continue;
    operator[i] -= 1;
    const some = Math.floor(eval(cur + operatorMap[i] + numbers[level]));
    dfs(some, level + 1);
    operator[i] += 1;
  }
}
