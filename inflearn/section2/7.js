// Title: 봉우리
// Time: O(n^2)
// Space: O(1)
function main(n, matrix) {
  let result = 0;
  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      let flag = true; // 봉우리 가능 플래그

      for (let i = 0; i < 4; i++) {
        const [dx, dy] = dir[i];
        const nx = x + dx;
        const ny = y + dy;
        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
          if (matrix[x][y] < matrix[nx][ny]) flag = false;
        }
      }

      if (flag) result++;
    }
  }

  console.log(result);
}

main(5, [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
]);
