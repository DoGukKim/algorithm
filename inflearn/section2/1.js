// Time: O(n)
// Space: O(n)
const main = (numbers) => {
  let result = [numbers[0]];

  for (let i = 1; i < numbers.length; i++)
    if (numbers[i] > numbers[i - 1]) result.push(numbers[i]);

  return result;
};

console.log(main([7, 3, 9, 5, 6, 12]));

// 재귀식 풀이
// Time: O(n)
// Space: O(n)
const recursion = (numbers, idx = 0, result = [numbers[0]]) => {
  if (idx === numbers.length) return result;

  if (numbers[idx] > numbers[idx - 1]) result.push(numbers[idx]);

  return recursion(numbers, idx + 1, result);
};

console.log(recursion([7, 3, 9, 5, 6, 12]));
