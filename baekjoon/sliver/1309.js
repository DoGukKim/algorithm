// Title: 동물원
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);

const dp = Array.from({ length: 100001 }, () => Array(3).fill(0));
dp[1][0] = 1;
dp[1][1] = 1;
dp[1][2] = 1;
for (let i = 2; i <= 100000; i++) {
  dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
}
console.log(dp[input][0] + dp[input][1] + dp[input][2]);
