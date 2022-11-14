// Title: 개수 세기
// Time: O(n)
// Space: O(1)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();
let result = 0;
const n = input.shift().split(" ");

for (let i = 0; i < n.length; i++) {
  if (input[0] === n[i]) result++;
}

console.log(result);
