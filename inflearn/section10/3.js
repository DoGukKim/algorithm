// Title: 최장증가수열
// 아래와 같은 방법은 입력 값이 커지면 해결 할 수 없다.
// TIme: O(n^n)
// Space: O(n)
function main(n, numbers) {
  let result = 0;
  dfs(0, 0);
  console.log(result);

  function dfs(j, count) {
    for (let i = j; i < n; i++) {
      if (numbers[i] > numbers[i + 1]) continue;
      dfs(i + 1, count + 1);
      if (result < count + 1) result = count + 1;
    }
  }
}

// TIme: O(n^2)
// Space: O(n)
function main(n, numbers) {
  let result = 0;
  const dp = Array.from({ length: n }, () => 0);
  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    let max = 0;

    for (let j = i - 1; j >= 0; j--) {
      if (numbers[j] < numbers[i] && max < dp[j]) max = dp[j];
    }

    dp[i] = max + 1;
    if (result < dp[i]) result = dp[i];
  }

  console.log(result);
}
// TestCases
// main(5, [2, 1, 3, 4, 5]);
// main(9, [2, 7, 5, 8, 6, 4, 7, 12, 3]);
// main(8, [5, 3, 7, 8, 6, 2, 9, 4]);
