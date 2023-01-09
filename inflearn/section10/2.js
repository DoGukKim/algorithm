// Time: O(n)
// Space: O(1)
function main(n) {
  const dp = Array.from({ length: 47 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp[n + 1]);
}

main(7);

// 이 문제 또한 계단 문제와 마찬가지로 DFS 활용 가능
// 단, 입력 값이 높아지면 오버 플로우 발생할 수 있음
