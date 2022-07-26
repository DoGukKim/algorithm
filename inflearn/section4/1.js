// Time: O(n)
// Space: O(1)
const main = (numbers) => {
  let result = 0;
  let max = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let sum = 0;

    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }

    if (sum >= max) {
      max = sum;
      result = numbers[i];
    }
  }

  return result;
};

console.log(main([128, 460, 603, 40, 521, 137, 123]));

// 재귀식 풀이
// Time: O(n)
// Space: O(n)
const recursion = (
  numbers,
  index = 0,
  sum = 0,
  max = -Infinity,
  result = 0
) => {
  if (index === numbers.length) return result;

  let number = numbers[index];
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  if (sum >= max) {
    max = sum;
    result = numbers[index];
  }

  return recursion(numbers, index + 1, (sum = 0), max, result);
};

console.log(recursion([128, 460, 603, 40, 521, 137, 123]));
