// Title: 정사각형으로 만들기
// Time: O(n^2)
// Space: O(n^2)
function solution(arr) {
  const r = arr.length;
  const c = arr[0].length;

  if (r === c) return arr;

  if (r > c) {
    const mx = Array.from({ length: r }, () => Array(r).fill(0));
    paintMatrix(mx, r);
    return mx;
  }

  if (r < c) {
    const mx = Array.from({ length: c }, () => Array(c).fill(0));
    paintMatrix(mx, c);
    return mx;
  }

  function paintMatrix(mx, len) {
    for (let x = 0; x < r; x++) {
      for (let y = 0; y < c; y++) {
        mx[x][y] = arr[x][y];
      }
    }
  }
}
