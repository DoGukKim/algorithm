// Title: 쉬운 계단 수
// Time: O(n*10)
// Space: O(n*10)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

input = Number(input);
const dp = Array.from({ length: 101 }, () => Array(10).fill(0));
for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let x = 2; x <= 100; x++) {
  for (let y = 0; y <= 9; y++) {
    if (y === 0) {
      dp[x][y] = dp[x - 1][1] % 1000000000;
      continue;
    }

    if (y === 9) {
      dp[x][y] = dp[x - 1][8] % 1000000000;
      continue;
    }

    dp[x][y] = (dp[x - 1][y - 1] + dp[x - 1][y + 1]) % 1000000000;
  }
}

console.log(dp[input].reduce((p, c) => p + c, 0) % 1000000000);
