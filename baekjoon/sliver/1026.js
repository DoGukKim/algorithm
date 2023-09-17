// title: 보물
// time: O(n log n)
// space: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

A.sort((a, b) => b - a);
B.sort((a, b) => a - b);

let result = 0;
for (let i = 0; i < n; i++) {
  result += A[i] * B[i];
}

console.log(result);
