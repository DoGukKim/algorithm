// Title: 미로탐색
// Time: O(v*e)
// Space: O(v+e)
function main(grid) {
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];
  let result = 0;

  function dfs(r, c) {
    if (r === 6 && c === 6) return result++;

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      const rowInBound = 0 <= nr && nr < grid.length;
      const columInBound = 0 <= nc && nc < grid[0].length;

      if (rowInBound && columInBound && grid[nr][nc] === 0) {
        grid[nr][nc] = 1;
        dfs(nr, nc);
        grid[nr][nc] = 0;
      }
    }
  }

  grid[0][0] = 1;
  dfs(0, 0);

  console.log(result);
}

const grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

main(grid);
