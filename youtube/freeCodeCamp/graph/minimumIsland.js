const minimumIsland = (grid) => {
  const visited = new Set();
  let result = Infinity;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = explore(grid, r, c, visited);
      if (size > 0 && size < result) result = size;
    }
  }

  return result;
};

const explore = (grid, r, c, visited) => {
  const rowInBound = 0 <= r && r < grid.length;
  const columInBound = 0 <= c && c < grid[0].length;
  if (!rowInBound || !columInBound) return 0; // 그리드를 벗어나면 0 반환

  if (grid[r][c] === "W") return 0;
  const pos = r + "," + c; // 키의 중복을 방지하기 위함
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += explore(grid, r - 1, c, visited); // top: ;
  size += explore(grid, r, c + 1, visited); // right
  size += explore(grid, r + 1, c, visited); // bottom
  size += explore(grid, r, c - 1, visited); // left
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
