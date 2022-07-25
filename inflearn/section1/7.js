// Time: O(n)
// Space: O(1)
const main = (day, numbers) => {
  let result = 0;

  for (let i = 0; i < numbers.length; i += 1)
    if (numbers[i] % 10 === day) result += 1;

  return result;
};

console.log(main(3, [25, 23, 11, 47, 53, 17, 33]));

// 재귀식 풀이
// Time: O(n)
// Space: O(n)
const recursion = (day, numbers, idx = 0, result = 0) => {
  if (idx === numbers.length) return result;

  if (numbers[idx] % 10 === day) result += 1;

  return recursion(day, numbers, idx + 1, result);
};

console.log(recursion(3, [25, 23, 11, 47, 53, 17, 33]));
