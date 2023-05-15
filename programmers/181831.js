// Title: l특별한 이차원 배열 2
// Time: O(n^2)
// Space: O(1)
function solution(arr) {
  const n = arr[0].length;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (arr[x][y] !== arr[y][x]) return 0;
    }
  }

  return 1;
}
