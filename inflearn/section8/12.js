// Title: 조합의 경우수
// 방법 1
// Time: O(2^n)
// Space: O(min(n,r))
function main(n, r) {
  if (n === r) return 1;
  if (r === 1) return n;
  return main(n - 1, r - 1) + main(n - 1, r);
}

console.log(main(5, 3));

// 방법 2
// Time: O(nr)
// Space: O(min(n,r))
function main(n, r, memo = {}) {
  if (memo[[n, r]]) return memo[[n, r]];
  if (n === r) return 1;
  if (r === 1) return n;
  memo[[n, r]] = main(n - 1, r - 1, memo) + main(n - 1, r, memo);
  return memo[[n, r]];
}

console.log(main(33, 19));

// 방법 3
// Time: O(nr)
// Space: O(n)
function main(n, r) {
  const dp = Array.from({ length: 34 }, () => Array(34).fill(0));

  dp[1][1] = 1;
  dp[2][1] = 2;
  dp[2][2] = 1;
  dp[3][1] = 3;
  dp[3][2] = 3;
  dp[3][3] = 1;

  for (let i = 4; i <= 33; i++) {
    for (let j = 1; j <= i; j++) {
      if (dp[n][r] !== 0) break;
      if (j === 1) {
        dp[i][j] = i;
        continue;
      }

      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }

  console.log(dp[n][r]);
}

main(33, 19);
