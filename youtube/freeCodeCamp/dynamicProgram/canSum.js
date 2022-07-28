// m: targetSum, n: numbers
// Time: O(n^m)
// Space: O(m)
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let i = 0; i < numbers.length; i++)
    if (canSum(targetSum - numbers[i], numbers) === true) return true;

  return false;
};

console.log(canSum(7, [5, 3, 4, 7]));

// Time: O(n*m)
// Space: O(m)
const canSumM = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let i = 0; i < numbers.length; i++)
    if (canSumM(targetSum - numbers[i], numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }

  memo[targetSum] = false;
  return false;
};

console.log(canSumM(7, [5, 3, 4, 7]));
// console.log(canSum(8, [2, 3, 5]));
