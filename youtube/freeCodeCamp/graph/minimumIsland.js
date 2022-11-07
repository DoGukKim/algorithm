const minimumIsland = (grid) => {
  const nr = [-1, 0, 1, 0];
  const nc = [0, 1, 0, -1];
  const visited = new Set();

  function dfs(r, c) {
    const rowInBound = 0 <= r && r < grid.length;
    const columInBound = 0 <= c && c < grid[0].length;
    if (!rowInBound || !columInBound) return 0;
    if (grid[r][c] === "W") return 0;

    const pos = r + "," + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;

    for (let i = 0; i < 4; i++) {
      size += dfs(r + nr[i], c + nc[i]);
    }

    return size;
  }

  let result = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "L") {
        const size = dfs(r, c);
        if (size < result) result = size;
      }
    }
  }

  return result;
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
