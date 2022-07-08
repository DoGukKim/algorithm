// TimeComplexity O(n)
// SpaceComplexity O(1)
const main = (day, numbers) => {
  let result = 0;

  for (let i = 0; i < numbers.length; i += 1)
    if (numbers[i] % 10 === day) result += 1;

  return result;
};

console.log(main(3, [25, 23, 11, 47, 53, 17, 33]));

// Recursive
// TimeComplexity O(n)
// SpaceComplexity O(1)
const recursion = (day, numbers, index = 0, result = 0) => {
  if (index === numbers.length) return result;

  if (numbers[index] % 10 === day) result += 1;

  return recursion(day, numbers, (index += 1), result);
};

console.log(recursion(3, [25, 23, 11, 47, 53, 17, 33]));
