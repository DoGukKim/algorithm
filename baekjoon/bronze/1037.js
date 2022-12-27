// Title: 약수
// Time: O(n)
// Space: O(1)
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
input.shift();
input = input[0];
console.log(Math.min(...input) * Math.max(...input));
