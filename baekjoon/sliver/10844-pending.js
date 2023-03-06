let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

input = Number(input);

const dp = Array.from({ length: 101 }, () => 0);
dp[1] = 9;
dp[2] = 17;

for (let i = 3; i <= 100; i++) {
  dp[i] = (dp[1] * input - 1) % 1000000000;
}

console.log(dp[3]);
