// Title: 1로 만들기
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);

const dp = Array.from({ length: input + 1 }, () => 0);
for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}
console.log(dp[input]);
