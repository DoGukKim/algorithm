// Title: 공배수
// Time: O(1)
// Space: O(1)
function solution(number, n, m) {
  const result = number % n === 0 && number % m === 0;
  return !result ? 0 : 1;
}
