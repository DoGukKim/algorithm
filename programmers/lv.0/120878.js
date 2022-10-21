// Title: 유한소수 판별하기
// 방법 1
// Time: O(log n + n)
// Space: O(n)
// Input: 7	20
function solution(a, b) {
  let getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));
  let gcd = getGCD(a, b);

  b /= gcd;
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
} // -> 1
