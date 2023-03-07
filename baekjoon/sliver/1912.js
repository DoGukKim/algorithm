// Title: 연속합
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input[0].split(" ").map(Number);
const dp = Array.from({ length: n }, () => 0);
dp[n - 1] = input[n - 1];
for (let i = n - 2; i >= 0; i--) {
  dp[i] = Math.max(input[i] + dp[i + 1], input[i]);
}
console.log(Math.max(...dp));

// 시간 초과
// const dp = Array.from({ length: n }, () => 0);
// for (let i = 0; i < n; i++) {
//   dp[i] = input[i];
//   let sum = input[i];
//   for (let j = i + 1; j < n; j++) {
//     sum += input[j];
//     dp[i] = Math.max(dp[i], sum);
//   }
// }
// console.log(Math.max(...dp));
