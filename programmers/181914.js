// Title: 9로 나눈 나머지
// Time: O(n)
// Space: O(n)
function solution(number) {
  number = number.split("").map(Number);

  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }

  return sum % 9;
}
