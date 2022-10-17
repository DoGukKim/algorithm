// Title: 팩토리얼
// 방법 1
// Time: O(n)
// Space: O(1)
// Input: 3628800
function solution(n) {
  if (n === 1) return 1;

  let sum = 2;
  let m = 3;

  while (sum < n) {
    if (sum * m > n) break;
    sum *= m;
    m++;
  }

  return m - 1;
} // -> 10
