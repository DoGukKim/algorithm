// Title: 계단오르기
// 방법 1
// Time: O(n)
// Space: O(1)
function main(n) {
  const dp = Array.from({ length: 46 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp[n]);
}

main(7);

// 방법 2
// Time: O(n)
// Space: O(n)
function main(n, memo = Array.from({ length: 46 }, () => 0)) {
  if (memo[n]) return memo[n];
  if (n === 0) return 1;
  if (n < 0) return 0;
  memo[n] = main(n - 1, memo) + main(n - 2, memo);
  return memo[n];
}

console.log(main(45));
