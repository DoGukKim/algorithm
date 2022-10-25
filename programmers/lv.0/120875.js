// Title: 평행
// 방법 1
// Time: O(1)
// Space: O(1)
// Input: [[1, 4], [9, 2], [3, 8], [10, 4]]
function solution(dots) {
  const [a, b, c, d] = dots;

  function calcSlope(n, m) {
    return Math.abs(n[1] - m[1]) / Math.abs(n[0] - m[0]);
  }

  if (calcSlope(a, b) === calcSlope(c, d)) {
    return 1;
  }
  if (calcSlope(a, c) === calcSlope(b, d)) {
    return 1;
  }
  if (calcSlope(a, d) === calcSlope(b, c)) {
    return 1;
  }

  return 0;
} // -> 1
