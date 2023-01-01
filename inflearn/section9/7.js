// Title: 섬나라 아일랜드(DFS)
// Time: O((v*e)*아일랜드 수)
// Space: O(v+e)
function main(n, mx) {
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let result = 0;

  function dfs(x, y) {
    mx[x][y] = 0;

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const rowInBound = 0 <= nx && nx < n;
      const columInBound = 0 <= ny && ny < n;

      if (rowInBound && columInBound && mx[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (mx[x][y] === 1) {
        dfs(x, y);
        result++;
      }
    }
  }

  console.log(result);
}

const matrix = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

main(7, matrix);
