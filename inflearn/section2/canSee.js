// TimeComplexity O(n)
// SpaceComplexity O(1)
const main = (numbers) => {
  let result = 0;

  for (let i = 1; i < numbers.length; i++)
    if (numbers[i] > numbers[i - 1]) result += 1;

  return result;
};

console.log(main([130, 135, 148, 140, 145, 150, 150, 153]));

// Recursive
// TimeComplexity O(n)
// SpaceComplexity O(1)
const recursion = (numbers, index = 0, result = 0) => {
  if (index === numbers.length) return result;
  if (numbers[index] > numbers[index - 1]) result += 1;
  return recursion(numbers, (index += 1), result);
};

console.log(recursion([130, 135, 148, 140, 145, 150, 150, 153]));
