// Title: 피자 나눠 먹기 (2)
// 방법 1
// Time: O(n)
// Space: O(1)
// Input: 10
function solution(n) {
  let result = 1;
  let s = 6;

  while (s % n !== 0) {
    s += 6;
    result++;
  }

  return result;
} // -> 5
