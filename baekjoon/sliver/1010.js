// Title: 다리 놓기
// Time: O(t*mn)
// Space: O(t*mn)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const t = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));

let result = "";
for (let i = 0; i < t; i++) {
  const [n, m] = input[i];
  result += `${getNumberOfCase(m, n)[m][n]}\n`;
}
console.log(result);

function getNumberOfCase(m, n) {
  const dp = Array.from({ length: 30 }, () => Array(30).fill(0));

  dp[1][1] = 1;
  dp[2][1] = 2;
  dp[2][2] = 1;

  for (let i = 3; i <= 29; i++) {
    for (let j = 1; j <= i; j++) {
      if (dp[m][n] !== 0) break;
      if (j === 1) {
        dp[i][j] = i;
        continue;
      }
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }

  return dp;
}
