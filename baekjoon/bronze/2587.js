// Title: 대표값2
// Time: O(n log n)
// Space: O(1)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(input.map(Number).reduce((a, b) => a + b, 0) / input.length);
console.log(input.sort((a, b) => a - b)[Math.floor(input.length / 2)]);
