// Title: 최솟값 구하기
// 방법 1
// Time: O(n)
// Space: O(1)
// Input: 5 3 7 11 2 15 17 (n = 7)
function main(numbers) {
  let min = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }

  return min;
}

// 방법 2
// Time: O(n^2)
// Space: O(n)
function main(numbers) {
  if (numbers.length === 1) return numbers[0];
  const min = main(numbers.slice(1));
  return numbers[0] < min ? numbers[0] : min; // or Math.min(min, numbers[0])
}

console.log(main([5, 3, 7, 11, 2, 15, 17])); // -> 2
