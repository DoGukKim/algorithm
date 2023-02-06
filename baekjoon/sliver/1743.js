// Title: 음식물 피하기
// Time: O(nm)
// Space: (nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m, k] = input.shift();
const matrix = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let result = 0;
for (let i = 0; i < k; i++) {
  const [v, e] = input[i];
  matrix[v][e] = 1;
}

for (let x = 1; x <= n; x++) {
  for (let y = 1; y <= m; y++) {
    if (matrix[x][y] === 1) {
      matrix[x][y] = 0;
      const cnt = dfs(x, y);
      if (result < cnt) result = cnt;
    }
  }
}
console.log(result);

function dfs(x, y) {
  const stack = [[x, y]];
  let cnt = 1;

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dir[i];
      const nx = x + dx;
      const ny = y + dy;
      if (
        0 <= nx &&
        nx < n + 1 &&
        0 <= ny &&
        ny < m + 1 &&
        matrix[nx][ny] === 1
      ) {
        matrix[nx][ny] = 0;
        cnt++;
        stack.push([nx, ny]);
      }
    }
  }

  return cnt;
}
