// TimeComplexity O(n^m*m)
// SpaceComplexity O(m^2)
const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let i = 0; i < numbers.length; i++) {
    const remainder = targetSum - numbers[i];
    const remainderCombination = bestSum(remainder, numbers);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, numbers[i]];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
};
console.log(bestSum(8, [2, 3, 5]));

// TimeComplexity O(m^2*n)
// SpaceComplexity O(m^2)
const memoBestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let i = 0; i < numbers.length; i++) {
    const remainder = targetSum - numbers[i];
    const remainderCombination = memoBestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, numbers[i]];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};
console.log(memoBestSum(100, [1, 2, 5, 25]));
