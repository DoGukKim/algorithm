// BruteForce
// TimeComplexity O(2^n)
// SpaceComplexity O(n)

// Memorize
// TimeComplexity O(n)
// SpaceComplexity O(n)
const numberOfCases = (c, memo = {}) => {
  if (c in memo) return memo[c];
  if (c === 0) return 1;
  if (c < 0) return 0;

  let result = 0;
  memo[c] = numberOfCases(c - 1) + numberOfCases(c - 2);
  result += memo[c];

  return result;
};

const otherSolution = (count) => {
  let stairs = Array.from({ length: count }, () => 0);
  stairs[1] = 1;
  stairs[2] = 2;
  for (let i = 3; i <= count; i += 1) {
    stairs[i] = stairs[i - 1] + stairs[i - 2];
  }

  return stairs[count];
};
