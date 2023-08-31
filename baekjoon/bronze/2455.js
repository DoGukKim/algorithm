// title: 지능형 기차
// time: O(1)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map((i) => i.split(" ").map(Number));

let result = 0;
let cur = 0;

for (let i = 0; i < 4; i++) {
  const [outP, inP] = input[i];
  cur -= outP;
  cur += inP;

  result = Math.max(result, cur);
}

console.log(result);
