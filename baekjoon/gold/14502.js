// Title: 연구소
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
let [n, m] = input.shift();
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let result = 0;
const dfs = (cnt) => {
  if (cnt === 3) {
    const matrix = input.map((v) => [...v]);
    const max = bfs(matrix);
    if (result < max) result = max;
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (input[i][j] === 0) {
        input[i][j] = 1;
        dfs(cnt + 1);
        input[i][j] = 0;
      }
    }
  }
};

const bfs = (matrix) => {
  const queue = [];
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (matrix[x][y] === 2) queue.push([x, y]);
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dir[i];
      const nx = x + dx;
      const ny = y + dy;
      if (0 <= nx && nx < n && 0 <= ny && ny < m && matrix[nx][ny] === 0) {
        matrix[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }

  let cnt = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (matrix[x][y] === 0) cnt++;
    }
  }

  return cnt;
};

dfs(0);
console.log(result);
