// Title: 수 정렬하기2
// Time: O(n log n)
// Space: O(n)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();
input.sort((a, b) => a - b);

let result = "";
for (let i = 0; i < input.length; i++) {
  result += `${input[i]}\n`;
}

console.log(result);
