// Time: O(n)
// Space: O(n)
const main = (n, memo = {}) => {
  if (n === 1) return 1;
  if (!(n in memo)) memo[n] = main(n - main(main(n - 1)));
  return memo[n];
};

console.log(main(6));
