// Title: k의 개수
// 방법 1
// Time: O(n^2)
// Space: O(1)
// Input: 1, 13, 1
function solution(i, j, k) {
  let result = 0;

  while (i <= j) {
    let t = i;

    while (t) {
      if (t % 10 === k) result++;
      t = Math.floor(t / 10);
    }

    i++;
  }

  return result;
} // -> 6
