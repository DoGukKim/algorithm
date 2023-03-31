// Title: 유한소수 판별하기
// Time: O(log n)
// Space: O(log n)
function solution(a, b) {
  let getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));
  let gcd = getGCD(a, b);

  b /= gcd;
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}
