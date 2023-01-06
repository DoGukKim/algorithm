// Title: 돌 게임
// Time: O(1)
// Space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);
console.log(input % 2 !== 0 ? "SK" : "CY");
