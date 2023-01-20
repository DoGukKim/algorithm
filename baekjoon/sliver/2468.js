// Title: 안전 영역
// Time: O(v*e)
// Space: O(n^2*(v+e))
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
input = input.map((i) => i.split(" ").map(Number));
let result = 0;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

for (let i = 0; i <= 100; i++) {
  let cnt = 0;
  const ch = Array.from({ length: n }, () => Array(n).fill(0));

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (input[x][y] > i && ch[x][y] === 0) {
        ch[x][y] = 1;
        bfs(x, y, i, ch);
        cnt++;
      }
    }
  }

  if (result < cnt) result = cnt;
}

console.log(result);

function bfs(x, y, m, ch) {
  const queue = [[x, y]];

  while (queue.length) {
    const [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < n &&
        input[nx][ny] > m &&
        ch[nx][ny] === 0
      ) {
        ch[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
}
