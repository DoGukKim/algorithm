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

  for (let i = 0; i < numbers.length; i += 1)
    if (result > numbers[i]) result = numbers[i];

  return result;
};
console.log(main2([6, 5, 13, 11]));

// Recursive Solution
// TimeComplexity O(n)
// SpaceComplexity O(n)
const recursion = (numbers, index = 0, min = numbers[0]) => {
  if (index === numbers.length) return min;

  if (min > numbers[index]) min = numbers[index];

  return recursion(numbers, index + 1, min);
};

console.log(recursion([5, 3, 7, 11, 2, 15, 17]));
