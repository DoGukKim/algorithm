// Title: 팩토리얼
// 방법 1
// Time: O(n)
// Space: O(n)
const main = (n) => {
  if (n === 1) return 1;
  return n * main(n - 1);
};

console.log(main(5));

// 방법 2
// Time: O(n)
// Space: O(n)
function main(n) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = i * dp[i - 1];
  }

  console.log(dp[n]);
}

main(5);
