// TimeComplexity O(1)
// SpaceComplexity O(1)
const main = (a, b, c) => {
  let result = Infinity;
  if (result > a) result = a;
  if (result > b) result = b;
  if (result > c) result = c;

  return result;
};
console.log(main(6, 5, 11));

// TimeComplexity O(n)
// SpaceComplexity O(1)
const main2 = (numbers) => {
  let result = Infinity;

  for (let i = 0; i < numbers.length; i++)
    if (result > numbers[i]) result = numbers[i];

  return result;
};
console.log(main2([6, 5, 13, 11]));

// Recursive Solution
// TimeComplexity O(n)
// SpaceComplexity O(n)
const recursive = (numbers, index = 0) => {
  if (index === numbers.length - 1) return numbers[index];

  const result = recursive(numbers, (index += 1));
  if (numbers[index] < result) return numbers[index];

  return result;
};
console.log(recursive([6, 5, 13, 11]));
