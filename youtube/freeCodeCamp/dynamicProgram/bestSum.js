// Time: O(n^m^2)
// Space: O(m^2)
const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let i = 0; i < numbers.length; i++) {
    const remainderCombination = bestSum(targetSum - numbers[i], numbers);

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

console.log(bestSum(8, [3, 5, 2]));

// Time: O(n*m^2)
// Space: O(m^2)
const bestSumM = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let i = 0; i < numbers.length; i++) {
    const remainderCombination = bestSumM(
      targetSum - numbers[i],
      numbers,
      memo
    );

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

console.log(bestSumM(8, [3, 5, 2]));
