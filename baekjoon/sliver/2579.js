// Title: 계단 오르기
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
input = input.map(Number);
const dp = Array.from({ length: 301 }, () => 0);
dp[1] = input[1];
dp[2] = input[1] + input[2];
for (let i = 3; i <= 300; i++) {
  dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
}
console.log(dp[n]);
