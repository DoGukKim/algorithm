// Title: 제곱수 판별하기
// 방법 1
// Time: O(1)
// Space: O(1)
// Input: 144
function solution(n) {
  return Math.sqrt(n) % 1 ? 2 : 1;
} // -> 1
