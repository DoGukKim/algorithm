// Title: 2 * n 타일링 2
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);
const dp = Array.from({ length: 1001 }, () => 0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= 1000; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[input]);
