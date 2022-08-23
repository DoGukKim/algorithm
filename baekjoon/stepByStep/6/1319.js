const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();

// Time: O(n^2)
// Space: O(n)
let result = input.length;
let stack = [];

for (let i = 0; i < input.length; i++) {
  stack = [];

  for (let j = 0; j < input[i].length; j++) {
    if (
      stack[stack.length - 1] !== input[i][j] &&
      stack.includes(input[i][j])
    ) {
      result--;
      break;
    }
    stack.push(input[i][j]);
  }
}

console.log(result);
