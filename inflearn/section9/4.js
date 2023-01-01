// Title: 미로탐색
// Time: O(v*e)
// Space: O(v+e)
function main(mx) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let result = 0;

  function dfs(x, y) {
    if (x === 6 && y === 6) {
      result++;
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const rowInBound = 0 <= nx && nx < 7;
      const columInBound = 0 <= ny && ny < 7;

      if (rowInBound && columInBound && mx[nx][ny] === 0) {
        mx[x][y] = 1;
        dfs(nx, ny);
        mx[x][y] = 0;
      }
    }
  }
  mx[0][0] = 1;
  dfs(0, 0);

  console.log(result);
}

const matrix = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

main(matrix);
