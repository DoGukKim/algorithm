const minimumIsland = (grid) => {
  const visited = new Set();
  let result = Infinity;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const size = explore(grid, r, c, visited);
      if (size > 0 && size < result) result = size;
    }
  }

  return result;
};

const explore = (grid, r, c, visited) => {
  const rowInBound = 0 < r && r < grid.length;
  const columInBound = 0 < c && c < grid[0].length;
  if (!rowInBound || !columInBound) return 0;

  if (grid[r][c] === "W") return 0;

  const pos = r + "," + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += explore(grid, r - 1, c, visited);
  size += explore(grid, r + 1, c, visited);
  size += explore(grid, r, c - 1, visited);
  size += explore(grid, r, c + 1, visited);

  return size;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

minimumIsland(grid); // -> 2
