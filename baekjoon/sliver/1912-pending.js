let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input[0].split(" ").map(Number);
const dp = Array.from({ length: n + 1 }, () => 0);

let sum = 0;
for (let i = 0; i <= n; i++) {
  sum += input[i];
  if (dp[0] < sum) dp[0] = Math.max(dp[0], sum);
}

for (let i = 1; i <= n; i++) {
  dp[i] = dp[i - 1] + -input[i - 1];
}

console.log(Math.max(...dp));
