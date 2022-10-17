// Title: 제곱수 판별하기
// 방법 1
// Time: O(1)
// Space: O(1)
// Input: 144
function solution(n) {
  if (Math.sqrt(n) % 1 > 0) return 2;
  return 1;
} // -> 1
