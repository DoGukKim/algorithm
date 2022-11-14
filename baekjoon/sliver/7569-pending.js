const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [m, n, h] = input.shift().split(" ");

const matrix = input.map((i) => i.split(" "));
let isAllRipe = true;
let day = 0;
const visited = new Set();

for (let r = 0; r < n * h; r++) {
  for (let c = 0; c < m; c++) {
    if (matrix[r][c] === "1" || matrix[r][c] === "-1") isAllRipe = false;
    if (matrix[r][c] === "1" && !visited.has(r + "," + c)) {
      bfs(r, c);
    }
  }
}

function bfs(r, c) {
  const nr = [-1, 0, 1, 0];
  const nc = [0, 1, 0, -1];

  const queue = [[r, c]];

  while (queue.length) {
    const [r, c] = queue.shift();
    visited.add(r + "," + c);

    for (let i = 0; i < 4; i++) {
      const row = r + nr[i];
      const colum = c + nc[i];
      const rowInBound = 0 <= row && row < n * h;
      const columInBound = 0 <= colum && colum < m;

      if (rowInBound && columInBound && matrix[row][colum] === "0") {
        console.log("s");
        queue.push([row, colum]);
        visited.add(row + "," + colum);
        matrix[row][colum] = "1";
      }
    }

    day++;
  }
}

console.log(day);
