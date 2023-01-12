let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
input = Number(input);
const dp = Array.from({ length: 10001 }, () => 0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for (let i = 4; i <= 1000; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[input] % 10007);
