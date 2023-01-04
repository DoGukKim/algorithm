// Title: 1, 2, 3 더하기
// Time: O(t*n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const t = input.shift();
input = input.map(Number);

// 방법1
let result = "";
for (let i = 0; i < t; i++) {
  const n = input[i];
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let j = 4; j <= n; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }
  result += `${dp[n]}\n`;
}

console.log(result);

// 방법2
// let result = "";
// for (let i = 0; i < t; i++) {
//   const n = input[i];
//   result += `${dfs(n)}\n`;
// }

// console.log(result);

// function dfs(n, memo = {}) {
//   if (memo[n]) return memo[n];
//   if (n === 0) return 1;

//   for (let i = 1; i <= 3; i++) {
//     if (n - i < 0) continue;
//     const m = dfs(n - i, memo);
//     memo[n] = (memo[n] || 0) + m;
//   }

//   return memo[n];
// }
