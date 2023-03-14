// Title: 큰 수 출력하기
// Time: O(n)
// Space: O(n)
function main(numbers) {
  const result = [numbers[0]];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] < numbers[i]) result.push(numbers[i]);
  }

  console.log(result);
}

main([7, 3, 9, 5, 6, 12]);
