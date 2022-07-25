// Time: O(n)
// Space: O(1)
const main = (numbers) => {
  let result = Infinity;

  for (let i = 0; i < numbers.length; i += 1)
    if (result > numbers[i]) result = numbers[i];

  return result;
};

console.log(main([6, 5, 13, 11]));

// 재귀식 풀이
// Time: O(n)
// Space: O(n)
const recursion = (numbers, idx = 0, result = numbers[0]) => {
  if (idx === numbers.length) return result;
  if (numbers[idx] < result) result = numbers[idx];
  return recursion(numbers, idx + 1, result);
};

console.log(recursion([6, 3, 1, 4]));

// Time: O(n^2)
// Space: O(n)
const recursion2 = (numbers) => {
  if (numbers.length === 1) return numbers[0];

  const remainder = recursion2(numbers.slice(1));

  return Math.min(numbers[0], remainder);
};

console.log(recursion2([6, 3, 1, 4]));
