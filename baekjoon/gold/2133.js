// Title: 타일 채우기
// Time: O(n*m)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
const n = Number(input);
const dp = Array.from({ length: 31 }, () => 0);
dp[0] = 1;
dp[2] = 3;

for (let i = 4; i <= n; i += 2) {
  dp[i] = dp[i - 2] * 3;
  for (let j = i - 4; j >= 0; j -= 2) {
    dp[i] = dp[i] + dp[j] * 2;
  }
}

console.log(dp[n]);
