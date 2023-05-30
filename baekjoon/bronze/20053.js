// Title: 최소, 최대
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const t = input[0];
let j = 1;
let result = "";
for (let i = 0; i < t; i++) {
  result += `${Math.min(...input[j + 1])} ${Math.max(...input[j + 1])}\n`;
  j += 2;
}
console.log(result);
