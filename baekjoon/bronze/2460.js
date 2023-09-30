// title: 지능형 기차
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

let result = Number.MIN_SAFE_INTEGER;
let current = 0;
for (let i = 0; i < 10; i++) {
  const [off, on] = input[i];

  current -= off;
  if (current < 0) current = 0;

  current += on;
  if (current > 10000) current = 10000;

  result = Math.max(result, current);
}

console.log(result);
