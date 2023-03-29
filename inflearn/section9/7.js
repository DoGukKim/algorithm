// Title: 섬나라 아일랜드(DFS)
// Time: O(nm)
// Space: O(1)
function main(n, mx) {
  const dist = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  let result = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (mx[x][y] === 1) {
        dfs(x, y);
        result++;
      }
    }
  }
  console.log(result);

  function dfs(x, y) {
    mx[x][y] = 0;

    for (let i = 0; i < 8; i++) {
      const [dx, dy] = dist[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < n && 0 <= ny && ny < n && mx[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }
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
