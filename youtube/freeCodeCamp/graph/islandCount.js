const islandCount = (grid) => {
  let result = 0;
  const visited = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited) === true) result++;
    }
  }

  return result;
};

const explore = (grid, r, c, visited) => {
  const rowInBound = 0 < r && r < grid.length;
  const columInBound = 0 < c && c < grid[0].length;
  if (!rowInBound || !columInBound) return false; // 그리드를 벗어나면 false 반환

  const pos = r + "," + "c"; // 키의 중복을 방지하기 위함
  if (grid[r][c] === "W") return false;
  if (visited.has(pos)) return false;

  visited.add(pos);

  explore(grid, r - 1, c, visited); // top: ;
  explore(grid, r, c + 1, visited); // right
  explore(grid, r + 1, c, visited); // bottom
  explore(grid, r, c - 1, visited); // left

  return true;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

islandCount(grid); // -> 3
