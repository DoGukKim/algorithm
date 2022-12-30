// Title: 조합의 경우수
// Time: O(2^n)
// Space: O(min(n,r))
function main(n, r) {
  if (n === r || r === 0) return 1;
  return main(n - 1, r - 1) + main(n - 1, r);
}

main(5, 3);

// 방법 2
// Time: O(nr)
// Space: O(min(n,r))
function main(n, r, memo = {}) {
  const key = n + "," + r;
  if (key in memo) return memo[key];
  if (n === r || r === 0) return 1;
  memo[key] = main(n - 1, r - 1, memo) + main(n - 1, r, memo);
  return memo[key];
}

main(33, 19);
