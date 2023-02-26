// Title: 돌다리 건너기
// Time: O(n)
// Space: O(n)
function main(n) {
  const dp = Array.from({ length: 47 }, () => BigInt(0));
  dp[1] = BigInt(1);
  dp[2] = BigInt(2);

  for (let i = 3; i <= n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp[n + 1].toString());
}
