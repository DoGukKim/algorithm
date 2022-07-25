// Time: O(n)
// Space: O(1)
const main = (numbers) => {
  let sum = 0;
  let min = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      sum += numbers[i];
      if (min > numbers[i]) min = numbers[i];
    }
  }

  return [sum, min];
};

console.log(main([12, 77, 38, 41, 53, 92, 85]));

// 재귀식 풀이
// Time: O(n)
// Space: O(n)
const recursion = (numbers, idx = 0, sum = 0, min = Infinity) => {
  if (idx === numbers.length) return [sum, min];

  if (numbers[idx] % 2 === 1) {
    sum += numbers[idx];
    if (min > numbers[idx]) min = numbers[idx];
  }

  return recursion(numbers, idx + 1, sum, min);
};

console.log(recursion([12, 77, 38, 41, 53, 92, 85]));

// Time: O(n^2)
// Space: O(n)
const recursion2 = (numbers, sum = 0, min = Infinity) => {
  if (numbers.length === 0) return [sum, min];

  if (numbers[0] % 2 === 1) {
    sum += numbers[0];
    if (min > numbers[0]) min = numbers[0];
  }

  return recursion2(numbers.slice(1), sum, min);
};

console.log(recursion2([12, 77, 38, 41, 53, 92, 85]));
