// Title: 계단오르기
// 방법 1
// Time: O(n)
// Space: O(n)
function main(n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n < 0) return 0;
  if (n === 0) return 1;
  memo[n] = main(n - 1, memo) + main(n - 2, memo);
  return memo[n];
}

console.log(main(7));
console.log(main(100)); // 573147844013817200000

// 방법 2
// Time: O(n)
// Space: O(n)
function main(n) {
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  console.log(dy[n]);
}

main(7);
main(100);
