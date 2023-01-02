// 동전교환(냅색)
// 방법1
// Time: O(n*m)
// Space: O(m)
function main(n, c, m) {
  const dp = Array.from({ length: m + 1 }, () => 100);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = c[i]; j <= m; j++) {
      dp[j] = Math.min(dp[j], dp[j - c[i]] + 1);
    }
  }

  console.log(dp[m]);
}

// 방법2
// Time: O(n*m)
// Space: O(m)
function main(n, c, m) {
  const memo = {};

  function dfs(t) {
    if (memo[t]) return memo[t];
    if (t === 0) return 0;

    for (let i = 0; i < n; i++) {
      if (t - c[i] < 0) continue;
      const remain = dfs(t - c[i]) + 1;
      if (t in memo) memo[t] = Math.min(memo[t], remain);
      if (!(t in memo)) memo[t] = remain;
    }

    return memo[t];
  }

  dfs(m);
  console.log(memo[m]);
}

main(4, [1, 2, 5, 25], 100);
