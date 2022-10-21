// Title: 분수의 덧셈
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: 1/2, 3/4
function solution(denum1, num1, denum2, num2) {
  // 통분
  const [c, p] = [denum1 * num2 + denum2 * num1, num1 * num2];
  // 유클리드 호제법으로 최대 공약수 구하기
  let getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));
  let gcd = getGCD(c, p);
  return [c / gcd, p / gcd];
} // -> [ 5, 4 ]
