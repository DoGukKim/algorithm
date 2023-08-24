// title: 줄번호
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let result = "";
for (let i = 1; i <= n; i++) {
  result += `${i}. ${input[i]}\n`;
}
console.log(result);
