// Title: 카드 구매하기
// Time: O(n^2)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input[0].split(" ").map(Number);

const dp = Array.from({ length: n + 1 }, () => 0);
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j <= n; j++) {
    dp[j] = Math.max(dp[j - (i + 1)] + input[i], dp[j]);
  }
}
console.log(dp[n]);
