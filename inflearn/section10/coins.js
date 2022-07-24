// BruteForce
// TimeComplexity O(2^n)
// SpaceComplexity O(n)

// Memorize
// TimeComplexity O(n)
// SpaceComplexity O(n)
const bestSumCases = (money, coins, memo = {}) => {
  if (money in memo) return memo[money];
  if (money === 0) return [];
  if (money < 0) return null;

  let shortestCombination = null;

  for (let i = 0; i < coins.length; i++) {
    const remainder = money - coins[i];
    const remainderResult = bestSumCases(remainder, coins, memo);
    if (remainderResult !== null) {
      const combinationResult = [...remainderResult, coins[i]];
      if (
        shortestCombination === null ||
        combinationResult.length < shortestCombination.length
      ) {
        shortestCombination = combinationResult;
      }
    }
  }

  memo[money] = shortestCombination;
  return shortestCombination;
};
console.log(bestSumCases(15, [1, 2, 5]));

const main = (m, arr) => {
  if (m === 0) return 1;
  if (m < 0) return 0;

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const remainder = m - arr[i];
    count += main(remainder, arr);
  }

  return count;
};
