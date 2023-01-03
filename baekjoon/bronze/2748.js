// Title: 피보나치 수 2
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const n = Number(input);
const dp = Array.from({ length: 91 }, () => 0);
dp[1] = 1;

for (let i = 2; i <= n; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(dp[n].toString());
