// Title: 팩토리얼
// Time: O(n)
// Space: O(n)
function solution(n) {
  const dp = Array.from({ length: 11 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= 10; i++) {
    dp[i] = dp[i - 1] * i;
  }

  for (let i = 10; i >= 0; i--) {
    if (dp[i] <= n) {
      return i;
    }
  }
}
