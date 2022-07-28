// Time: O(n^m*m)
// Space: O(m)
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let i = 0; i < numbers.length; i++) {
    const remainderResult = howSum(targetSum - numbers[i], numbers);
    if (remainderResult !== null) {
      return [...remainderResult, numbers[i]];
    }
  }

  return null;
};

console.log(howSum(7, [5, 3, 4, 7])); // -> [4,3]

// Time: O(n*m^2)
// Space: O(m^2)
const howSumM = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let i = 0; i < numbers.length; i++) {
    const remainderResult = howSumM(targetSum - numbers[i], numbers);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, numbers[i]];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(howSumM(7, [5, 3, 4, 7])); // -> [4,3]
