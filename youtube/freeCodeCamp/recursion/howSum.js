// TimeComplexity O(n^m*m)
// SpaceComplexity O(m*m)
const howSum = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;

  for (let i = 0; i < numbers.length; i++) {
    const remainder = target - numbers[i];
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, numbers[i]];
    }
  }

  return null;
};
console.log(howSum(7, [5, 3, 4, 7])); // -> [4,3]

// TimeComplexity O(n*m*m)
// SpaceComplexity O(m^2)
const memoHowSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  for (let i = 0; i < numbers.length; i++) {
    const remainder = target - numbers[i];
    const remainderResult = memoHowSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[target] = [...remainderResult, numbers[i]];
      return memo[target];
    }
  }

  memo[target] = null;
  return null;
};
console.log(memoHowSum(300, [7, 14])); // -> [4,3]
