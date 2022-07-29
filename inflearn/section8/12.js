// Time: O(2^n+r)
// Space: O(n+r)
const main = (n, r) => {
  if (n === r || r === 0) return 1;
  return main(n - 1, r - 1) + main(n - 1, r);
};

console.log(main(5, 3));

// Time: O(n*r)
// Space: O(n*r)
const memo = (n, r, memo = {}) => {
  const key = n + "," + r;
  if (key in memo) return memo[key];
  if (n === r || r === 0) return 1;
  memo[key] = memo(n - 1, r - 1, memo) + memo(n - 1, r, memo);
  return memo[key];
};

console.log(memo(33, 19));
