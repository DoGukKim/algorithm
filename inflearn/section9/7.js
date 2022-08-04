const main = (grid) => {
  let result = 0;
  const visited = new Set();
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r, c, visited) === true) {
        result++;
      }
    }
  }

  return result;
};

const explore = (grid, r, c, visited) => {
  const rowInBound = 0 < r && r < grid.length;
  const columInBound = 0 < c && c < grid[0].length;
  if (!rowInBound || !columInBound) return false;

  if (grid[r][c] === 0) return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);

  explore(grid, r - 1, c + 1, visited);
  explore(grid, r - 1, c - 1, visited);
  explore(grid, r + 1, c - 1, visited);
  explore(grid, r + 1, c + 1, visited);

  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);

  return true;
};

main([
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
]);
