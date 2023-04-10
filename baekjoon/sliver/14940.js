// Title: 쉬운 최단거리
// Time: O(nm)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m] = input.shift();
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const queue = [];
const ch = Array.from({ length: n }, () => Array(m).fill(-1));
for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (input[x][y] === 2) {
      queue.push([x, y, 0]);
      ch[x][y] = 0;
      continue;
    }

    if (input[x][y] === 0) {
      ch[x][y] = 0;
      continue;
    }
  }
}

bfs();
let result = "";
for (let i = 0; i < n; i++) {
  result += `${ch[i].join(" ")}\n`;
}
console.log(result);

function bfs() {
  let index = 0;

  while (queue.length > index) {
    const [x, y, distance] = queue[index++];

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < m &&
        input[nx][ny] === 1 &&
        ch[nx][ny] === -1
      ) {
        ch[nx][ny] = distance + 1;
        queue.push([nx, ny, distance + 1]);
      }
    }
  }
}
