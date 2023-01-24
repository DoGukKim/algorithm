// Title: 빙산
// Time: O(nm*v+e)
// Space: O(nm*v+e)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let result = 0;

while (true) {
  bfs();

  let cnt = 0;
  const ch = Array.from({ length: n }, () => Array(m).fill(0));
  for (let x = 1; x < n - 1; x++) {
    for (let y = 1; y < m - 1; y++) {
      if (input[x][y] > 0 && ch[x][y] === 0) {
        dfs(x, y, ch);
        cnt++;
      }
    }
  }

  result++;
  if (cnt > 1) return console.log(result);
  if (cnt === 0) return console.log(0);
}

function bfs() {
  const mx = Array.from({ length: n }, () => Array(m).fill(0));
  const queue = [];
  for (let x = 1; x < n - 1; x++) {
    for (let y = 1; y < m - 1; y++) {
      mx[x][y] = input[x][y];
      if (input[x][y] > 0) queue.push([x, y]);
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (input[x][y] === 0) continue;
      if (0 <= nx && nx < n && 0 <= ny && ny < m && mx[nx][ny] === 0) {
        input[x][y] -= 1;
      }
    }
  }
}

function dfs(x, y, ch) {
  ch[x][y] = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (
      0 <= nx &&
      nx < n &&
      0 <= ny &&
      ny < m &&
      input[nx][ny] > 0 &&
      ch[nx][ny] === 0
    ) {
      dfs(nx, ny, ch);
    }
  }
}
