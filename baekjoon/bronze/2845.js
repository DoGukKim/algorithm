// Title: 파티가 끝나고 난 뒤
// Time: O(1)
// Space: O(1)
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input[0];

let result = "";
for (let i = 0; i < input[1].length; i++) {
  result += `${input[1][i] - n * m} `;
}

console.log(result);
