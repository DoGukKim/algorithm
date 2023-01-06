// Title: 다리 놓기
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const t = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));

// 방법1
// Time: O(t*mn)
// Space: O(t)
let result = "";
for (let i = 0; i < t; i++) {
  const [n, m] = input[i];
  result += `${getNumberOfCase(m, n)[m][n]}\n`;
}
console.log(result);

function getNumberOfCase(m, n) {
  const dp = Array.from({ length: 30 }, () =>
    Array(30)
      .fill(0)
      .map((_, i) => (i === 0 ? 1 : 0))
  );

  dp[1][1] = 1;
  dp[2][1] = 2;
  dp[2][2] = 1;

  for (let i = 3; i <= 29; i++) {
    for (let j = 1; j <= i; j++) {
      if (dp[m][n] !== 0) break;
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }

  return dp;
}

// 방법2
// Time: O(t*mn)
// Space: O(t*m)
// let result = "";
// for (let i = 0; i < t; i++) {
//   const [n, m] = input[i];
//   result += `${dfs(m, n)}\n`;
// }
// console.log(result);

// function dfs(m, n, memo = {}) {
//   const mn = m + "," + n;
//   if (memo[mn]) return memo[mn];
//   if (m === n) return 1;
//   if (n === 1) return m;
//   memo[mn] = dfs(m - 1, n - 1, memo) + dfs(m - 1, n, memo);
//   return memo[mn];
// }
