// title: 플러그
// time: O(n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map(Number);
const n = input.shift();
const sum = input.reduce((pre, cur) => pre + cur, 0);

console.log(sum - (n - 1));
