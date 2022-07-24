// TimeComplexity O(n)
// SpaceComplexity O(n)
const main = (numbers) => {
  let result = [numbers[0]];

  for (let i = 1; i < numbers.length; i += 1)
    if (numbers[i] > numbers[i - 1]) result.push(numbers[i]);

  return result;
};

console.log(main([7, 3, 9, 5, 6, 12]));

// Recursive
// TimeComplexity O(n)
// SpaceComplexity O(n)
const recursion = (numbers, index = 0, result = [numbers[0]]) => {
  if (index === numbers.length) return result;

  if (numbers[index] > numbers[index - 1]) result.push(numbers[index]);

  return recursion(numbers, (index += 1), result);
};

console.log(recursion([7, 3, 9, 5, 6, 12]));
