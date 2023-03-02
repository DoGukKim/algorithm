// Title: 돌게임(2)
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);

const dp = Array.from({ length: 1001 }, () => 0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 1;
for (let i = 4; i <= 1000; i++) {
  dp[i] = Math.min(dp[i - 1], dp[i - 3]) + 1;
}

console.log(dp[input] % 2 === 0 ? "SK" : "CY");
