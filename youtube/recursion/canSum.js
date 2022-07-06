// TimeComplexity O(n^m)
// SpaceComplexity O(m)
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let i = 0; i < numbers.length; i++) {
    const remainder = targetSum - numbers[i];
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
};
// console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 3]));

// TimeComplexity O(m*n)
// SpaceComplexity O(m)
const memoCanSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let i = 0; i < numbers.length; i++) {
    const remainder = targetSum - numbers[i];
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};
// console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(300, [7, 14]));
