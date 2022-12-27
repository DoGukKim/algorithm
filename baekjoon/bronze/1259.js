// Title: 팰린드롬
// Time: O(n^m)
// Space: O(n)
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input.pop();

let result = "";
let flag = true;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < Math.floor(input[i].length / 2); j++) {
    if (input[i][j] !== input[i][input[i].length - j - 1]) {
      result += "no\n";
      flag = false;
      break;
    }
  }

  if (flag) result += "yes\n";
  flag = true;
}

console.log(result);
