// Title: 검증수
// Time: O(1)
// Space: O(1)
let input = require("fs").readFileSync("./input.txt").toString().trim();
input = input.split(" ").map(Number);

let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum += input[i] ** 2;
}

console.log(sum % 10);
