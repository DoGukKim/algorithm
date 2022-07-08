// TimeComplexity O(n)
// SpaceComplexity O(1)
const main = (numbers) => {
  let result = 0;
  let acc = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === 1) acc += 1;
    else acc = 0;
    result += acc;
  }

  return result;
};

console.log(main([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

// Recursive
// TimeComplexity O(n)
// SpaceComplexity O(1)
const recursion = (numbers, index = 0, acc = 0, result = 0) => {
  if (index === numbers.length) return result;

  if (numbers[index] === 1) acc += 1;
  else acc = 0;
  result += acc;

  return recursion(numbers, (index += 1), acc, result);
};

console.log(recursion([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
