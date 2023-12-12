// title: 알바생 강호
// time: O(n log n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map(Number);

const n = input.shift();
input.sort((a, b) => b - a);

let result = 0;
for (let i = 0; i < n; i++) {
  const tip = input[i] - (i + 1 - 1);
  if (tip > 0) result += tip;
}
console.log(result);
