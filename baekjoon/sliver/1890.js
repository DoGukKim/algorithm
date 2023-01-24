// Title: 점프
// Time: O(n^2)
// Space: O(n^2)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));
const dp = Array.from({ length: n }, () => Array(n).fill(BigInt(0)));
dp[0][0] = BigInt(1);
for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    if (dp[x][y] === 0 || (x === n - 1 && y === n - 1)) continue;
    const nx = x + input[x][y];
    const ny = y + input[x][y];
    if (ny < n) dp[x][ny] += BigInt(dp[x][y]);
    if (nx < n) dp[nx][y] += BigInt(dp[x][y]);
  }
}
console.log(dp[n - 1][n - 1].toString());
