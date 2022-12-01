// Title: 커트 라인
// Time: O(n log n)
// Space: O(1)
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [_, k] = input.shift().split(" ").map(Number);
console.log(input[0].split(" ").sort((a, b) => b - a)[k - 1]);
