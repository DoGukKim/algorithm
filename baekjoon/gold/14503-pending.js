let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input.shift();
const [x, y, d] = input.shift();
let result = 1;
const dir = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

input[x][y] = 2;
dfs(x, y, d);
function dfs(x, y, d) {
  let time = 3;
  while (time--) {
    const [dx, dy] = dir[d + 1];

    const nx = x + dx;
    const ny = y + dy;
    if (0 <= nx && nx < n && 0 <= ny && ny < m) {
      if (input[nx][ny] !== 1 && input[nx][ny] !== 2) {
        result++;
        dfs(nx, ny, d + 1);
      }
      if (input[nx][ny] === 2 || input[nx][ny] === 1) {
        dfs(x, y, d + 1);
      }
    }
  }
}

console.log(result);
