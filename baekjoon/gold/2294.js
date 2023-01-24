// Title: 동전 2
// Time: O(n*k)
// Space: O(k)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.shift().split(" ").map(Number);
input = input.map(Number);
const dp = Array.from({ length: 10001 }, () => 2 ** 31);
dp[0] = 0;

for (let i = 0; i < n; i++) {
  for (let j = input[i]; j <= 10000; j++) {
    dp[j] = Math.min(dp[j], dp[j - input[i]] + 1);
  }
}

console.log(dp[k] === 2 ** 31 ? "-1" : dp[k]);
