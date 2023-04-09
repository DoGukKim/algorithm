// Title: 공주님을 구해라!
// Time: O(nm)
// Space: O(nm)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [n, m, time] = input.shift();
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const queue = [[0, 0, 0]];
let gram = [];
if (input[0][0] === 2) gram.push([0, 0, 0]);
input[0][0] = 1;
let a = Infinity;
let b = Infinity;
bfs();
if (gram.length) {
  const [x, y, t] = gram[0];
  const result = Math.abs(n - 1 - x) + Math.abs(m - 1 - y) + t;
  if (result >= 0 && time >= result) b = result;
}

const result = Math.min(a, b);
console.log(result !== Infinity ? result : "Fail");

function bfs() {
  while (queue.length) {
    const [x, y, t] = queue.shift();
    if (x === n - 1 && y === m - 1) {
      if (time - t >= 0) a = t;
      break;
    }

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const nx = x + dx;
      const ny = y + dy;

      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (input[nx][ny] === 2) gram.push([nx, ny, t + 1]);
        if (input[nx][ny] === 1) continue;

        input[nx][ny] = 1;
        queue.push([nx, ny, t + 1]);
      }
    }
  }
}
