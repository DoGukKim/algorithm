// Title: 수 정렬하기
// Time: O(n log n)
// Space: O(1)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();
input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input);
}
