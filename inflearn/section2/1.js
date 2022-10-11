// Title: 큰 수 출력하기
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: 7 3 9 5 6 12
function main(numbers) {
  const result = [numbers[0]];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] < numbers[i]) {
      result.push(numbers[i]);
    }
  }

  return result;
}

console.log(main([7, 3, 9, 5, 6, 12]));
