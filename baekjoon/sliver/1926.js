// Title: 그림
// Time: O(nm)
// Space: O(nm)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ");
const graph = input.map((i) => i.split(" "));

let cnt = 0;
let mw = 0;
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

for (let r = 0; r < n; r++) {
  for (let c = 0; c < m; c++) {
    if (graph[r][c] === "1") {
      graph[r][c] = "0";
      bfs(r, c);
      cnt++;
    }
  }
}

function bfs(r, c) {
  const queue = [[r, c]];
  let w = 1;

  while (queue.length) {
    const [cr, cc] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nr = cr + dr[i];
      const nc = cc + dc[i];
      const rowInBound = 0 <= nr && nr < n;
      const columInBound = 0 <= nc && nc < m;

      if (rowInBound && columInBound && graph[nr][nc] === "1") {
        graph[nr][nc] = "0";
        queue.push([nr, nc]);
        w++;
      }
    }
    if (w > mw) mw = w;
  }
}

console.log(cnt);
console.log(mw);
