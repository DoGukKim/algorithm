// TimeComplexity O(n)
// SpaceComplexity O(1)
const main = (numbers) => {
  let sum = 0;
  let min = Infinity;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2) {
      sum += numbers[i];
      if (min > numbers[i]) min = numbers[i];
    }
  }

  return [sum, min];
};

console.log(main([12, 77, 38, 41, 53, 92, 85]));

// Recursive
// TimeComplexity O(n)
// SpaceComplexity O(n)
const recursion = (numbers, index = 0, sum = 0, min = Infinity) => {
  if (index === numbers.length) return [sum, min];

  if (numbers[index] % 2) {
    sum += numbers[index];
    if (min > numbers[index]) min = numbers[index];
  }

  return recursion(numbers, (index += 1), sum, min);
};

console.log(recursion([12, 77, 38, 41, 53, 92, 85]));
