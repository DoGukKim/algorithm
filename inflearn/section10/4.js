// 동전교환(냅색)
// 방법 1
// Time: O(n*m)
// Space: O(m)
function main(n, coins, m) {
  const dp = Array.from({ length: m + 1 }, () => 0);

  for (let i = 0; i < n; i++) {
    for (let j = coins[i]; j <= m; j++) {
      dp[j] = dp[j]
        ? Math.min(dp[j], dp[j - coins[i]] + 1)
        : dp[j - coins[i]] + 1;
    }
  }

  console.log(dp[m]);
}
