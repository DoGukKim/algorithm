// Time: O(n*m)
// Space: O(n+m)
const main = (r, c, memo = {}) => {
  const pos = r + "," + c;
  if (pos in memo) return memo[pos];
  if (r === 1 && c === 1) return 1;
  if (r === 0 || c === 0) return 0;

  memo[pos] = main(r - 1, c, memo) + main(r, c - 1, memo);
  return memo[pos];
};

console.log(main(3, 3));
