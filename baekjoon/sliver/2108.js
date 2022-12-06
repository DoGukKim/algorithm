// Title: 통계학
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = input.map(Number);
const n = input.shift();
input.sort((a, b) => a - b);

const mode = new Map();
let max = -Infinity;
for (let i = 0; i < input.length; i++) {
  mode.set(input[i], (mode.get(input[i]) || 0) + 1);
  if (max < mode.get(input[i])) max = mode.get(input[i]);
}

const modes = [];
for (const [k, v] of mode) {
  if (v === max) modes.push(k);
}

console.log(parseInt(Math.round(input.reduce((a, c) => a + c, 0) / n)));
console.log(input[Math.floor(input.length / 2)]);
console.log(modes.length > 1 ? modes[1] : modes[0]);
console.log(Math.max(...input) - Math.min(...input));
