// Title: 최솟값 구하기
// 방법 1
// Time: O(1)
// Space: O(1)
function main(numbers) {
  let min = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }

  console.log(min);
}

// 방법 2
// Time: O(1)
// Space: O(1)
function main(numbers) {
  console.log(Math.min(...numbers));
}

// 방법 3
// Time: O(1)
// Space: O(n)
function main(numbers) {
  if (numbers.length === 1) return numbers[0];
  const min = main(numbers.slice(1));
  return numbers[0] < min ? numbers[0] : min; // or Math.min(min, numbers[0])
}

main([5, 3, 7, 11, 2, 15, 17]);
