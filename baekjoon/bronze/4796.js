// title: 캠핑
// time: O(n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const t = input.length - 1;
let result = "";

for (let i = 0; i < t; i++) {
  const [L, P, V] = input[i].split(" ").map(Number);
  const rest = V % P;

  result += `Case ${i + 1}: ${Math.floor(V / P) * L + (rest < L ? rest : L)}\n`;
}

console.log(result);
