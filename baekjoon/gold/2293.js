// Title: 동전 1
// Time: O(n*k)
// Space: O(k)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.shift().split(" ").map(Number);
input = input.map(Number);
const dp = Array.from({ length: 10001 }, () => 0);
dp[0] = 1;

for (let i = 0; i < n; i++) {
  for (let j = input[i]; j <= k; j++) {
    dp[j] += dp[j - input[i]];
  }
}

console.log(dp[k]);
