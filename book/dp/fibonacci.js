// 최적화 전
// Time: O(2^n)
// Space: O(n)
const main = (n) => {
  if (n <= 2) return 1;
  return main(n - 1) + main(n - 2);
};

console.log(main(6)); // -> 8

// 최적화 후
// Time: O(n)
// Space: O(n)
const main2 = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = main(n - 1, memo) + main(n - 2, memo);
  return memo[n];
};

console.log(main(6));

// { '3': 2 } 3번째 수열의 값 저장
// { '3': 2, '4': 3 } 4번째 수열의 값 저장
// { '3': 2, '4': 3, '5': 5 } 5번째 수열의 값 저장
// -> 8

// 상향식
// Time: O(n)
// Space: O(n)
function main(n) {
  const dp = Array.from({ length: n }, () => 0);

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  console.log(dp[n - 1]);
}

main(6);
