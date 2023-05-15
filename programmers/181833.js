// Title: 특별한 이차원 배열 1
// Time: O(n)
// Space: O(n^2)
function solution(n) {
  const mx = Array.from({ length: n }, () => Array(n).fill(0));

  for (let x = 0; x < n; x++) {
    mx[x][x] = 1;
  }

  return mx;
}
