// Title: 동전교환
// 빙법 1
// m: targetSum, n: numbers
// Time: O(n^m^2)
// Space: O(m^2)
const main = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let i = 0; i < numbers.length; i++) {
    const remainderCombination = main(targetSum - numbers[i], numbers);

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

console.log(main(15, [1, 2, 5]));
