// Title: 계단오르기
// 동적 프로그래밍을 사용하지 않은 경우로 최적화 필요
// Time: O(2^n)
// Space: O(n)
function main(n) {
  let result = 0;
  dfs(0);
  console.log(result);

  function dfs(num) {
    if (num > n) return;
    if (num === n) {
      result++;
      return;
    }

    dfs(num + 1);
    dfs(num + 2);
  }
}

// 방법 1 (DP)
// Time: O(n)
// Space: O(n)
function main(n) {
  const dp = Array.from({ length: 46 }, () => BigInt(0));
  dp[1] = BigInt(1);
  dp[2] = BigInt(2);

  for (let i = 3; i <= 45; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp[n].toString());
}

// 방법 2 (DP)
// Time: O(n)
// Space: O(n)
// 입력 값이 큰 경우 재귀로 해결할 수 없을 수 있다.
function main(n, memo = Array.from({ length: 46 }, () => 0)) {
  if (memo[n]) return memo[n];
  if (n === 0) return 1;
  if (n < 0) return 0;
  memo[n] = main(n - 1, memo) + main(n - 2, memo);
  return memo[n];
}
