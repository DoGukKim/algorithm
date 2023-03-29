// Title: 미로탐색
// Time: O(1)
// Space: O(1)
function main(mx) {
  const dist = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let result = 0;
  mx[0][0] = 1;
  dfs(0, 0);
  console.log(result);

  function dfs(x, y) {
    if (x === 6 && y === 6) {
      result++;
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dist[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < 7 && 0 <= ny && ny < 7 && mx[nx][ny] === 0) {
        mx[x][y] = 1;
        dfs(nx, ny);
        mx[x][y] = 0;
      }
    }
  }
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
