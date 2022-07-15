// BruteForce
// TimeComplexity O(2^n)
// SpaceComplexity O(n)

// Memorize
// TimeComplexity O(n)
// SpaceComplexity O(n)

const main = (n) => {
  if (n === 0) return 1;
  if (n < 0) return 0;
  return main(n - 1) + main(n - 2) + main(n - 3);
};

console.log(main(3));

const memoMain = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 1;
  if (n < 0) return 0;

  memo[n] = memoMain(n - 1) + memoMain(n - 2) + memoMain(n - 3);

  return memo[n];
};

console.log(memoMain(3));
