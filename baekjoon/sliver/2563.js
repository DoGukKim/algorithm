// Title: 색종이
// Time: O(n)
// Space: O(1)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
const graph = Array.from({ length: 100 }, () => Array(100).fill(0));
let result = 0;

for (let i = 0; i < n; i++) {
  const [c, r] = input[i].split(" ");
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      if (graph[100 - r - 1 - j][c - 1 + k] === 0)
        graph[100 - r - 1 - j][c - 1 + k] = 1;
    }
  }
}

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (graph[i][j] === 1) result++;
  }
}

console.log(result);
