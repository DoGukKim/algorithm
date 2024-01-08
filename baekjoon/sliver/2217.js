// title: 로프
// time: O(n log n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

let result = input[0];
for (let i = 1; i < input.length; i++) {
  const curWeight = input[i] * (i + 1);
  result = Math.max(result, curWeight);
}
console.log(result);
