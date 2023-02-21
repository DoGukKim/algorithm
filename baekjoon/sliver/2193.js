// Title: 이친수
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);

const dp = Array.from({ length: 91 }, () => BigInt(0));
dp[1] = BigInt(1);
dp[2] = BigInt(1);

for (let i = 3; i <= 90; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(dp[input].toString());
