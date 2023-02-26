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

// TIme: O(n)
// Space: O(n)
function main(n, numbers) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[n] = 1;

  for (let i = n - 1; i >= 0; i--) {
    let max = 0;

    for (let j = i; j < n; j++) {
      if (numbers[i] < numbers[j] && max < dp[j]) max = dp[j];
    }

    dp[i] = max + 1;
  }

  console.log(dp[0]);
}

// TestCases
// main(5, [2, 1, 3, 4, 5]);
// main(9, [2, 7, 5, 8, 6, 4, 7, 12, 3]);
// main(8, [5, 3, 7, 8, 6, 2, 9, 4]);
