// Title: 01타일
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);

const dp = Array.from({ length: 1000001 }, () => 0);
dp[1] = 1;
dp[2] = 2;
for (let i = 3; i <= 1000000; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}
console.log(dp[input].toString());
