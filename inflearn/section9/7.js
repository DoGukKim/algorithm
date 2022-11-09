function main2(grid) {
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function dfs(x, y) {
    grid[x][y] = 0;

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const xInBound = 0 <= nx && nx < grid.length;
      const yOutBound = 0 <= ny && ny < grid[0].length;
      if (xInBound && yOutBound && grid[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }

  let result = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === 1) {
        result++;
        dfs(x, y);
      }
    }
  }

  return result;
}
