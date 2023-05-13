// Title: 간단한 논리 연산
// Time: O(1)
// Space: O(1)
function solution(x1, x2, x3, x4) {
  const a = x1 || x2;
  const b = x3 || x4;
  return a && b;
}
