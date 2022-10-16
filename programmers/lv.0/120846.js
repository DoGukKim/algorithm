// Title: 합성수 찾기
// 방법 1
// Time: O(n*m) -> m = i
// Space: O(1)
// Input: 10
function solution(n) {
  let result = 0;

  for (let i = 4; i <= n; i++) {
    let c = 1;

    for (let j = 2; j <= i; j++) {
      if ((i / j) % 1 === 0) {
        c++;
      }
    }

    if (c >= 3) result++;
  }

  return result;
} // -> 5
