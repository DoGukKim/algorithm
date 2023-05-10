// Title: 두 수의 연산값 비교하기
// Time: O(1)
// Space: O(1)
function solution(a, b) {
  const A = a.toString() + b.toString();
  const B = 2 * a * b;
  return A === B ? A : Math.max(Number(A), B);
}
