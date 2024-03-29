// Title: 설탕 배달
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);

const dp = Array.from({ length: 5001 }, () => 0);
dp[3] = 1;
dp[5] = 1;

for (let i = 6; i <= 5001; i++) {
  if (dp[i - 3]) dp[i] = dp[i - 3] + 1;
  if (dp[i - 5]) dp[i] = dp[i] ? Math.min(dp[i - 5] + 1, dp[i]) : dp[i - 5] + 1;
}

console.log(dp[input] === 0 ? "-1" : dp[input]);
