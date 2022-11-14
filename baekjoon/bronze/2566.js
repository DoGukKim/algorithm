// Title: 최댓값
// Time: O(1)
// Space: O(1)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input.map((i) => i.split(" ").map((n) => Number(n)));
let max = -Infinity;
let pos = "";

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (max < n[i][j]) {
      max = n[i][j];
      pos = i + 1 + " " + (j + 1);
    }
  }
}

console.log(max);
console.log(pos);
