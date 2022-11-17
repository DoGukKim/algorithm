const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [m, n] = input.shift().split(" ");
const graph = input.map((i) => i.split(" "));
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
const queue = [];
let index = 0;
let result = 0;
let unripeTomato = 0;

for (let r = 0; r < n; r++) {
  for (let c = 0; c < m; c++) {
    if (graph[r][c] === "0") unripeTomato++;
    if (graph[r][c] === "1") {
      queue.push([r, c, 0]);
    }
  }
}

while (queue.length > index) {
  const [r, c, d] = queue[index++];

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];
    const rowInBound = 0 <= nr && nr < n;
    const columInBound = 0 <= nc && nc < m;

    if (rowInBound && columInBound && graph[nr][nc] === "0") {
      graph[nr][nc] = "1";
      queue.push([nr, nc, d + 1]);
      unripeTomato--;
    }
  }

  result = d;
}

console.log(unripeTomato > 0 ? -1 : result);
