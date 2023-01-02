// 최대점수 구하기
// Time: O(n*m)
// Space: O(m)
function main(n, m, input) {
  const dp = Array.from({ length: m + 1 }, () => 0);

  for (let i = 0; i < n; i++) {
    for (let j = m; j >= input[i][1]; j--) {
      dp[j] = Math.max(dp[j], dp[j - input[i][1]] + input[i][0]);
    }
  }

  console.log(dp[m]);
}
