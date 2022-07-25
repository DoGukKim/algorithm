// Time: O(n)
// Space: O(1)
const main = (numbers) => {
  let result = 0;

  for (let i = 1; i < numbers.length; i++)
    if (numbers[i] > numbers[i - 1]) result += 1;

  return result;
};

console.log(main([130, 135, 148, 140, 145, 150, 150, 153]));

// 재귀식 풀이
// Time: O(n)
// Space: O(n)
const recursion = (numbers, idx = 0, result = 0) => {
  if (idx === numbers.length) return result;

  if (numbers[idx] > numbers[idx - 1]) result += 1;

  return recursion(numbers, idx + 1, result);
};

console.log(recursion([130, 135, 148, 140, 145, 150, 150, 153]));
