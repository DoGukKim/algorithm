// Title: 최장증가수열
// TIme: O(1)
// Space: O(1)
function main(_, m) {
  const dp = Array.from({ length: 1001 }, () => 0);
  dp[0] = 1;
  let max = 0;

  for (let i = 1; i <= 1000; i++) {
    max = 0;

    for (let j = i - 1; j >= 0; j--) {
      if (m[j] < m[i] && dp[j] > max) max = dp[j];
    }

    dp[i] = max + 1;
  }

  console.log(Math.max(...dp));
}

main(8, [5, 3, 7, 8, 6, 2, 9, 4]);
