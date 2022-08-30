// 두 개 뽑아서 더하기
// Time: O(n^2)
// Space: O(n)
const main = (numbers) => {
  numbers.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(result)];
};

console.log(main([2, 1, 3, 4, 1]));
console.log(main([5, 0, 2, 7]));
