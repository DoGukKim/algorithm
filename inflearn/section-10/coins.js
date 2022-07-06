// BruteForce
// TimeComplexity O(2^n)
// SpaceComplexity O(n)

// Memorize
// TimeComplexity O(n)
// SpaceComplexity O(n)
const bestSumCases = (money, coins) => {
  if (money === 0) return [];
  if (money < 0) return null;

  let shortestCombination = null;

  for (let i = 0; i < coins.length; i++) {
    const remainder = money - coins[i];
    const remainderResult = bestSumCases(remainder, coins);
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

  return shortestCombination;
};
console.log(bestSumCases(15, [1, 2, 5]));
