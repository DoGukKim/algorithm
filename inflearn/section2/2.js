// Title: 보이는 학생
// 방법 1
// Time: O(n)
// Space: O(n)
function main(numbers) {
  let result = 1;
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (min < numbers[i]) {
      result++;
      min = numbers[i];
    }
  }

  return result;
}

console.log(main([130, 135, 148, 140, 145, 150, 150, 153])); // -> 5
