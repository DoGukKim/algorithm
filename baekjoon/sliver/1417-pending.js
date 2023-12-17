let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map(Number);
const n = input[0];
const sortedArr = [input[1], ...input.slice(2).sort((a, b) => b - a)];
const max = sortedArr[1];
let result = 0;

while (sortedArr[0] < max) {
  for (let i = 1; i < n; i++) {
    sortedArr[i] -= 1;
    sortedArr[0] += 1;
    result++;
    if (sortedArr[0] === max) break;
  }
}

console.log(result);
