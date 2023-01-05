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

// 10^6은 스텍 사이즈 부족으로 동작하지 않지만, 로직은 맞다.
// function dfs(n, memo = {}) {
//   if (memo[n]) return memo[n];
//   if (n === 1) return 0;
//   memo[n] = Math.min(
//     dfs(n - 1, memo) + 1,
//     n % 2 !== 0 ? Infinity : dfs(n / 2, memo) + 1,
//     n % 3 !== 0 ? Infinity : dfs(n / 3, memo) + 1
//   );
//   return memo[n];
// }
// console.log(dfs(input));
