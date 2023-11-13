// title: 등수 매기기
// time: O(n log n)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
input = input.map(Number).sort((a, b) => a - b);
const rank = Array.from({ length: n }, (_, idx) => idx + 1);

let result = 0;
for (let i = 0; i < n; i++) {
  result += Math.abs(rank[i] - input[i]);
}

console.log(result);
