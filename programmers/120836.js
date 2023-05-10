// Title: 순서쌍의 개수
// 방법 1
// Time: O(n)
// Space: O(1)
// Input: 20
function solution(n) {
  let c = 0;

  for (let i = 1; i <= n; i++) {
    if ((n / i) % 1 === 0) {
      c++;
    }
  }

  return c;
} // -> 6
